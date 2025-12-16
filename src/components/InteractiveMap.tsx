// src/components/InteractiveMap.tsx

import React, { useState, useCallback, useMemo, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  Handle,
  Position,
  NodeProps,
  FitViewOptions,
  Controls,
  Background,
  BackgroundVariant,
  PanOnScrollMode,
  ReactFlowInstance,
} from 'reactflow';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Users, TrendingUp, Settings, PieChart, Megaphone, CheckCircle, LifeBuoy, ArrowRight } from 'lucide-react';

import 'reactflow/dist/style.css';

// --- ДАННЫЕ И КОМПОНЕНТЫ ---

// ИЗМЕНЕНИЕ: Больше иконок для новых блоков
const icons = {
  marketing: <Megaphone size={24} />,
  leads: <Users size={24} />,
  sales: <TrendingUp size={24} />,
  onboarding: <CheckCircle size={24} />,
  production: <Settings size={24} />,
  support: <LifeBuoy size={24} />,
  finance: <PieChart size={24} />,
};

// ИЗМЕНЕНИЕ: Кастомный узел с новым дизайном (фиолетовый/голубой)
interface CustomNodeData {
  label: string;
  icon: React.ReactNode;
  isProblem?: boolean;
}

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({ data }) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-4 p-4 rounded-lg border-2 bg-[#090c15] shadow-lg w-56 h-20 transition-all duration-700',
        {
          'border-purple-500 shadow-purple-500/30': data.isProblem,
          'border-cyan-400 shadow-cyan-400/50': !data.isProblem,
        }
      )}
    >
      <div className={clsx('transition-colors duration-700', {
        'text-purple-400': data.isProblem,
        'text-cyan-400': !data.isProblem,
      })}>
        {data.icon}
      </div>
      <div className={clsx('text-white font-bold text-lg uppercase tracking-wider', { 'opacity-70': data.isProblem })}>
        {data.label}
      </div>
      <Handle type="target" position={Position.Left} className="!bg-slate-700 !border-none" />
      <Handle type="source" position={Position.Right} className="!bg-slate-700 !border-none" />
      <Handle type="target" position={Position.Top} className="!bg-slate-700 !border-none" />
      <Handle type="source" position={Position.Bottom} className="!bg-slate-700 !border-none" />
    </div>
  );
};

// Кнопка (без изменений в стилях)
const SystemizeButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
    <motion.button {...props} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        className="group relative inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 text-base font-bold tracking-widest uppercase border border-slate-700 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:border-cyan-400 transition-all duration-300 rounded-sm">
        <span className="relative z-10">Систематизировать</span>
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-cyan-400" />
    </motion.button>
);
const DownloadPdfButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
    <motion.button {...props} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-slate-900/50 font-bold transition-all">
        Скачать PDF-отчет
    </motion.button>
);

// ИЗМЕНЕНИЕ: Данные для 7 блоков с большим расстоянием
const initialNodes: Node<CustomNodeData>[] = [
  { id: '1', type: 'custom', position: { x: 50, y: 400 }, data: { label: 'Маркетинг', icon: icons.marketing, isProblem: true } },
  { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'Лиды', icon: icons.leads, isProblem: true } },
  { id: '3', type: 'custom', position: { x: 600, y: 80 }, data: { label: 'Продажи', icon: icons.sales, isProblem: true } },
  { id: '4', type: 'custom', position: { x: 800, y: 350 }, data: { label: 'Онбординг', icon: icons.onboarding } },
  { id: '5', type: 'custom', position: { x: 550, y: 500 }, data: { label: 'Производство', icon: icons.production, isProblem: true } },
  { id: '6', type: 'custom', position: { x: 200, y: 600 }, data: { label: 'Поддержка', icon: icons.support } },
  { id: '7', type: 'custom', position: { x: 300, y: -50 }, data: { label: 'Финансы', icon: icons.finance, isProblem: true } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', type: 'default', style: { stroke: '#a855f7', strokeWidth: 2 } },
  { id: 'e2-3', source: '2', target: '3', type: 'default', style: { stroke: '#ef4444', strokeWidth: 3, strokeDasharray: '5 5' }, animated: true },
  { id: 'e3-5', source: '3', target: '5', type: 'default', style: { stroke: '#a855f7', strokeWidth: 2 } },
  { id: 'e5-6', source: '5', target: '6', type: 'default', style: { stroke: '#475569', strokeWidth: 1 } },
  { id: 'e4-5', source: '4', target: '5', type: 'default', style: { stroke: '#475569', strokeWidth: 1 } },
  { id: 'e7-3', source: '7', target: '3', type: 'default', style: { stroke: '#ef4444', strokeWidth: 3 }, animated: true },
  { id: 'e2-6', source: '2', target: '6', type: 'default', style: { stroke: '#a855f7', strokeWidth: 2 } },
];

