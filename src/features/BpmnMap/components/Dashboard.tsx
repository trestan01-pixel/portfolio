import React, { useMemo, useState } from 'react';
import { 
    Clock, Activity, AlertTriangle, 
    RussianRuble, // <--- ИЗМЕНИЛИ ИМПОРТ
    TrendingUp, ChevronUp, Maximize2 
} from 'lucide-react';
import { AppNode, MetricStatus, ShapeType } from '../types';

interface DashboardProps {
  nodes: AppNode[];
  onNavigateToProblem: (nodeId: string) => void;
  onFocusNode?: (nodeId: string) => void;
}

interface ProblemNode { id: string; label: string; }

// --- ХЕЛПЕРЫ ---
const parseToMinutes = (str: string): number => {
  if (!str) return 0;
  const rawNum = str.replace(',', '.').replace(/[^\d.]/g, '');
  const num = parseFloat(rawNum);
  if (isNaN(num)) return 0;

  const lowerStr = str.toLowerCase();
  if (lowerStr.includes('ч') || lowerStr.includes('h')) return num * 60;
  if (lowerStr.includes('д') || lowerStr.includes('d')) return num * 60 * 8;
  return num;
};

const parseCost = (str: string): number => {
    if (!str) return 0;
    const cleanCost = str.replace(/[^\d.]/g, '');
    const val = parseFloat(cleanCost);
    return isNaN(val) ? 0 : val;
}

const formatDisplayTime = (totalMinutes: number): string => {
  if (totalMinutes === 0) return '0 мин';
  if (totalMinutes < 60) return `${Math.round(totalMinutes)} мин`;
  const h = Math.floor(totalMinutes / 60);
  const m = Math.round(totalMinutes % 60);
  return m > 0 ? `${h}ч ${m}м` : `${h}ч`;
};

