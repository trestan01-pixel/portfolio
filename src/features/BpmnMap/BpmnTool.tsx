import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Background,
  BackgroundVariant,
  MiniMap,
  MarkerType,
  Connection,
  Edge,
  Node,
  ReactFlowInstance,
  OnSelectionChangeParams,
  Panel,
  ConnectionMode,
  useReactFlow,
  useStoreApi,
  OnConnectStart,
  OnConnectEnd
} from 'reactflow';
import { motion, AnimatePresence } from 'framer-motion';
import { toPng } from 'html-to-image';
import { Plus, Minus, Maximize, Search, Save, Upload, EyeOff, Monitor } from 'lucide-react';
import 'reactflow/dist/style.css';

// --- ИМПОРТ КОМПОНЕНТОВ ---
import { CustomShapeNode, GroupNode, SwimlaneNode } from './components/CustomNodes';
import { Toolbar } from './components/Toolbar';
import { PropertiesPanel } from './components/PropertiesPanel';
import { Dashboard } from './components/Dashboard';
import { ContextMenu } from './components/ContextMenu';
import { AiAssistant } from './components/AiAssistant';
import { SelectionToolbar } from './components/SelectionToolbar';
import { DrawingCanvas } from './components/DrawingCanvas';
import TurboEdge from './components/TurboEdge';
import { reconnectEdge } from 'reactflow';

import { AppNode, AppEdge, ShapeType, NodeData, Theme, DrawingPath, MetricStatus, CommentType, EdgeStyleType } from './types';
import { INITIAL_NODES, INITIAL_EDGES, COLORS } from './constants';

// --- НАСТРОЙКИ ---
const nodeTypes = { customShape: CustomShapeNode, group: GroupNode, swimlane: SwimlaneNode };
const edgeTypes = { turbo: TurboEdge };

const defaultEdgeOptions = {
    type: 'turbo',
    animated: false, // Отключаем по умолчанию, будем управлять через data
    style: { strokeWidth: 2 },
};

type ToolType = 'cursor' | 'pen' | 'pen-straight' | 'eraser-object' | 'eraser-part';