const systematizedNodes: Node<CustomNodeData>[] = [
  { id: '1', type: 'custom', position: { x: 100, y: 0 }, data: { label: 'Маркетинг', icon: icons.marketing, isProblem: false } },
  { id: '2', type: 'custom', position: { x: 400, y: 0 }, data: { label: 'Лиды', icon: icons.leads, isProblem: false } },
  { id: '3', type: 'custom', position: { x: 700, y: 0 }, data: { label: 'Продажи', icon: icons.sales, isProblem: false } },
  { id: '4', type: 'custom', position: { x: 700, y: 220 }, data: { label: 'Онбординг', icon: icons.onboarding, isProblem: false } },
  { id: '5', type: 'custom', position: { x: 400, y: 220 }, data: { label: 'Производство', icon: icons.production, isProblem: false } },
  { id: '6', type: 'custom', position: { x: 100, y: 220 }, data: { label: 'Поддержка', icon: icons.support, isProblem: false } },
  { id: '7', type: 'custom', position: { x: 400, y: 440 }, data: { label: 'Финансы', icon: icons.finance, isProblem: false } },
];

const systematizedEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#22d3ee', strokeWidth: 2 } },
  { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', style: { stroke: '#22d3ee', strokeWidth: 2 } },
  { id: 'e3-4', source: '3', target: '4', type: 'smoothstep', style: { stroke: '#22d3ee', strokeWidth: 2 } },
  { id: 'e4-5', source: '4', target: '5', type: 'smoothstep', style: { stroke: '#22d3ee', strokeWidth: 2 } },
  { id: 'e5-6', source: '5', target: '6', type: 'smoothstep', style: { stroke: '#22d3ee', strokeWidth: 2 } },
  { id: 'e5-7', source: '5', target: '7', type: 'smoothstep', style: { stroke: '#22d3ee', strokeWidth: 2 }, animated: true },
  { id: 'e3-7', source: '3', target: '7', type: 'smoothstep', style: { stroke: '#22d3ee', strokeWidth: 2 }, animated: true },
];

const fitViewOptions: FitViewOptions = { padding: 0.2 };

// --- ОСНОВНОЙ КОМПОНЕНТ ---
const InteractiveMapContent = () => {
  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);
  const [isSystematized, setIsSystematized] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

 
  const handleSystematize = () => { /* ... без изменений */ };
  const handleDownloadPdf = () => { /* ... без изменений */ };
  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  // ... (остальной код handleSystematize, handleDownloadPdf, variants без изменений)
  
  return (
    <div ref={reactFlowWrapper} className="w-full h-[900px] relative flex flex-col items-center text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 text-center">
            {/* ... заголовок без изменений */}
        </div>

        <ReactFlow
            nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}
            nodeTypes={nodeTypes} fitView fitViewOptions={fitViewOptions}
            className="bg-transparent"
            panOnScroll
            panOnScrollMode={PanOnScrollMode.Vertical}
        >
            <Controls showInteractive={false} className="[&>button]:bg-slate-800 [&>button]:border [&>button]:border-slate-700 [&>button:hover]:bg-slate-700" />
        </ReactFlow>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
            {/* ... кнопки и метрики без изменений */}
        </div>
    </div>
  );
};

const InteractiveMap: React.FC = () => (<ReactFlowProvider><InteractiveMapContent /></ReactFlowProvider>);
export default InteractiveMap;