export const Dashboard: React.FC<DashboardProps> = ({ nodes, onNavigateToProblem, onFocusNode }) => {
  const [showProblems, setShowProblems] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const stats = useMemo(() => {
    let totalMinutes = 0;
    let totalCost = 0;
    
    let maxTimeVal = 0;
    let maxTimeNodeId: string | null = null;
    let maxCostVal = 0;
    let maxCostNodeId: string | null = null;

    const problemNodes: ProblemNode[] = [];
    const solutionNodes: ProblemNode[] = [];
    const processedNodes = new Set<string>(); 

    const activeNodes = nodes.filter(n => n.type !== ShapeType.SWIMLANE && n.type !== 'group');

    activeNodes.forEach(node => {
      if (processedNodes.has(node.id)) return;
      processedNodes.add(node.id);

      // Время
      if (node.data.metric) {
        const minutes = parseToMinutes(node.data.metric);
        totalMinutes += minutes;
        if (minutes > maxTimeVal) {
            maxTimeVal = minutes;
            maxTimeNodeId = node.id;
        }
      }

      // Деньги
      if (node.data.cost) {
        const cost = parseCost(node.data.cost);
        totalCost += cost;
        if (cost > maxCostVal) {
            maxCostVal = cost;
            maxCostNodeId = node.id;
        }
      }

      const hasProblemStatus = node.data.metricStatus === MetricStatus.ERROR;
      const hasSolutionStatus = node.data.metricStatus === MetricStatus.SUCCESS;

      if (hasProblemStatus) problemNodes.push({ id: node.id, label: node.data.label });
      if (hasSolutionStatus) solutionNodes.push({ id: node.id, label: node.data.label });
    });

    const totalIssues = problemNodes.length + solutionNodes.length;
    const efficiency = totalIssues === 0 ? 100 : Math.round((solutionNodes.length / totalIssues) * 100);

    return { 
      totalMinutes, totalCost, 
      problems: problemNodes, solutions: solutionNodes, 
      totalCount: activeNodes.length, efficiency,
      maxTimeNodeId, maxCostNodeId
    };
  }, [nodes]);

  const hasProblems = stats.problems.length > 0;
  
  const borderColor = hasProblems 
    ? 'border-red-500/50 shadow-glow-red' 
    : stats.efficiency < 50 ? 'border-orange-500/50' : 'border-cyan-500/50 shadow-glow-cyan';
  
  const bgClass = hasProblems ? 'bg-red-900/95' : 'bg-[#090c15]/95';

  // --- МИНИ-РЕЖИМ (Свернутый) ---
  if (isCollapsed) {
      return (
        <div 
            onClick={() => setIsCollapsed(false)}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-xl cursor-pointer hover:scale-105 transition-all ${borderColor} ${bgClass}`}
            title="Развернуть статистику"
        >
            {/* Иконка активности */}
            <Activity size={16} className="text-slate-300" />
            
            {/* Если есть проблемы - показываем */}
            {hasProblems && (
                <div className="flex items-center gap-1 text-red-400 font-bold text-xs border-r border-white/10 pr-2">
                    <AlertTriangle size={12} /> {stats.problems.length}
                </div>
            )}

            {/* ВРЕМЯ (ДОБАВИЛ СЮДА) */}
            <div className="flex items-center gap-1 text-xs font-bold text-slate-200">
                <Clock size={12} className="text-cyan-400" />
                {formatDisplayTime(stats.totalMinutes)}
            </div>

            <Maximize2 size={14} className="text-slate-500 ml-1" />
        </div>
      );
  }

  // --- ПОЛНЫЙ РЕЖИМ ---
  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 px-5 py-2 rounded-2xl border backdrop-blur-xl transition-all duration-500 ${borderColor} ${bgClass} shadow-2xl text-slate-200`}>
      
      {/* 1. СЧЕТЧИК */}
      <div className="flex items-center gap-2" title="Всего активных блоков">
        <Activity size={16} className="text-slate-400" />
        <span className="font-bold text-sm">{stats.totalCount}</span>
      </div>
      
      <div className="w-[1px] h-4 bg-slate-700"></div>
      
      {/* 2. ПРОБЛЕМЫ */}
      <div className="relative cursor-pointer group" onClick={() => { if(hasProblems) setShowProblems(!showProblems); }}>
        <div className="flex items-center gap-2">
          <AlertTriangle size={16} className={hasProblems ? 'text-red-400 animate-pulse' : 'text-slate-600'} />
          <span className={`font-bold text-sm ${hasProblems ? 'text-red-400' : 'text-slate-500'}`}>{stats.problems.length}</span>
        </div>
        {showProblems && hasProblems && (
          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 bg-[#090c15] border border-red-500/50 rounded-lg shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95">
            <h4 className="text-xs font-bold text-red-400 border-b border-white/10 pb-2 mb-2 px-1">Нужно исправить ({stats.problems.length})</h4>
            <ul className="space-y-1 max-h-40 overflow-y-auto custom-scrollbar">
              {stats.problems.map(p => (
                <li key={p.id} onClick={(e) => { e.stopPropagation(); onNavigateToProblem(p.id); setShowProblems(false); }} className="text-slate-300 hover:bg-red-500/20 hover:text-white p-1.5 rounded cursor-pointer truncate text-xs transition-colors">
                  • {p.label || 'Без названия'}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="w-[1px] h-4 bg-slate-700"></div>

      {/* 3. ВРЕМЯ (Кликабельно -> переход к самому долгому) */}
      <button 
        onClick={() => stats.maxTimeNodeId && onFocusNode && onFocusNode(stats.maxTimeNodeId)}
        disabled={!stats.maxTimeNodeId}
        className="flex items-center gap-2 group hover:bg-white/5 px-2 py-1 rounded transition-colors disabled:opacity-50 disabled:cursor-default" 
        title={stats.maxTimeNodeId ? "Нажмите, чтобы найти самый долгий этап" : "Нет данных о времени"}
      >
        <Clock size={16} className={stats.totalMinutes > 0 ? "text-cyan-400 group-hover:scale-110 transition-transform" : "text-slate-600"} />
        <span className="font-bold text-sm">{formatDisplayTime(stats.totalMinutes)}</span>
      </button>

      <div className="w-[1px] h-4 bg-slate-700"></div>

      {/* 4. СТОИМОСТЬ (ИКОНКА РУБЛЯ) */}
      <button 
        onClick={() => stats.maxCostNodeId && onFocusNode && onFocusNode(stats.maxCostNodeId)}
        disabled={!stats.maxCostNodeId}
        className="flex items-center gap-2 group hover:bg-white/5 px-2 py-1 rounded transition-colors disabled:opacity-50 disabled:cursor-default" 
        title={stats.maxCostNodeId ? "Нажмите, чтобы найти самый дорогой этап" : "Нет данных о стоимости"}
      >
        {/* ИСПОЛЬЗУЕМ RussianRuble */}
        <RussianRuble size={16} className={stats.totalCost > 0 ? "text-green-400 group-hover:scale-110 transition-transform" : "text-slate-600"} />
        <span className="font-bold text-sm">{stats.totalCost.toLocaleString('ru-RU')}</span>
      </button>

      {/* 5. KPI */}
      {(stats.totalCost > 0 || stats.totalMinutes > 0) && (
        <>
            <div className="w-[1px] h-4 bg-slate-700"></div>
            <div className="flex items-center gap-1" title="Индекс эффективности">
                <TrendingUp size={16} className={stats.efficiency > 80 ? 'text-green-500' : 'text-yellow-500'} />
                <span className={`text-[10px] font-bold ${stats.efficiency > 80 ? 'text-green-500' : 'text-yellow-500'}`}>{stats.efficiency}%</span>
            </div>
        </>
      )}

      {/* КНОПКА СВЕРНУТЬ */}
      <button 
        onClick={() => setIsCollapsed(true)} 
        className="ml-2 p-1 hover:bg-white/10 rounded-full text-slate-500 hover:text-white transition-colors"
        title="Свернуть панель"
      >
        <ChevronUp size={14} />
      </button>

    </div>
  );
};