import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FileCode, ChevronRight, ChevronDown, FileJson, Image, Music, FileText } from 'lucide-react';

type FileNode = {
  name: string;
  type: 'folder' | 'file';
  icon?: React.ElementType;
  desc?: string;
  children?: FileNode[];
};

const PROJECT_STRUCTURE: FileNode[] = [
  {
    name: 'public',
    type: 'folder',
    desc: 'Статика (ассеты, резюме)',
    children: [
        { name: 'resume-ruslan.pdf', type: 'file', icon: FileText },
        { name: 'intro.mp3', type: 'file', icon: Music },
        { name: 'logo-ry.png', type: 'file', icon: Image }
    ]
  },
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'assets',
        type: 'folder',
        children: [
            { name: 'logo-ry.png', type: 'file', icon: Image },
            { name: 'ruslan.png', type: 'file', icon: Image }
        ]
      },
      {
        name: 'components',
        type: 'folder',
        desc: 'UI Блоки (30+ компонентов)',
        children: [
            { name: 'HeroSection.tsx', type: 'file', desc: 'Главный экран' },
            { name: 'AboutSection.tsx', type: 'file' },
            { name: 'ChaosCalculator.tsx', type: 'file', desc: 'Калькулятор потерь' },
            { name: 'Header.tsx', type: 'file' },
            { name: '...' , type: 'file', desc: 'Еще 26 компонентов...' }
        ]
      },
      {
        name: 'features',
        type: 'folder',
        desc: 'Модули (Бизнес-логика)',
        children: [
          {
            name: 'BpmnMap',
            type: 'folder',
            desc: 'Визуализатор процессов',
            children: [
                { name: 'BpmnTool.tsx', type: 'file', desc: 'Core Logic' },
                { name: 'DrawingCanvas.tsx', type: 'file' }
            ]
          },
          {
            name: 'ProjectBlueprint',
            type: 'folder',
            desc: 'Дизайн-система (Ты здесь)',
            children: [
                { name: 'data/blueprintData.ts', type: 'file', desc: 'Контент (JSON)' },
                { name: 'components/LiveComponents.tsx', type: 'file' },
                { name: 'ProjectBlueprint.tsx', type: 'file', desc: 'Page Layout' }
            ]
          }
        ]
      },
      {
        name: 'pages',
        type: 'folder',
        desc: 'Маршрутизация',
        children: [
            { name: 'Home.tsx', type: 'file' },
            { name: 'AuditPage.tsx', type: 'file' },
            { name: 'SystemPage.tsx', type: 'file' }
        ]
      },
      { name: 'App.tsx', type: 'file', desc: 'Root Component' },
      { name: 'main.tsx', type: 'file', desc: 'Entry Point' }
    ]
  },
  { name: 'package.json', type: 'file', icon: FileJson, desc: 'Deps & Scripts' },
  { name: 'vite.config.ts', type: 'file', icon: FileCode, desc: 'Build Config' }
];

const FileItem = ({ node, depth = 0 }: { node: FileNode; depth?: number }) => {
  const [isOpen, setIsOpen] = useState(node.name === 'src' || node.name === 'features');
  const Icon = node.icon || (node.type === 'folder' ? Folder : FileCode);
  
  return (
    <div className="select-none">
      <div 
        onClick={() => node.type === 'folder' && setIsOpen(!isOpen)}
        className={`flex items-center gap-2 py-1 px-2 rounded cursor-pointer hover:bg-[#1f2937] transition-colors ${depth > 0 ? 'border-l border-gray-800 ml-3' : ''}`}
      >
        {node.type === 'folder' && (
            <span className="text-gray-500">
                {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </span>
        )}
        {node.type === 'file' && <span className="w-3.5"></span>}
        
        <Icon size={14} className={node.type === 'folder' ? 'text-[#22d3ee]' : 'text-gray-400'} />
        
        <span className={`text-sm font-mono ${node.type === 'folder' ? 'text-white font-bold' : 'text-gray-300'}`}>
            {node.name}
        </span>
        
        {node.desc && <span className="text-[10px] text-gray-600 ml-auto font-mono">// {node.desc}</span>}
      </div>

      <AnimatePresence>
        {isOpen && node.children && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-2"
          >
            {node.children.map((child, i) => (
              <FileItem key={i} node={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ProjectMap = () => {
  return (
    <div className="p-6 bg-[#0B0F19] border border-gray-800 rounded-xl overflow-hidden font-mono text-sm relative group">
       <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-[10px] text-gray-600 bg-[#111827] px-2 py-1 rounded border border-gray-800">READ ONLY</div>
       </div>
       {PROJECT_STRUCTURE.map((node, i) => (
         <FileItem key={i} node={node} />
       ))}
    </div>
  );
};