// --- ОСНОВНОЙ КОМПОНЕНТ ---
const BpmnToolContent = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const connectingNodeId = useRef<string | null>(null);
  
  // --- STATE ---
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>(INITIAL_NODES);
  const [edges, setEdges, onEdgesChange] = useEdgesState<AppEdge>(INITIAL_EDGES);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);
  const [selectedElement, setSelectedElement] = useState<AppNode | AppEdge | null>(null);
  const [isEdgeSelected, setIsEdgeSelected] = useState(false);
  const [selectedNodesForToolbar, setSelectedNodesForToolbar] = useState<AppNode[]>([]);
  const [menu, setMenu] = useState<{ id: string; top: number; left: number; node: AppNode } | null>(null);
  
  const [isFlowActive, setIsFlowActive] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [showMiniMap, setShowMiniMap] = useState(true); // Включаем по умолчанию
  const [theme, setTheme] = useState<Theme>('dark');
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  
  const [activeTool, setActiveTool] = useState<ToolType>('cursor');
  const [brushSize, setBrushSize] = useState(3);
  const [brushColor, setBrushColor] = useState(COLORS.cyan);
  const [drawingPaths, setDrawingPaths] = useState<DrawingPath[]>([]);
  const [currentPath, setCurrentPath] = useState<DrawingPath | null>(null);
  const [selectedPathId, setSelectedPathId] = useState<string | null>(null); 
  const [searchQuery, setSearchQuery] = useState('');
  
  // --- HISTORY ---
  const [history, setHistory] = useState<{nodes: AppNode[], edges: AppEdge[]}[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [clipboardNode, setClipboardNode] = useState<AppNode | null>(null);

  const nodesRef = useRef(nodes);
  const edgesRef = useRef(edges);
  const selectedRef = useRef(selectedElement);
  const clipboardRef = useRef(clipboardNode);

  useEffect(() => { nodesRef.current = nodes; }, [nodes]);
  useEffect(() => { edgesRef.current = edges; }, [edges]);
  useEffect(() => { selectedRef.current = selectedElement; }, [selectedElement]);
  useEffect(() => { clipboardRef.current = clipboardNode; }, [clipboardNode]);

  const saveToHistory = useCallback(() => {
      const current = { nodes: nodesRef.current, edges: edgesRef.current };
      setHistory(prev => {
          const newHistory = prev.slice(0, historyIndex + 1);
          newHistory.push(current);
          return newHistory.slice(-20);
      });
      setHistoryIndex(prev => Math.min(prev + 1, 19));
  }, [historyIndex]);

  const undo = useCallback(() => {
      if (historyIndex > 0) {
          const prev = history[historyIndex - 1];
          setNodes(prev.nodes);
          setEdges(prev.edges);
          setHistoryIndex(prev => prev - 1);
      }
  }, [history, historyIndex, setNodes, setEdges]);

  // --- INITIALIZATION ---
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    
    const savedNodes = localStorage.getItem('bpmn-nodes');
    const savedEdges = localStorage.getItem('bpmn-edges');
    const savedPaths = localStorage.getItem('bpmn-paths');
    
    if (savedNodes && savedEdges) {
      try {
        const n = JSON.parse(savedNodes); const e = JSON.parse(savedEdges);
        setNodes(n); setEdges(e);
        if (savedPaths) setDrawingPaths(JSON.parse(savedPaths));
        setHistory([{ nodes: n, edges: e }]); setHistoryIndex(0);
      } catch (err) { setNodes(INITIAL_NODES); setEdges(INITIAL_EDGES); }
    } else {
        setNodes(INITIAL_NODES); setEdges(INITIAL_EDGES);
        setHistory([{ nodes: INITIAL_NODES, edges: INITIAL_EDGES }]); setHistoryIndex(0);
    }
    setIsLoaded(true);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- AUTO SAVE ---
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('bpmn-nodes', JSON.stringify(nodes));
      localStorage.setItem('bpmn-edges', JSON.stringify(edges));
      localStorage.setItem('bpmn-paths', JSON.stringify(drawingPaths));
    }
  }, [nodes, edges, drawingPaths, isLoaded]);

  // --- THEME & STYLES ---
  useEffect(() => { 
      document.documentElement.setAttribute('data-theme', theme); 
      const bgColor = theme === 'dark' ? '#0B0F19' : '#f3f4f6';
      const textColor = theme === 'dark' ? '#ffffff' : '#111827';

      setEdges((eds) => eds.map(e => ({
          ...e,
          labelStyle: { ...e.labelStyle, fill: textColor, fontWeight: 700, fontSize: 12 },
          labelBgStyle: { fill: bgColor },
          labelBgPadding: [8, 4] as [number, number],
          labelBgBorderRadius: 4,
      })));
  }, [theme, setEdges]);

  // --- SEARCH LOGIC ---
  useEffect(() => {
      setNodes((nds) => nds.map((node) => {
          if (!searchQuery.trim()) {
              if (node.data.isMatched === undefined) return node;
              return { ...node, data: { ...node.data, isMatched: undefined } };
          }
          const labelMatch = node.data.label?.toLowerCase().includes(searchQuery.toLowerCase());
          const descMatch = node.data.description?.toLowerCase().includes(searchQuery.toLowerCase());
          const isMatch = labelMatch || descMatch;
          if (node.data.isMatched !== isMatch) {
              return { ...node, data: { ...node.data, isMatched: isMatch } };
          }
          return node;
      }));
  }, [searchQuery, setNodes]);

  // --- ACTIONS ---
  const handleGenerateFromAI = (newNodes: AppNode[], newEdges: AppEdge[]) => {
      setNodes(newNodes);
      setEdges(newEdges);
      setTimeout(() => reactFlowInstance?.fitView({ duration: 800 }), 100);
  };
  
  // --- ГЛАВНАЯ ФУНКЦИЯ ОБНОВЛЕНИЯ ЭЛЕМЕНТОВ (ПЕРЕПИСАНА) ---
  const updateElementData = (id: string, updates: Partial<any>) => {
      // Это наша новая функция, которая теперь умеет обрабатывать все стили из панели.
      // `updates` - это объект с новыми данными, например { data: { fontSize: 'large' } }

      if (selectedRef.current?.id !== id) return; // Доп. проверка

      if (isEdgeSelected) {
          setEdges((eds) => eds.map(e => {
              if (e.id === id) {
                  // Глубокое копирование, чтобы избежать мутаций
                  const newEdge = { ...e, data: { ...e.data }, style: { ...e.style } };
                  
                  // `updates` может содержать `data` или другие поля
                  const dataUpdates = updates.data || updates;

                  // 1. Обновляем объект data
                  Object.assign(newEdge.data, dataUpdates);

                  // 2. Применяем стили и атрибуты на основе data
                  const data = newEdge.data;
                  
                  // Цвет
                  newEdge.style.stroke = data.color || 'url(#edge-gradient)';
                  
                  // Толщина
                  newEdge.style.strokeWidth = data.strokeWidth || 2;
                  
                  // Прозрачность
                  newEdge.style.opacity = (data.opacity !== undefined ? data.opacity : 100) / 100;

                  // Стиль штриха
                  if (data.styleType === 'dashed') newEdge.style.strokeDasharray = '8 8';
                  else if (data.styleType === 'dotted') newEdge.style.strokeDasharray = '1 8';
                  else newEdge.style.strokeDasharray = undefined;

                  // Анимация
                  newEdge.animated = data.animation === 'dash'; // Стандартная анимация для "Потока"
                  // Анимация "Шар" будет управляться внутри TurboEdge на основе `data.animation`

                  // Маркеры (стрелки)
                  newEdge.markerStart = data.markerStart;
                  newEdge.markerEnd = data.markerEnd;

                  // Тип пути (форма линии)
                  if (data.pathType) newEdge.type = data.pathType;
                  
                  // Z-Index
                  if (data.zIndex !== undefined) newEdge.zIndex = data.zIndex;
                  
                  return newEdge;
              }
              return e;
          }));
      } else {
          setNodes((nds) => nds.map(n => {
              if (n.id === id) {
                  const newNode = { ...n, data: { ...n.data, ...updates.data } };
                  
                  // Обновляем draggable на основе locked
                  if (newNode.data.locked !== undefined) {
                      newNode.draggable = !newNode.data.locked;
                  }
                  
                  // Обновляем zIndex
                  if (newNode.data.zIndex !== undefined) {
                      newNode.zIndex = newNode.data.zIndex;
                  }

                  return newNode;
              }
              return n;
          }));
      }
  };

  const deleteElement = (id: string) => {
    saveToHistory();
    const nodeToDelete = nodesRef.current.find(n => n.id === id);
    const isParent = nodeToDelete && (nodeToDelete.type === 'group' || nodeToDelete.type === 'swimlane');

    if (isParent) {
        setNodes((nds) => {
            const filtered = nds.filter(n => n.id !== id);
            return filtered.map(n => {
                if (n.parentNode === id) {
                    const absX = nodeToDelete.position.x + n.position.x;
                    const absY = nodeToDelete.position.y + n.position.y;
                    return { ...n, parentNode: undefined, position: { x: absX, y: absY }, zIndex: 10, extent: undefined };
                }
                return n;
            });
        });
    } else {
        setNodes((nds) => nds.filter((n) => n.id !== id));
    }
    
    setEdges((eds) => eds.filter((e) => e.id !== id && e.source !== id && e.target !== id));
    setDrawingPaths((paths) => paths.filter(p => p.id !== id));
    setSelectedElement(null); setMenu(null); setSelectedPathId(null);
  };


  const handleGroupNodes = () => {
    if (selectedNodesForToolbar.length < 2) return;
    saveToHistory();
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    selectedNodesForToolbar.forEach((node) => {
        const w = Number(node.style?.width) || 160;
        const h = Number(node.style?.height) || 80;
        minX = Math.min(minX, node.position.x);
        minY = Math.min(minY, node.position.y);
        maxX = Math.max(maxX, node.position.x + w);
        maxY = Math.max(maxY, node.position.y + h);
    });

    const padding = 40;
    const groupNode: AppNode = {
        id: `group-${Date.now()}`,
        type: 'group',
        position: { x: minX - padding, y: minY - padding },
        style: { width: (maxX - minX) + (padding * 2), height: (maxY - minY) + (padding * 2) },
        data: { label: 'Новая группа', type: ShapeType.SWIMLANE },
        zIndex: -1,
        selected: true
    };
    const updatedChildren = selectedNodesForToolbar.map(node => ({
        ...node,
        parentNode: groupNode.id,
        position: { x: node.position.x - groupNode.position.x, y: node.position.y - groupNode.position.y },
        zIndex: 10,
        selected: false,
    }));
    setNodes((nds) => {
        const others = nds.filter(n => !selectedNodesForToolbar.find(sn => sn.id === n.id));
        return [...others, groupNode, ...updatedChildren];
    });
    setSelectedNodesForToolbar([]);
    setSelectedElement(groupNode);
  };

  const duplicateNode = (node: AppNode) => {
      saveToHistory();
      const newNode = { ...node, id: `${node.id}-copy-${Date.now()}`, position: { x: node.position.x + 50, y: node.position.y + 50 }, selected: true };
      setNodes((nds) => nds.concat(newNode)); setMenu(null);
  };

  const handleAlign = (direction: 'horizontal' | 'vertical') => {
    if (selectedNodesForToolbar.length < 2) return;
    saveToHistory();
    setNodes((nds) => {
      let average = 0;
      if (direction === 'horizontal') { const sumY = selectedNodesForToolbar.reduce((acc, node) => acc + node.position.y, 0); average = sumY / selectedNodesForToolbar.length; } 
      else { const sumX = selectedNodesForToolbar.reduce((acc, node) => acc + node.position.x, 0); average = sumX / selectedNodesForToolbar.length; }
      return nds.map((node) => { const isSelected = selectedNodesForToolbar.find((n) => n.id === node.id); return isSelected ? { ...node, position: { x: direction === 'vertical' ? average : node.position.x, y: direction === 'horizontal' ? average : node.position.y } } : node; });
    });
  };

  

  const downloadImage = () => {
    if (reactFlowWrapper.current === null) return;
    toPng(reactFlowWrapper.current, { cacheBust: true, filter: (node) => !['react-flow__controls', 'react-flow__panel', 'fixed', 'react-flow__minimap'].some(cls => node.classList?.contains(cls)), backgroundColor: theme === 'dark' ? '#0B0F19' : '#ffffff', style: { transform: 'none' } })
    .then((dataUrl) => { const link = document.createElement('a'); link.download = `bpmn-diagram.png`; link.href = dataUrl; link.click(); });
  };
  
  const saveJson = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ nodes, edges, drawingPaths }));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "diagram.json");
      document.body.appendChild(downloadAnchorNode); downloadAnchorNode.click(); downloadAnchorNode.remove();
  };
  
  const loadJson = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]; if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
          try {
              const json = JSON.parse(e.target?.result as string);
              if(json.nodes) setNodes(json.nodes);
              if(json.edges) setEdges(json.edges);
              if(json.drawingPaths) setDrawingPaths(json.drawingPaths);
              saveToHistory();
          } catch(err) { console.error("Invalid JSON"); }
      }; reader.readAsText(file); event.target.value = ''; 
  };

  // --- KEYBOARD SHORTCUTS ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'Escape') {
          if (isPresentationMode) setIsPresentationMode(false);
          setMenu(null);
          setSelectedElement(null); 
          setSelectedNodesForToolbar([]);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') { e.preventDefault(); undo(); }
      if ((e.ctrlKey || e.metaKey) && e.key === 'g') { e.preventDefault(); if (selectedNodesForToolbar.length > 1) handleGroupNodes(); }
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && selectedRef.current && !('source' in selectedRef.current)) { setClipboardNode(selectedRef.current as AppNode); }
      if ((e.ctrlKey || e.metaKey) && e.key === 'v' && clipboardRef.current) {
          saveToHistory();
          const nodeToCopy = clipboardRef.current;
          const newNode = { ...nodeToCopy, id: `${nodeToCopy.id}-copy-${Date.now()}`, position: { x: nodeToCopy.position.x + 50, y: nodeToCopy.position.y + 50 }, selected: true, parentNode: undefined, data: { ...nodeToCopy.data } };
          setNodes(nds => nds.concat(newNode)); setSelectedElement(newNode);
      }
      if (e.key === 'Delete' || e.key === 'Backspace') {
        saveToHistory();
        if (selectedPathId) deleteElement(selectedPathId);
        if (selectedElement) deleteElement(selectedElement.id);
        if (selectedNodesForToolbar.length > 0) selectedNodesForToolbar.forEach(n => deleteElement(n.id));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, selectedPathId, saveToHistory, selectedElement, selectedNodesForToolbar]);

  // --- FLOW HANDLERS ---
  const onSelectionChange = useCallback(({ nodes, edges }: OnSelectionChangeParams) => {
    setSelectedNodesForToolbar(nodes as AppNode[]);
    if (nodes.length === 1 && edges.length === 0) { setSelectedElement(nodes[0] as AppNode); setIsEdgeSelected(false); } 
    else if (edges.length === 1 && nodes.length === 0) { setSelectedElement(edges[0] as AppEdge); setIsEdgeSelected(true); } 
    else { setSelectedElement(null); }
  }, []);

  const isValidConnection = useCallback((connection: Connection) => connection.source !== connection.target, []);

