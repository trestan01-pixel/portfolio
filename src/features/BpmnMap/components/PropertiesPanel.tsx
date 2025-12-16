import React, { useState, useEffect } from 'react';
import { 
  X, Trash2, PenLine, Type, 
  AlignLeft, AlignCenter, AlignRight, 
  GitBranch, Minus, ArrowRight, ArrowLeft, MoveHorizontal, Circle, 
  Activity, PlayCircle, StopCircle, Bold, Italic, Underline, Strikethrough,
  Lock, Unlock, ArrowUp, ArrowDown, Eye, AlignVerticalJustifyCenter, AlignVerticalJustifyStart, AlignVerticalJustifyEnd,
  Square, Triangle, Hexagon, Diamond, BoxSelect, StickyNote
} from 'lucide-react';
import { AppNode, AppEdge, MetricStatus, ShapeType } from '../types';
import { PRESET_COLORS } from '../constants';

interface PropertiesPanelProps {
  element: AppNode | AppEdge | null;
  isEdge: boolean;
  onUpdate: (id: string, data: Partial<any>) => void;
  onClose: () => void;
  onDelete: (id: string) => void;
}

export const PropertiesPanel: React.FC<PropertiesPanelProps> = ({ element, isEdge, onUpdate, onClose, onDelete }) => {
  // --- STATE ---
  // Локальная копия данных для мгновенного отклика интерфейса (Optimistic UI)
  const [localData, setLocalData] = useState<any>({});
  
  // Состояние для текстовых полей, чтобы не отправлять апдейты на каждый символ
  const [textValues, setTextValues] = useState({
    label: '',
    metric: '',
    cost: '',
    role: '',
    description: '',
    link: ''
  });

  // --- SYNC STATE WITH ELEMENT ---
  // При выборе нового элемента загружаем его данные в локальное состояние
  useEffect(() => {
    if (element) {
      const incomingData = element.data || {};
      setLocalData(incomingData);
      
      // Инициализируем текстовые поля
      setTextValues({
        label: incomingData.label || '',
        metric: incomingData.metric || '',
        cost: incomingData.cost || '',
        role: incomingData.role || '',
        description: incomingData.description || '',
        link: incomingData.link || ''
      });
    }
  }, [element]);

  if (!element) return null;

  // --- CORE UPDATE LOGIC ---

  /**
   * Универсальная функция обновления.
   * Ключевой момент: мы берем {...localData}, накладываем новое значение, 
   * и отправляем это как патч, сохраняя все остальные поля (анимации, маркеры и т.д.)
   */
  const updateField = (field: string, value: any) => {
    // 1. Формируем новый объект данных, сохраняя всё старое
    const newData = { ...localData, [field]: value };
    
    // 2. Мгновенно обновляем UI
    setLocalData(newData);

    // 3. Отправляем родителю (React Flow), гарантируя, что мы не потеряли другие поля
    // Мы берем element.data (источник правды) и мержим с нашими изменениями
    onUpdate(element.id, { 
      data: { 
        ...element.data, 
        ...newData 
      } 
    });
  };

  // Обработка ввода текста (обновляем данные только при Blur/Enter)
  const handleInputChange = (field: keyof typeof textValues, val: string) => {
    setTextValues(prev => ({ ...prev, [field]: val }));
  };

  const handleBlur = (field: string, val: string) => {
    // Обновляем, только если значение реально изменилось
    if (localData[field] !== val) {
      updateField(field, val);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      (e.target as HTMLElement).blur();
    }
  };

  /**
   * Логика обновления маркеров (стрелок).
   * Сохраняет animation и pathType, меняет только markerStart/markerEnd/markerShape.
   */
  const handleMarkerChange = (position: 'start' | 'end' | 'both' | 'none', shapeArg?: 'arrow' | 'circle') => {
    // Определяем текущую форму маркера (если не передана, берем из стейта или дефолт 'arrow')
    const currentShape = shapeArg || localData.markerShape || 'arrow';
    
    // Конфигурация для React Flow. 
    // Если circle -> { type: 'circle' }, если arrow -> { type: 'arrowclosed' }
    const markerConfig = { type: currentShape === 'circle' ? 'circle' : 'arrowclosed' };

    // Копируем текущие данные, чтобы ничего не потерять
    const newData = { ...localData };

    // 1. Очищаем старые маркеры
    if (position === 'none') {
        newData.markerStart = undefined;
        newData.markerEnd = undefined;
    } else {
        // 2. Настраиваем Start
        if (position === 'start' || position === 'both') {
            newData.markerStart = markerConfig;
        } else if (position === 'end') {
            // Если выбрали "только конец", начало убираем
            newData.markerStart = undefined;
        }

        // 3. Настраиваем End
        if (position === 'end' || position === 'both') {
            newData.markerEnd = markerConfig;
        } else if (position === 'start') {
             // Если выбрали "только начало", конец убираем
            newData.markerEnd = undefined;
        }
    }

    // 4. Запоминаем выбранную форму (для подсветки кнопок "Стрелка/Круг")
    newData.markerShape = currentShape;

    // 5. Применяем изменения
    setLocalData(newData);
    onUpdate(element.id, { 
        data: {
            ...element.data, // Важно! Берем исходные данные
            ...newData       // Накладываем новые маркеры
        } 
    });
  };

  // --- UI CONSTANTS FROM STATE ---
  const { 
    fontSize = 'medium', 
    textAlign = 'center', 
    verticalAlign = 'center', 
    opacity = 100, 
    locked: isLocked = false,
    shape: currentShape = 'rectangle',
    color,
    isBold, isItalic, isUnderline, isStrike,
    strokeWidth = 2,
    styleType = 'solid',
    pathType = 'smoothstep',
    animation = 'none',
    markerStart,
    markerEnd,
    markerShape = 'arrow',
    metricStatus
  } = localData;

  const hasStart = !!markerStart;
  const hasEnd = !!markerEnd;
  const isSwimlane = !isEdge && (element as AppNode).type === ShapeType.SWIMLANE;

  return (
    <div className="fixed right-4 top-4 bottom-4 w-80 bg-[#090c15]/95 backdrop-blur-xl border border-slate-800 shadow-2xl p-4 flex flex-col rounded-2xl z-50 overflow-hidden font-sans transition-all duration-200">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-cyan-400">{isEdge ? 'Связь' : 'Блок'}</h2>
            {isLocked && <Lock size={14} className="text-red-400" />}
        </div>
        <div className="flex gap-2">
            <button onClick={() => updateField('locked', !isLocked)} className={`p-1.5 rounded hover:bg-slate-800 transition-colors ${isLocked ? 'text-red-400' : 'text-slate-400'}`}>
                {isLocked ? <Lock size={16}/> : <Unlock size={16}/>}
            </button>
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors"><X size={20} /></button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 space-y-6">
        
        {/* 1. TEXT CONTENT */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-xs uppercase text-slate-400 font-bold tracking-wider"><Type size={12} /> Текст</label>
          <input 
            type="text" 
            value={textValues.label} 
            onChange={(e) => handleInputChange('label', e.target.value)} 
            onBlur={(e) => handleBlur('label', e.target.value)} 
            onKeyDown={handleKeyDown}
            placeholder="Название..."
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
          />
           <div className="flex gap-2">
              <div className="flex bg-slate-900 rounded border border-slate-700 p-1">
                  {['small', 'medium', 'large', 'extra'].map((s) => ( 
                    <button key={s} onClick={() => updateField('fontSize', s)} className={`px-2 py-1 text-xs rounded transition-colors ${fontSize === s ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400 hover:text-white'}`}>
                      {s[0].toUpperCase()}
                    </button>
                  ))}
              </div>
              <div className="flex flex-1 justify-between bg-slate-900 rounded border border-slate-700 p-1">
                  <button onClick={() => updateField('isBold', !isBold)} className={`p-1 rounded transition-colors ${isBold ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-400 hover:text-white'}`}><Bold size={14}/></button>
                  <button onClick={() => updateField('isItalic', !isItalic)} className={`p-1 rounded transition-colors ${isItalic ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-400 hover:text-white'}`}><Italic size={14}/></button>
                  <button onClick={() => updateField('isUnderline', !isUnderline)} className={`p-1 rounded transition-colors ${isUnderline ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-400 hover:text-white'}`}><Underline size={14}/></button>
                  <button onClick={() => updateField('isStrike', !isStrike)} className={`p-1 rounded transition-colors ${isStrike ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-400 hover:text-white'}`}><Strikethrough size={14}/></button>
              </div>
          </div>
          <div className="flex justify-between items-center bg-slate-900 rounded border border-slate-700 p-1">
              <div className="flex gap-1 border-r border-slate-700 pr-2 mr-2">
                <button onClick={() => updateField('textAlign', 'left')} className={`p-1 rounded transition-colors ${textAlign === 'left' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}><AlignLeft size={16}/></button>
                <button onClick={() => updateField('textAlign', 'center')} className={`p-1 rounded transition-colors ${textAlign === 'center' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}><AlignCenter size={16}/></button>
                <button onClick={() => updateField('textAlign', 'right')} className={`p-1 rounded transition-colors ${textAlign === 'right' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}><AlignRight size={16}/></button>
              </div>
              {!isEdge && (
                 <div className="flex gap-1">
                    <button onClick={() => updateField('verticalAlign', 'top')} className={`p-1 rounded transition-colors ${verticalAlign === 'top' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}><AlignVerticalJustifyStart size={16}/></button>
                    <button onClick={() => updateField('verticalAlign', 'center')} className={`p-1 rounded transition-colors ${verticalAlign === 'center' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}><AlignVerticalJustifyCenter size={16}/></button>
                    <button onClick={() => updateField('verticalAlign', 'bottom')} className={`p-1 rounded transition-colors ${verticalAlign === 'bottom' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}><AlignVerticalJustifyEnd size={16}/></button>
                 </div>
              )}
          </div>
        </div>

        {/* 2. SHAPE SELECTION (ONLY FOR NODES) */}
        {!isEdge && !isSwimlane && (
          <div className="space-y-3 pt-4 border-t border-slate-800">
             <label className="flex items-center gap-2 text-xs uppercase text-slate-400 font-bold tracking-wider">
               <BoxSelect size={12} /> Форма
             </label>
             <div className="grid grid-cols-5 gap-2 bg-slate-900/50 p-2 rounded-xl border border-slate-800">
                {[
                  { id: 'rectangle', icon: Square, label: 'Прямоугольник' },
                  { id: 'circle', icon: Circle, label: 'Круг' },
                  { id: 'diamond', icon: Diamond, label: 'Ромб' },
                  { id: 'triangle', icon: Triangle, label: 'Треугольник' },
                  { id: 'hexagon', icon: Hexagon, label: 'Шестиугольник' }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => updateField('shape', item.id)} 
                    title={item.label}
                    className={`p-2 rounded flex items-center justify-center transition-all ${currentShape === item.id ? 'bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/50 scale-110' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'}`}
                  >
                    <item.icon size={18} />
                  </button>
                ))}
             </div>
          </div>
        )}

        {/* 3. STYLE (Color, Opacity) */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
             <div className="flex justify-between items-center">
                 <label className="flex items-center gap-2 text-xs uppercase text-slate-400 font-bold tracking-wider"><PenLine size={12} /> Стиль</label>
                 <span className="text-[10px] text-slate-500">{opacity}%</span>
             </div>
             <div className="flex items-center gap-2">
                 <Eye size={14} className="text-slate-500" />
                 <input type="range" min="0" max="100" step="10" value={opacity} onChange={(e) => updateField('opacity', parseInt(e.target.value))} className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
             </div>
             <div className="grid grid-cols-7 gap-2">
                {PRESET_COLORS.map(c => (<button key={c} onClick={() => updateField('color', c)} className={`w-6 h-6 rounded-full border transition-transform hover:scale-110 ${color === c ? 'border-white scale-110 ring-2 ring-cyan-500/50' : 'border-slate-600'}`} style={{ backgroundColor: c }} /> ))}
            </div>
        </div>

        {/* 4. EDGE SPECIFIC SETTINGS */}
        {isEdge && (
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <label className="flex items-center gap-2 text-xs uppercase text-slate-400 font-bold tracking-wider"><GitBranch size={12}/> Настройки связи</label>
            
            {/* Толщина и Стиль */}
            <div className="grid grid-cols-2 gap-2">
                <div className="grid grid-cols-3 gap-1 bg-slate-900 rounded border border-slate-700 p-1">
                    {[2, 4, 6].map((width) => (
                        <button 
                            key={width}
                            onClick={() => updateField('strokeWidth', width)} 
                            className={`p-2 text-xs rounded flex items-center justify-center transition-colors ${strokeWidth === width ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400 hover:bg-slate-800'}`}
                        > <div style={{ height: width / 1.5, width: '80%', backgroundColor: 'currentColor', borderRadius: 2 }} /> </button>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-1 bg-slate-900 rounded border border-slate-700 p-1">
                    <button onClick={() => updateField('styleType', 'solid')} className={`text-xs rounded transition-colors ${styleType === 'solid' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400'}`}>––</button>
                    <button onClick={() => updateField('styleType', 'dashed')} className={`text-xs rounded transition-colors ${styleType === 'dashed' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400'}`}>- -</button>
                    <button onClick={() => updateField('styleType', 'dotted')} className={`text-xs rounded transition-colors ${styleType === 'dotted' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400'}`}>···</button>
                </div>
            </div>

            {/* Тип пути */}
            <div className="grid grid-cols-3 gap-2">
                <button onClick={() => updateField('pathType', 'smoothstep')} className={`p-1.5 text-[10px] rounded border transition-colors ${pathType === 'smoothstep' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}>Угловой</button>
                <button onClick={() => updateField('pathType', 'default')} className={`p-1.5 text-[10px] rounded border transition-colors ${(pathType === 'default' || pathType === 'bezier') ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}>Кривая</button>
                <button onClick={() => updateField('pathType', 'straight')} className={`p-1.5 text-[10px] rounded border transition-colors ${pathType === 'straight' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}>Прямой</button>
            </div>

            {/* Маркеры (стрелки) */}
            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                <div className="flex gap-2 mb-2">
                    <button onClick={() => handleMarkerChange('none')} className={`flex-1 p-1 rounded border flex justify-center transition-colors ${!hasStart && !hasEnd ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}><Minus size={14} /></button>
                    <button onClick={() => handleMarkerChange('start')} className={`flex-1 p-1 rounded border flex justify-center transition-colors ${hasStart && !hasEnd ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}><ArrowLeft size={14} /></button>
                    <button onClick={() => handleMarkerChange('end')} className={`flex-1 p-1 rounded border flex justify-center transition-colors ${!hasStart && hasEnd ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}><ArrowRight size={14} /></button>
                    <button onClick={() => handleMarkerChange('both')} className={`flex-1 p-1 rounded border flex justify-center transition-colors ${hasStart && hasEnd ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}><MoveHorizontal size={14} /></button>
                </div>
                {/* Выбор формы маркера: Стрелка или Круг */}
                {(hasStart || hasEnd) && (
                    <div className="flex gap-2 border-t border-slate-800 pt-2">
                         <button 
                            onClick={() => handleMarkerChange(hasStart && hasEnd ? 'both' : (hasStart ? 'start' : 'end'), 'arrow')} 
                            className={`flex-1 text-[10px] py-1 rounded border transition-colors ${markerShape === 'arrow' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-500'}`}
                         >
                            Стрелка
                         </button>
                         <button 
                            onClick={() => handleMarkerChange(hasStart && hasEnd ? 'both' : (hasStart ? 'start' : 'end'), 'circle')} 
                            className={`flex-1 text-[10px] py-1 rounded border transition-colors ${markerShape === 'circle' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-500'}`}
                         >
                            Круг
                         </button>
                    </div>
                )}
            </div>

            {/* Анимация */}
             <div className="grid grid-cols-3 gap-2">
                <button onClick={() => updateField('animation', 'none')} className={`p-2 text-xs flex flex-col items-center rounded border transition-colors ${animation === 'none' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}><StopCircle size={12} /> Нет</button>
                <button onClick={() => updateField('animation', 'dash')} className={`p-2 text-xs flex flex-col items-center rounded border transition-colors ${animation === 'dash' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}><Activity size={12} /> Поток</button>
                <button onClick={() => updateField('animation', 'ball')} className={`p-2 text-xs flex flex-col items-center rounded border transition-colors ${animation === 'ball' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 text-slate-400'}`}><PlayCircle size={12} /> Шар</button>
            </div>
          </div>
        )}

        {/* 5. DATA (DESCRIPTION, METRICS) - NODE ONLY */}
        {!isEdge && !isSwimlane && (
            <div className="space-y-3 pt-4 border-t border-slate-800">
                <label className="flex items-center gap-2 text-xs uppercase text-slate-400 font-bold tracking-wider"><StickyNote size={12} /> Данные</label>
                <textarea 
                    value={textValues.description} 
                    onChange={(e) => handleInputChange('description', e.target.value)} 
                    onBlur={(e) => handleBlur('description', e.target.value)} 
                    placeholder="Описание..." 
                    className="w-full h-16 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs resize-none focus:border-cyan-500 transition-colors" 
                />
                <div className="grid grid-cols-2 gap-2">
                    <input type="text" value={textValues.role} onChange={(e) => handleInputChange('role', e.target.value)} onBlur={(e) => handleBlur('role', e.target.value)} onKeyDown={handleKeyDown} placeholder="Роль" className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white" />
                    <input type="text" value={textValues.link} onChange={(e) => handleInputChange('link', e.target.value)} onBlur={(e) => handleBlur('link', e.target.value)} onKeyDown={handleKeyDown} placeholder="Ссылка" className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white" />
                    <input type="text" value={textValues.metric} onChange={(e) => handleInputChange('metric', e.target.value)} onBlur={(e) => handleBlur('metric', e.target.value)} onKeyDown={handleKeyDown} placeholder="Время" className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white" />
                    <input type="text" value={textValues.cost} onChange={(e) => handleInputChange('cost', e.target.value)} onBlur={(e) => handleBlur('cost', e.target.value)} onKeyDown={handleKeyDown} placeholder="Цена" className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white" />
                </div>
                <div className="flex gap-2">
                    <button onClick={() => updateField('metricStatus', 'error')} className={`flex-1 py-1 rounded text-[10px] border transition-colors ${metricStatus === 'error' ? 'bg-red-500/20 border-red-500 text-red-400' : 'border-slate-700 text-slate-500'}`}>Проблема</button>
                    <button onClick={() => updateField('metricStatus', 'success')} className={`flex-1 py-1 rounded text-[10px] border transition-colors ${metricStatus === 'success' ? 'bg-green-500/20 border-green-500 text-green-400' : 'border-slate-700 text-slate-500'}`}>Норма</button>
                    <button onClick={() => updateField('metricStatus', 'none')} className="flex-1 py-1 text-[10px] text-slate-600 border border-transparent hover:text-slate-400">Сброс</button>
                </div>
            </div>
        )}
        
        {isSwimlane && ( <div className="pt-4 border-t border-slate-800"> <p className="text-xs text-slate-500 text-center">Настройки Swimlane</p> </div> )}
      </div>

      {/* FOOTER */}
      <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
         <div className="flex gap-2">
             <button onClick={() => updateField('zIndex', 10)} className="flex-1 flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded text-[10px]"><ArrowUp size={12}/> Наверх</button>
             <button onClick={() => updateField('zIndex', 0)} className="flex-1 flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 rounded text-[10px]"><ArrowDown size={12}/> Вниз</button>
         </div>
        <button onClick={() => onDelete(element.id)} className="w-full flex items-center justify-center gap-2 text-red-500 hover:bg-red-500/10 py-2 rounded-lg text-sm font-bold uppercase transition-colors"><Trash2 size={16} /> Удалить</button>
      </div>
    </div>
  );
};