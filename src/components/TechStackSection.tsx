import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Layers, Zap, Users, Network, BarChart, Settings, Cpu, GitBranch, Share2, LayoutGrid } from 'lucide-react';
import SpotlightCard from './SpotlightCard'; // <--- 1. Импортируем компонент

// --- 1. ДАННЫЕ ДЛЯ ГРАФА (СЕТЬ) ---
interface SkillNode {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  category: 'arch' | 'tech' | 'mgmt';
  icon?: React.ReactNode;
  connections: string[];
}

const nodes: SkillNode[] = [
  { id: 'arch', label: 'Business Arch', description: 'Фундамент системы: связь целей бизнеса с IT-ландшафтом.', x: 50, y: 50, category: 'arch', icon: <Layers size={24} />, connections: ['tech', 'mgmt', 'data', 'auto', 'bpmn', 'strat'] },
  { id: 'mgmt', label: 'Management', description: 'Управление людьми и процессами, построение оргструктуры.', x: 50, y: 20, category: 'mgmt', icon: <Users size={20} />, connections: ['strat', 'team', 'kpi'] },
  { id: 'tech', label: 'Digital Tech', description: 'Стек технологий для автоматизации и разработки.', x: 80, y: 60, category: 'tech', icon: <Zap size={20} />, connections: ['crm', 'code', 'ai'] },
  { id: 'data', label: 'Data & BI', description: 'Принятие решений на основе данных (Data-Driven).', x: 20, y: 60, category: 'tech', icon: <BarChart size={20} />, connections: ['sql', 'pbi', 'roi'] },
  { id: 'strat', label: 'Strategy', description: 'Разработка долгосрочных планов развития.', x: 35, y: 15, category: 'mgmt', connections: [] },
  { id: 'team', label: 'HR & Hiring', description: 'Найм, онбординг и удержание талантов.', x: 65, y: 15, category: 'mgmt', connections: ['mgmt'] },
  { id: 'kpi', label: 'KPI/OKR', description: 'Система метрик эффективности.', x: 50, y: 5, category: 'mgmt', connections: ['mgmt', 'data'] },
  { id: 'crm', label: 'CRM', description: 'Внедрение AmoCRM/Bitrix24.', x: 90, y: 45, category: 'tech', connections: ['tech', 'auto'] },
  { id: 'ai', label: 'AI / GenAI', description: 'LLM, GPT-агенты и нейросети.', x: 90, y: 75, category: 'tech', connections: ['tech', 'code'] },
  { id: 'code', label: 'Python/API', description: 'Скрипты, интеграции, парсинг.', x: 70, y: 80, category: 'tech', connections: ['tech', 'auto'] },
  { id: 'pbi', label: 'Power BI', description: 'Дашборды и визуализация данных.', x: 10, y: 45, category: 'tech', connections: ['data', 'sql'] },
  { id: 'sql', label: 'SQL', description: 'Работа с базами данных напрямую.', x: 10, y: 75, category: 'tech', connections: ['data', 'code'] },
  { id: 'auto', label: 'Automation', description: 'No-Code (Make/Zapier) автоматизация.', x: 50, y: 85, category: 'tech', connections: ['arch', 'crm', 'code'] },
  { id: 'bpmn', label: 'BPMN 2.0', description: 'Моделирование бизнес-процессов.', x: 30, y: 35, category: 'arch', icon: <GitBranch size={16} />, connections: ['arch', 'auto'] },
  { id: 'roi', label: 'Unit Econ', description: 'Расчет юнит-экономики продукта.', x: 25, y: 80, category: 'tech', connections: ['data'] },
];

// --- 2. ДАННЫЕ ДЛЯ СПИСКА (ДОБАВИЛИ ЦВЕТА ПОДСВЕТКИ) ---
const stackGroups = [
  {
    title: "Бизнес-архитектура",
    icon: <GitBranch size={24} className="text-cyan-400" />,
    tags: ["BPMN 2.0", "CJM", "Agile", "Scrum", "Kanban", "Design Thinking", "SWOT", "Gap Analysis"],
    colSpan: "md:col-span-3",
    glowColor: "rgba(6, 182, 212, 0.15)" // Cyan glow
  },
  {
    title: "Менеджмент",
    icon: <Users size={24} className="text-blue-400" />,
    tags: ["Управление P&L", "Найм и адаптация", "OKR & KPI", "Стратег. планирование"],
    colSpan: "md:col-span-3",
    glowColor: "rgba(59, 130, 246, 0.15)" // Blue glow
  },
  {
    title: "No-Code Automation",
    icon: <Settings size={24} className="text-cyan-400" />,
    tags: ["AmoCRM", "Bitrix24", "Zapier", "Make (Integromat)", "Notion", "Trello"],
    colSpan: "md:col-span-2",
    glowColor: "rgba(6, 182, 212, 0.15)"
  },
  {
    title: "Data Analytics",
    icon: <BarChart size={24} className="text-blue-400" />,
    tags: ["Power BI", "Tableau", "Roistat", "Google Analytics", "SQL (Basics)", "Excel Pro"],
    colSpan: "md:col-span-2",
    glowColor: "rgba(59, 130, 246, 0.15)"
  },
  {
    title: "AI & GenAI",
    icon: <Cpu size={24} className="text-cyan-400" />,
    tags: ["OpenAI API", "Midjourney", "Python Scripts", "Prompt Engineering", "Claude", "LLM Integration"],
    colSpan: "md:col-span-2",
    glowColor: "rgba(168, 85, 247, 0.15)" // Purple glow
  }
];

const TechStackSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'graph' | 'list'>('graph');

  // --- ЛОГИКА ГРАФА ---
  const isConnected = (id1: string, id2: string) => {
    const n1 = nodes.find(n => n.id === id1);
    const n2 = nodes.find(n => n.id === id2);
    if (!n1 || !n2) return false;
    return n1.connections.includes(id2) || n2.connections.includes(id1);
  };

  const getCategoryStyles = (category: string, isActive: boolean) => {
    if (isActive) return 'bg-white text-black border-white scale-110 z-50 shadow-[0_0_20px_rgba(255,255,255,0.5)]';
    switch (category) {
        case 'arch': return 'bg-[#083344] text-cyan-400 border-cyan-500/50';
        case 'tech': return 'bg-[#2e1065] text-purple-400 border-purple-500/50';
        case 'mgmt': return 'bg-[#172554] text-blue-400 border-blue-500/50';
        default: return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  const activeNodeData = nodes.find(n => n.id === activeNode);

  return (
    <section id="stack" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12 relative">
            <SectionHeader 
                title="Карта компетенций" 
                subtitle="Интерактивная сеть: как процессы, люди и технологии работают в единой системе" 
                center={true}
                className="mb-8"
            />
            
            {/* ПЕРЕКЛЮЧАТЕЛЬ */}
            <div className="flex bg-gray-900 p-1 rounded-lg border border-gray-800 shrink-0 z-20">
                <button
                    onClick={() => setViewMode('graph')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${viewMode === 'graph' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                >
                    <Share2 size={16} />
                    Граф
                </button>
                <button
                    onClick={() => setViewMode('list')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${viewMode === 'list' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                >
                    <LayoutGrid size={16} />
                    Список
                </button>
            </div>
        </div>
        
        <div className="relative w-full">
            
            {/* --- РЕЖИМ ГРАФА --- */}
            {viewMode === 'graph' && (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="relative w-full min-h-[600px] bg-[#111827] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden group/graph"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />

                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        {nodes.map((node) => 
                            node.connections.map((targetId) => {
                                const target = nodes.find(n => n.id === targetId);
                                if (!target) return null;
                                const isActive = activeNode && (activeNode === node.id || activeNode === target.id || (isConnected(activeNode, node.id) && isConnected(activeNode, target.id)));

                                return (
                                    <line
                                        key={`${node.id}-${target.id}`}
                                        x1={`${node.x}%`} y1={`${node.y}%`}
                                        x2={`${target.x}%`} y2={`${target.y}%`}
                                        stroke={isActive ? "url(#gradientLine)" : "rgba(255, 255, 255, 0.15)"}
                                        strokeWidth={isActive ? 2 : 1}
                                        className="transition-all duration-300"
                                    />
                                );
                            })
                        )}
                        <defs>
                            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {nodes.map((node) => {
                        const isActive = activeNode === node.id;
                        const isNeighbor = activeNode && isConnected(activeNode, node.id);
                        const styles = getCategoryStyles(node.category, isActive);

                        return (
                            <motion.div
                                key={node.id}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                                onMouseEnter={() => setActiveNode(node.id)}
                                onMouseLeave={() => setActiveNode(null)}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", delay: Math.random() * 0.3 }}
                            >
                                {node.icon && (
                                    <div className={`absolute inset-0 rounded-full animate-ping opacity-30 ${isActive ? 'bg-white' : 'bg-cyan-500'}`} />
                                )}
                                <motion.div
                                    animate={{ 
                                        scale: isActive ? 1.15 : isNeighbor ? 1.1 : 1,
                                        opacity: (activeNode && !isActive && !isNeighbor) ? 0.3 : 1,
                                        filter: (activeNode && !isActive && !isNeighbor) ? 'blur(2px)' : 'blur(0px)',
                                    }}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-md transition-all duration-300 ${styles}`}
                                >
                                    {node.icon && <div>{node.icon}</div>}
                                    <span className={`text-xs md:text-sm whitespace-nowrap ${node.icon ? 'font-bold' : 'font-medium'}`}>
                                        {node.label}
                                    </span>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                    
                    <AnimatePresence>
                        {activeNodeData && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="absolute bottom-8 right-8 max-w-xs bg-[#0f172a]/90 backdrop-blur-md border border-gray-700 p-4 rounded-xl shadow-2xl z-50 hidden md:block"
                            >
                                <div className="flex items-center gap-2 mb-2 text-cyan-400">
                                    {activeNodeData.icon || <Network size={16} />}
                                    <h4 className="font-bold text-white">{activeNodeData.label}</h4>
                                </div>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {activeNodeData.description}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}

            {/* --- РЕЖИМ СПИСКА (С ПОДСВЕТКОЙ!) --- */}
            {viewMode === 'list' && (
                <motion.div
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="w-full"
                >
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {stackGroups.map((group, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={group.colSpan} // Размеры (половина/треть) здесь
                            >
                                {/* Оборачиваем в SpotlightCard и передаем цвет */}
                                <SpotlightCard 
                                    className="h-full p-8 rounded-3xl border border-gray-800 bg-[#111827]" 
                                    color={group.glowColor}
                                >
                                    <div className="flex items-center gap-4 mb-6 relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-[#1e293b] flex items-center justify-center border border-gray-700">
                                            {group.icon}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">{group.title}</h3>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-3 relative z-10">
                                        {group.tags.map((tag, i) => (
                                            <span 
                                                key={i}
                                                className="px-3 py-1.5 bg-[#0B0F19] border border-gray-700 rounded-md text-gray-300 font-mono text-sm hover:text-cyan-400 hover:border-cyan-500/50 transition-colors cursor-default"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;