const onReconnect = useCallback((oldEdge: any, newConnection: any) => {
    saveToHistory();
    setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
  }, [saveToHistory]);

  const onConnect = useCallback((params: Connection) => {
    saveToHistory();
    const bgColor = theme === 'dark' ? '#0B0F19' : '#f3f4f6';
    const textColor = theme === 'dark' ? '#ffffff' : '#111827';
    setEdges((eds) => addEdge({ 
        ...params, 
        type: 'turbo', 
        animated: isFlowActive,
        labelStyle: { fill: textColor, fontWeight: 700, fontSize: 12 },
        labelBgStyle: { fill: bgColor },
        labelBgPadding: [8, 4],
        data: {
          // Сразу задаем базовые данные при создании
          strokeWidth: 2,
          opacity: 100,
        }
    }, eds));
  }, [setEdges, isFlowActive, saveToHistory, theme]);

  const onConnectStart: OnConnectStart = useCallback((_, { nodeId }) => { connectingNodeId.current = nodeId; }, []);
  
  const onConnectEnd: OnConnectEnd = useCallback(
    (event: any) => {
      // Если нет исходного узла или инстанса - выходим
      if (!connectingNodeId.current || !reactFlowInstance) return;

      const target = event.target as Element;
      
      // 1. ПРОВЕРКА: Попали ли мы в другой блок или точку подключения?
      // Если да — значит пользователь хочет соединить, а не создавать новый блок.
      // Мы просто выходим, чтобы сработал onConnect.
      const targetIsHandle = target.classList.contains('react-flow__handle');
      const targetIsNode = target.closest('.react-flow__node');

      if (targetIsHandle || targetIsNode) {
        connectingNodeId.current = null;
        return; 
      }

      // 2. Если мы здесь — значит мы отпустили линию в пустом месте.
      // Создаем копию исходного узла и соединяем их.
      const sourceNode = nodesRef.current.find((n) => n.id === connectingNodeId.current);
      if (!sourceNode) return;

      const { clientX, clientY } = 'changedTouches' in event ? event.changedTouches[0] : event;
      const position = reactFlowInstance.screenToFlowPosition({ x: clientX, y: clientY });
      
      const newNodeId = `${sourceNode.type}-${Date.now()}`;
      
      const newNode: AppNode = { 
          id: newNodeId, 
          type: sourceNode.type, 
          position, 
          // Создаем копию данных, добавляем метку (копия)
          data: { ...sourceNode.data, label: `${sourceNode.data.label} (копия)` }, 
          style: sourceNode.style, 
          zIndex: 10, 
          selected: true 
      };

      saveToHistory();
      
      // Добавляем узел
      setNodes((nds) => nds.concat(newNode));
      
      // Добавляем связь
      setEdges((eds) => eds.concat({ 
          id: `e-${connectingNodeId.current}-${newNodeId}`, 
          source: connectingNodeId.current!, 
          target: newNodeId, 
          type: 'turbo', 
          animated: true 
      }));

      connectingNodeId.current = null;
    },
    [reactFlowInstance, saveToHistory, setNodes, setEdges]
  );

  const onNodeDragStop = useCallback((event: React.MouseEvent, node: Node) => {
      if (!reactFlowInstance) return;
      const intersections = reactFlowInstance.getIntersectingNodes(node);
      const parentNode = intersections.find((n) => n.type === 'swimlane' || n.type === 'group');

      if (parentNode && node.parentNode !== parentNode.id) {
          saveToHistory();
          setNodes((nds) => nds.map((n) => {
              if (n.id === node.id) {
                  const relativeX = node.position.x - parentNode.position.x;
                  const relativeY = node.position.y - parentNode.position.y;
                  return { ...n, parentNode: parentNode.id, position: { x: relativeX, y: relativeY }, zIndex: 10 };
              }
              return n;
          }));
      }
      else if (!parentNode && node.parentNode) {
          saveToHistory();
          const oldParent = nodesRef.current.find((p) => p.id === node.parentNode);
          setNodes((nds) => nds.map((n) => {
              if (n.id === node.id) {
                  const parentX = oldParent ? oldParent.position.x : 0;
                  const parentY = oldParent ? oldParent.position.y : 0;
                  return { ...n, parentNode: undefined, position: { x: parentX + node.position.x, y: parentY + node.position.y }, extent: undefined, zIndex: 10 };
              }
              return n;
          }));
      }
  }, [reactFlowInstance, saveToHistory, setNodes]);

  const onDrop = useCallback((event: React.DragEvent) => {
      event.preventDefault();
      if (!reactFlowWrapper.current || !reactFlowInstance) return;
      
      saveToHistory();
      const type = event.dataTransfer.getData('application/reactflow/type');
      const shapeType = event.dataTransfer.getData('application/reactflow/shape') as ShapeType;
      
      const position = reactFlowInstance.screenToFlowPosition({ x: event.clientX, y: event.clientY });
      
      let width = 160; 
      let height = 80;
      let nodeType = 'customShape';
      let nodeData: NodeData = { label: 'Этап', type: shapeType, color: undefined, fillColor: COLORS.slate };
      
      if (shapeType === ShapeType.DIAMOND || shapeType === ShapeType.TRIANGLE) { width = 120; height = 120; }
      if (shapeType === ShapeType.CIRCLE) { width = 100; height = 100; }
      if (shapeType === ShapeType.SWIMLANE) { nodeType = 'swimlane'; width = 600; height = 400; nodeData = { label: 'ПРОЦЕСС', type: ShapeType.SWIMLANE, color: COLORS.cyan, fillColor: COLORS.slate }; }
      
      const newNode: AppNode = { 
          id: Date.now().toString(), 
          type: nodeType, 
          position, 
          style: { width, height },
          data: nodeData,
          zIndex: shapeType === ShapeType.SWIMLANE ? -1 : 10
      };

      setNodes((nds) => nds.concat(newNode));

      if (selectedRef.current && !('source' in selectedRef.current) && shapeType !== ShapeType.SWIMLANE) {
          const sourceId = selectedRef.current.id;
          const newEdge: AppEdge = {
              id: `e-${sourceId}-${newNode.id}`,
              source: sourceId,
              target: newNode.id,
              type: 'turbo',
              animated: true
          };
          setEdges((eds) => eds.concat(newEdge));
      }
      
  }, [reactFlowInstance, setNodes, saveToHistory, setEdges]);

  const onDragOver = useCallback((event: React.DragEvent) => { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; }, []);
  const onDragStart = (event: React.DragEvent, nodeType: string, shapeType?: ShapeType) => { event.dataTransfer.setData('application/reactflow/type', nodeType); if (shapeType) event.dataTransfer.setData('application/reactflow/shape', shapeType); };
  const onNodeContextMenu = useCallback((event: React.MouseEvent, node: Node) => { event.preventDefault(); setMenu({ id: node.id, top: event.clientY, left: event.clientX, node: node as AppNode }); }, []);
  
  const onPaneClick = useCallback(() => { 
    setSelectedElement(null); setIsEdgeSelected(false); setMenu(null); setSelectedNodesForToolbar([]); setSelectedPathId(null); 
  }, []);

  const handleSelectPath = (id: string) => { setSelectedPathId(id); setSelectedElement({ id, type: 'drawing' } as any); };

  const handleMouseDown = useCallback((event: React.MouseEvent) => {
    if (!reactFlowInstance || activeTool.includes('eraser')) return;
    if (activeTool.includes('pen')) {
        const position = reactFlowInstance.screenToFlowPosition({ x: event.clientX, y: event.clientY });
        const newPath: DrawingPath = { id: Date.now().toString(), points: [position], color: brushColor, strokeWidth: brushSize };
        setCurrentPath(newPath);
    }
  }, [activeTool, reactFlowInstance, brushSize, brushColor]);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (!reactFlowInstance) return;
    const position = reactFlowInstance.screenToFlowPosition({ x: event.clientX, y: event.clientY });
    if (activeTool === 'eraser-object' && event.buttons === 1) setDrawingPaths(paths => paths.filter(path => !path.points.some(p => Math.abs(p.x - position.x) < (brushSize * 2) && Math.abs(p.y - position.y) < (brushSize * 2))));
    if (activeTool === 'eraser-part' && event.buttons === 1) setDrawingPaths(paths => paths.map(path => {
            const newPoints = path.points.filter(p => !(Math.abs(p.x - position.x) < brushSize && Math.abs(p.y - position.y) < brushSize));
            return newPoints.length < 2 ? null : { ...path, points: newPoints };
        }).filter(Boolean) as DrawingPath[]);
    if (activeTool.includes('pen') && currentPath) {
        let newPoint = position;
        if (activeTool === 'pen-straight' && currentPath.points.length > 0) {
            const startPoint = currentPath.points[0]; const dx = Math.abs(position.x - startPoint.x); const dy = Math.abs(position.y - startPoint.y);
            if (dx > dy) newPoint = { x: position.x, y: startPoint.y }; else newPoint = { x: startPoint.x, y: position.y };
        }
        setCurrentPath(prevPath => ({ ...prevPath!, points: [...prevPath!.points, newPoint] }));
    }
  }, [activeTool, currentPath, reactFlowInstance, brushSize]);

  const handleMouseUp = useCallback(() => {
    if (activeTool.includes('pen') && currentPath) {
        if (currentPath.points.length > 1) { setDrawingPaths(prev => [...prev, currentPath]); }
        setCurrentPath(null);
    }
  }, [activeTool, currentPath]);

  const getCursorStyle = () => { if (activeTool.includes('pen')) return 'crosshair'; if (activeTool.includes('eraser')) return 'cell'; return 'default'; }

  if (isMobile) { return <div className="fixed inset-0 bg-[#0B0F19] text-white flex flex-col items-center justify-center p-6 text-center font-sans z-[9999]"><Monitor size={64} className="text-cyan-400 mb-6 animate-pulse" /><h1 className="text-2xl font-bold mb-2">Откройте на компьютере</h1><p className="text-gray-400 max-w-md">Системный Архитектор — это профессиональный инструмент.</p></div>; }
  if (!isLoaded) return <div className="w-full h-full bg-[#0B0F19]" />; 

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#0B0F19] text-white overflow-hidden font-sans z-[9999]">
      <div className="flex-1 relative h-full w-full" ref={reactFlowWrapper} style={{ cursor: getCursorStyle() }}>
          {!isPresentationMode && (
              <>
                <div className="absolute top-4 left-20 z-50 flex items-center gap-2 bg-[#090c15]/95 border border-slate-700 rounded-xl px-3 py-2 shadow-2xl w-64 backdrop-blur-md">
                    <Search size={16} className="text-cyan-400" />
                    <input type="text" placeholder="Поиск..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent outline-none text-sm text-white w-full placeholder-slate-500" />
                </div>
                <div className="absolute top-4 right-4 z-50 flex gap-2">
                    <button onClick={saveJson} className="p-2 bg-[#090c15]/95 rounded-lg text-cyan-400 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 transition-all shadow-lg" title="Сохранить JSON"><Save size={20}/></button>
                    <label className="p-2 bg-[#090c15]/95 rounded-lg text-cyan-400 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 transition-all shadow-lg cursor-pointer" title="Загрузить JSON"><Upload size={20}/><input type="file" className="hidden" ref={fileInputRef} onChange={loadJson} accept=".json" /></label>
                </div>
              </>
          )}
{!isPresentationMode && (
    <Dashboard 
        nodes={nodes} 
        onNavigateToProblem={(id: string) => reactFlowInstance?.fitView({ nodes: [{id}], duration: 800 })} 
        onFocusNode={(id: string) => reactFlowInstance?.fitView({ nodes: [{id}], duration: 800 })} 
    />
)}          
          <ReactFlow
            nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} onInit={setReactFlowInstance} 
            onDrop={onDrop} onDragOver={onDragOver} onNodeContextMenu={onNodeContextMenu}
            isValidConnection={isValidConnection} onNodeDragStop={onNodeDragStop} onConnectStart={onConnectStart}
            onNodeClick={(_, node) => { if (activeTool === 'cursor') { setSelectedElement(node as AppNode); setIsEdgeSelected(false); setMenu(null); setSelectedPathId(null); } }}
            onEdgeClick={(_, edge) => { if (activeTool === 'cursor') { setSelectedElement(edge as AppEdge); setIsEdgeSelected(true); setMenu(null); setSelectedPathId(null); } }}
            onEdgeDoubleClick={(_, edge) => { if (activeTool === 'cursor') { setSelectedElement(edge as AppEdge); setIsEdgeSelected(true); } }}
            onPaneClick={onPaneClick} nodeTypes={nodeTypes} edgeTypes={edgeTypes} defaultEdgeOptions={defaultEdgeOptions}
            onSelectionChange={onSelectionChange} fitView className={theme === 'dark' ? "bg-[#0B0F19]" : "bg-[#f3f4f6]"}
            minZoom={0.1} maxZoom={4} connectionMode={ConnectionMode.Loose} snapToGrid={!activeTool.includes('pen')} snapGrid={[20, 20]} panOnDrag={activeTool === 'cursor'} selectionOnDrag={activeTool === 'cursor'} selectionKeyCode="Control" multiSelectionKeyCode="Control"
            onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} proOptions={{ hideAttribution: true }} 
            onConnectEnd={onConnectEnd}  // Обновленная функция
            onReconnect={onReconnect}    // Новая функция
            snapToGrid={true}            // Чтобы ровно ставилось
          >
            <svg style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, pointerEvents: 'none' }}>
              <defs>
                <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={theme === 'dark' ? "#22d3ee" : "#0284c7"} />
                  <stop offset="100%" stopColor={theme === 'dark' ? "#a855f7" : "#7c3aed"} />
                </linearGradient>
              </defs>
            </svg>
            
            <Background color={theme === 'dark' ? "#1f2937" : "#94a3b8"} variant={BackgroundVariant.Dots} gap={20} size={1.5} />
            
            {/* 1. КНОПКИ ЗУМА - ПЕРЕНЕС ВЛЕВО ВНИЗ (bottom-left) */}
            {!isPresentationMode && (
                <Panel position="bottom-left" className="flex flex-col gap-2 mb-6 ml-4 z-50">
                    <button onClick={() => reactFlowInstance?.zoomIn()} className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-white hover:bg-slate-700 shadow-xl transition-transform hover:scale-105"><Plus size={20} /></button>
                    <button onClick={() => reactFlowInstance?.zoomOut()} className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-white hover:bg-slate-700 shadow-xl transition-transform hover:scale-105"><Minus size={20} /></button>
                    <button onClick={() => reactFlowInstance?.fitView()} className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-white hover:bg-slate-700 shadow-xl transition-transform hover:scale-105"><Maximize size={20} /></button>
                </Panel>
            )}
            {/* 2. МИНИ-КАРТА - ВПРАВО ВНИЗ (С учетом темы и статусов) */}
            {showMiniMap && !isPresentationMode && (
                <MiniMap 
                    position="bottom-right" 
                    nodeColor={(n) => {
                        if (n.type === 'swimlane') return theme === 'dark' ? '#334155' : '#e2e8f0';
                        if (n.data?.metricStatus === 'error') return '#ef4444';   // Красный при ошибке
                        if (n.data?.metricStatus === 'success') return '#22c55e'; // Зеленый при успехе
                        return theme === 'dark' ? '#22d3ee' : '#0ea5e9';         // Обычный цвет
                    }}
                    style={{ marginBottom: 40, marginRight: 20 }}
                    className="!bg-slate-900/90 !border !border-slate-700 rounded-lg shadow-2xl" 
                    maskColor={theme === 'dark' ? "rgba(11, 15, 25, 0.8)" : "rgba(243, 244, 246, 0.8)"} 
                />
            )}
          </ReactFlow>

          <DrawingCanvas currentPath={currentPath} drawingPaths={drawingPaths} selectedPathId={selectedPathId} onSelectPath={(id) => { if (activeTool === 'cursor') handleSelectPath(id); }} />
          
          {/* 3. ОБНОВЛЕННЫЙ ТУЛБАР (С пропсами для карты) */}
          {!isPresentationMode && (
              <Toolbar 
                onDragStart={onDragStart} 
                onAiAssistant={() => setIsAiAssistantOpen(true)} 
                onToggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')} 
                theme={theme} 
                activeTool={activeTool} 
                onSetTool={setActiveTool} 
                brushSize={brushSize} 
                setBrushSize={setBrushSize} 
                brushColor={brushColor} 
                setBrushColor={setBrushColor} 
                onExport={downloadImage} 
                onTogglePresentation={() => setIsPresentationMode(true)} 
                // ВАЖНО: Добавили управление картой
                showMiniMap={showMiniMap}
                onToggleMiniMap={() => setShowMiniMap(!showMiniMap)}
              />
          )}

          {isPresentationMode && <div className="fixed top-4 right-4 z-[100]"><button onClick={() => setIsPresentationMode(false)} className="p-3 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur border border-white/10 transition-all"><EyeOff size={20} /></button></div>}
          
          <AiAssistant isOpen={isAiAssistantOpen} onClose={() => setIsAiAssistantOpen(false)} onGenerate={handleGenerateFromAI} />
          
          <AnimatePresence>
            {!isPresentationMode && selectedElement && selectedElement.type !== 'drawing' && <motion.div initial={{ x: 400 }} animate={{ x: 0 }} exit={{ x: 400 }}><PropertiesPanel element={selectedElement} isEdge={isEdgeSelected} onUpdate={updateElementData} onClose={() => setSelectedElement(null)} onDelete={deleteElement} /></motion.div>}
            {!isPresentationMode && selectedElement && selectedElement.type === 'drawing' && <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 p-2 bg-slate-900 border border-red-500 rounded-lg shadow-xl"><button onClick={() => deleteElement(selectedElement.id)} className="text-red-500 font-bold px-4 py-2 hover:text-red-400 uppercase tracking-wider text-sm">Удалить линию (Del)</button></motion.div>}
          </AnimatePresence>
          
          <AnimatePresence>
            {!isPresentationMode && selectedNodesForToolbar.length >= 2 && <SelectionToolbar selectedNodes={selectedNodesForToolbar} onDelete={() => selectedNodesForToolbar.forEach(n => deleteElement(n.id))} onAlign={handleAlign} onColorChange={(color: string) => selectedNodesForToolbar.forEach(n => updateElementData(n.id, { data: {color} }))} onGroup={handleGroupNodes} />}
          </AnimatePresence>
          
          {menu && <ContextMenu {...menu} onClose={() => setMenu(null)} onDelete={deleteElement} onDuplicate={duplicateNode} onColorChange={(id, c) => updateElementData(id, { data: { color: c } })} onShapeChange={(id, s) => updateElementData(id, { data: { type: s } })} />}
      </div>
    </div>
  );
};
const BpmnTool = () => (<ReactFlowProvider><BpmnToolContent /></ReactFlowProvider>);
export default BpmnTool;