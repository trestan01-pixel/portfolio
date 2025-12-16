import React, { useState } from 'react';
import { 
    Circle, Square, Triangle, Hexagon, Layout, 
    MousePointer2, PenTool, Eraser, Download, 
    Sun, Moon, BrainCircuit, Ruler, Scissors, Box, 
    Eye, EyeOff, Map, // Иконка Zap удалена
    Database, Cloud, FileText, Activity, Plus, RussianRuble 
} from 'lucide-react';
import { ShapeType } from '../types';
import { PRESET_COLORS } from '../constants';

// Компонент кнопки
const ToolButton = ({ icon: Icon, onClick, label, active = false, hasSubmenu = false }: any) => (
  <button onClick={onClick} title={label} className={`relative p-2 rounded-lg transition-all mb-1 flex items-center justify-center w-10 h-10 ${active ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'text-slate-400 hover:bg-slate-800 hover:text-white border border-transparent'}`}>
    <Icon size={20} />
    {hasSubmenu && <div className="absolute right-0 bottom-0 w-2 h-2 bg-slate-500 rounded-full border-2 border-[#090c15]" />}
  </button>
);

export const Toolbar = ({ 
  onDragStart, onAiAssistant, onToggleTheme, theme, activeTool, onSetTool, 
  brushSize, setBrushSize, brushColor, setBrushColor, onExport, 
  onTogglePresentation, isPresentationMode, 
  showMiniMap, onToggleMiniMap 
}: any) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const toggleMenu = (menu: string) => setOpenMenu(openMenu === menu ? null : menu);

  const DraggableItem = ({ type, shape, icon: Icon, label }: any) => (
    <div draggable onDragStart={(e) => onDragStart(e, type, shape)} className="flex flex-col items-center justify-center p-2 rounded hover:bg-slate-800 cursor-grab active:cursor-grabbing border border-transparent hover:border-slate-600 transition-all" title={label}>
        <Icon size={24} className="text-slate-300 mb-1" />
        <span className="text-[10px] text-slate-400 uppercase font-bold">{label}</span>
    </div>
  );

  if (isPresentationMode) {
      return (
          <div className="fixed top-4 right-4 z-50">
              <button onClick={onTogglePresentation} className="p-3 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur border border-white/10 transition-all" title="Выйти из презентации"><EyeOff size={20} /></button>
          </div>
      );
  }

  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 p-2 bg-[#090c15]/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl">
      <ToolButton icon={BrainCircuit} onClick={onAiAssistant} label="AI Ассистент" />
      <div className="w-8 h-px bg-slate-800 my-1" />
      
      <ToolButton icon={MousePointer2} active={activeTool === 'cursor'} onClick={() => { onSetTool('cursor'); setOpenMenu(null); }} label="Курсор" />
      
      {/* РИСОВАНИЕ */}
      <div className="relative">
        <ToolButton icon={activeTool === 'pen-straight' ? Ruler : PenTool} active={activeTool.includes('pen')} onClick={() => toggleMenu('pen')} hasSubmenu label="Рисование" />
        {openMenu === 'pen' && (
            <div className="absolute left-full top-0 ml-3 bg-[#090c15] p-3 rounded-xl border border-slate-700 shadow-2xl flex flex-col gap-3 w-48 animate-in fade-in slide-in-from-left-2 z-50">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Режим</div>
                <div className="flex gap-2">
                    <button onClick={() => onSetTool('pen')} className={`flex-1 p-2 rounded border ${activeTool === 'pen' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400 hover:bg-slate-800'}`}><PenTool size={16} className="mx-auto"/></button>
                    <button onClick={() => onSetTool('pen-straight')} className={`flex-1 p-2 rounded border ${activeTool === 'pen-straight' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400 hover:bg-slate-800'}`}><Ruler size={16} className="mx-auto"/></button>
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Размер: {brushSize}px</div>
                <input type="range" min="2" max="20" value={brushSize} onChange={(e) => setBrushSize(parseInt(e.target.value))} className="w-full accent-cyan-400 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Цвет</div>
                <div className="grid grid-cols-6 gap-1">
                    {PRESET_COLORS.slice(0, 12).map(c => (
                        <button key={c} onClick={() => setBrushColor(c)} className={`w-5 h-5 rounded-full border ${brushColor === c ? 'border-white scale-110' : 'border-transparent hover:scale-110'}`} style={{ backgroundColor: c }} />
                    ))}
                </div>
            </div>
        )}
      </div>

      {/* ЛАСТИК */}
      <div className="relative">
        <ToolButton icon={activeTool === 'eraser-part' ? Scissors : Eraser} active={activeTool.includes('eraser')} onClick={() => toggleMenu('eraser')} hasSubmenu label="Ластик" />
        {openMenu === 'eraser' && (
            <div className="absolute left-full top-0 ml-3 bg-[#090c15] p-3 rounded-xl border border-slate-700 shadow-2xl flex flex-col gap-2 w-48 animate-in fade-in slide-in-from-left-2 z-50">
                <button onClick={() => onSetTool('eraser-object')} className={`w-full text-left p-2 rounded flex items-center gap-2 ${activeTool === 'eraser-object' ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-300 hover:bg-slate-800'}`}><Eraser size={16} /> Объект</button>
                <button onClick={() => onSetTool('eraser-part')} className={`w-full text-left p-2 rounded flex items-center gap-2 ${activeTool === 'eraser-part' ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-300 hover:bg-slate-800'}`}><Scissors size={16} /> Часть</button>
                <input type="range" min="5" max="50" value={brushSize} onChange={(e) => setBrushSize(parseInt(e.target.value))} className="w-full accent-red-400 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
            </div>
        )}
      </div>

      <div className="w-8 h-px bg-slate-800 my-1" />

      {/* ФИГУРЫ */}
      <div className="relative">
        <ToolButton icon={Box} onClick={() => toggleMenu('shapes')} hasSubmenu label="Фигуры" />
        {openMenu === 'shapes' && (
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 bg-[#090c15] p-3 rounded-xl border border-slate-700 shadow-2xl w-56 animate-in fade-in slide-in-from-left-2 z-50 max-h-[80vh] overflow-y-auto custom-scrollbar">
                
                {/* 1. БАЗОВЫЕ */}
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Базовые</div>
                <div className="grid grid-cols-2 gap-2">
                    <DraggableItem type="customShape" shape={ShapeType.RECTANGLE} icon={Square} label="Блок" />
                    <DraggableItem type="customShape" shape={ShapeType.CIRCLE} icon={Circle} label="Событие" />
                    <DraggableItem type="customShape" shape={ShapeType.DIAMOND} icon={Hexagon} label="Решение" />
                    <DraggableItem type="customShape" shape={ShapeType.TRIANGLE} icon={Triangle} label="Треугольник" />
                </div>
                
                <div className="h-px bg-slate-700 my-2"/>

                {/* 2. ДАННЫЕ */}
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Данные</div>
                <div className="grid grid-cols-2 gap-2">
                    <DraggableItem type="customShape" shape={ShapeType.DATABASE} icon={Database} label="База" />
                    <DraggableItem type="customShape" shape={ShapeType.FILE} icon={FileText} label="Файл" />
                    <DraggableItem type="customShape" shape={ShapeType.CLOUD} icon={Cloud} label="Облако" />
                </div>

                <div className="h-px bg-slate-700 my-2"/>

                {/* 3. ЛОГИКА */}
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Логика</div>
                <div className="grid grid-cols-2 gap-2">
                    <DraggableItem type="customShape" shape={ShapeType.PARALLELOGRAM} icon={Activity} label="Ввод/Вывод" />
                    <DraggableItem type="customShape" shape={ShapeType.CROSS} icon={Plus} label="Ветка" />
                </div>

                <div className="h-px bg-slate-700 my-2"/>

                {/* 4. СПЕЦИАЛЬНЫЕ */}
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Специальные</div>
                <div className="grid grid-cols-1 gap-2">
                    <div draggable onDragStart={(e) => onDragStart(e, 'swimlane', ShapeType.SWIMLANE)} className="flex items-center gap-3 p-2 rounded hover:bg-slate-800 cursor-grab active:cursor-grabbing border border-transparent hover:border-slate-600 transition-all">
                        <Layout size={20} className="text-slate-300" />
                        <span className="text-xs text-slate-300 font-bold uppercase">Дорожка</span>
                    </div>
                </div>
            </div>
        )}
      </div>

      <div className="w-8 h-px bg-slate-800 my-1" />
      
      {/* МИНИ-КАРТА */}
      <ToolButton 
        icon={Map} 
        active={showMiniMap} 
        onClick={onToggleMiniMap} 
        label={showMiniMap ? "Скрыть карту" : "Показать карту"} 
      />

      <ToolButton icon={Eye} onClick={onTogglePresentation} label="Презентация" />
      <ToolButton icon={theme === 'dark' ? Moon : Sun} onClick={onToggleTheme} label="Тема" />
      <ToolButton icon={Download} onClick={onExport} label="Экспорт" />
      
    </aside>
  );
};