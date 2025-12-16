import React from 'react';
import { motion } from 'framer-motion';
import { AlignHorizontalJustifyStart, AlignVerticalJustifyStart, Trash2, Palette, Group } from 'lucide-react';
import type { AppNode } from '../types';
import { PRESET_COLORS, COLORS } from '../constants';

interface SelectionToolbarProps {
  selectedNodes: AppNode[];
  onAlign: (direction: 'horizontal' | 'vertical') => void;
  onColorChange: (color: string, property: 'fillColor' | 'color') => void;
  onDelete: () => void;
  onGroup: () => void; // <--- НОВЫЙ ПРОПС
}

export const SelectionToolbar: React.FC<SelectionToolbarProps> = ({ selectedNodes, onAlign, onColorChange, onDelete, onGroup }) => {
  if (selectedNodes.length < 2) return null;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-[#090c15]/95 backdrop-blur-md p-1.5 rounded-xl border border-slate-700 shadow-2xl font-sans"
    >
      <div className="text-xs font-bold text-slate-400 px-3 border-r border-slate-700">
        {selectedNodes.length} выбрано
      </div>
      
      {/* КНОПКА ГРУППИРОВКИ */}
      <button 
        onClick={onGroup} 
        className="p-2 text-cyan-400 hover:bg-cyan-500/10 rounded-md flex items-center gap-1" 
        title="Сгруппировать (G)"
      >
        <Group size={18} />
      </button>

      <div className="w-[1px] h-6 bg-slate-700 mx-1"></div>

      {/* Выравнивание */}
      <button onClick={() => onAlign('horizontal')} className="p-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-md" title="Выровнять по горизонтали">
        <AlignHorizontalJustifyStart size={18} />
      </button>
      <button onClick={() => onAlign('vertical')} className="p-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-md" title="Выровнять по вертикали">
        <AlignVerticalJustifyStart size={18} />
      </button>
      
      <div className="w-[1px] h-6 bg-slate-700 mx-1"></div>

      {/* Цвета */}
      <div className="group relative">
        <button className="p-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-md" title="Изменить цвет">
            <Palette size={18} />
        </button>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 p-2 bg-[#090c15] border border-slate-700 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
            <div className="grid grid-cols-6 gap-2 w-40">
                {PRESET_COLORS.map(color => (
                    <button
                        key={color}
                        onClick={() => onColorChange(color, 'fillColor')}
                        className="w-5 h-5 rounded-full border border-slate-600 hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
        </div>
      </div>
      
      <div className="w-[1px] h-6 bg-slate-700 mx-1"></div>

      {/* Удалить */}
      <button onClick={onDelete} className="p-2 text-red-500 hover:bg-red-500/10 rounded-md" title="Удалить">
        <Trash2 size={18} />
      </button>
    </motion.div>
  );
};