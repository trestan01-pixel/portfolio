import React from 'react';
import { Copy, Trash2, ArrowRight, Circle, Repeat } from 'lucide-react';

export const ContextMenu = ({ element, top, left, onClose, onDelete, onDuplicate, onChangeMarker, onReverseEdge }: any) => {
  
  // Определяем, узел это или связь
  const isEdge = 'source' in element;

  return (
    <div 
      className="fixed bg-[#1e293b] border border-slate-700 rounded-lg shadow-2xl p-2 flex flex-col gap-1 z-[99999] w-48"
      style={{ top, left }}
    >
      {/* Кнопки только для УЗЛОВ */}
      {!isEdge && (
        <button 
          onClick={() => { onDuplicate(element); onClose(); }} 
          className="flex items-center gap-2 text-left text-white hover:bg-slate-700 p-2 rounded text-sm"
        >
          <Copy size={14} /> Дублировать
        </button>
      )}

      {/* Кнопки только для СВЯЗЕЙ */}
      {isEdge && (
        <>
          <div className="px-2 pt-1 pb-2 text-xs text-slate-400 font-bold uppercase">Вид конца</div>
          <div className="flex items-center gap-2 px-2">
              <button 
                onClick={() => { onChangeMarker(element.id, 'arrow'); onClose(); }}
                className="flex-1 flex justify-center items-center gap-2 text-white hover:bg-slate-700 p-2 rounded text-sm"
              >
                <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => { onChangeMarker(element.id, 'circle'); onClose(); }}
                className="flex-1 flex justify-center items-center gap-2 text-white hover:bg-slate-700 p-2 rounded text-sm"
              >
                <Circle size={14} />
              </button>
          </div>
          <div className="h-px bg-slate-700 my-1" />
           <button 
            onClick={() => { onReverseEdge(element.id); onClose(); }}
            className="flex items-center gap-2 text-left text-white hover:bg-slate-700 p-2 rounded text-sm"
          >
            <Repeat size={14} /> Развернуть
          </button>
        </>
      )}

      {/* Общие кнопки */}
      <div className="h-px bg-slate-700 my-1" />
      <button 
        onClick={() => { onDelete(element.id); onClose(); }} 
        className="flex items-center gap-2 text-left text-red-400 hover:bg-red-500/10 p-2 rounded text-sm"
      >
        <Trash2 size={14} /> Удалить
      </button>
    </div>
  );
};