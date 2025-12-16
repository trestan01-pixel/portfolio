import React, { memo, useState, useRef, useEffect } from 'react';
import { Handle, Position, NodeResizer } from 'reactflow';
import type { NodeProps } from 'reactflow';
import { NodeData, ShapeType, MetricStatus } from '../types';
import {
    Box, Circle, Hexagon, Triangle, Database, Cloud, FileText, Activity, Plus,
    Clock, RussianRuble, Link2, User, Square, Diamond // Добавил Square и Diamond
} from 'lucide-react';
import { COLORS } from '../constants'; 

// --- 1. ДОБАВЛЕНО: ГЕОМЕТРИЯ ФОРМ (Clip Paths) ---
const SHAPE_CLIP_PATHS: Record<string, string> = {
    'diamond': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    'triangle': 'polygon(50% 0%, 0% 100%, 100% 100%)',
    'hexagon': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    'circle': 'circle(50% at 50% 50%)',
    'rectangle': 'none',
    // Маппинг для твоих старых ShapeType, если они отличаются
    [ShapeType.DIAMOND]: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    [ShapeType.TRIANGLE]: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    [ShapeType.CIRCLE]: 'circle(50% at 50% 50%)',
};

// --- ИКОНКИ ФИГУР (Обновил types для поддержки строк из меню) ---
const ShapeIcon = ({ type }: { type: string | ShapeType }) => {
    // Приводим к нижнему регистру для сравнения, если придет строка 'circle'
    const t = String(type).toLowerCase();
    
    if (t === 'circle' || t === ShapeType.CIRCLE) return <Circle size={16} />;
    if (t === 'diamond' || t === ShapeType.DIAMOND) return <Diamond size={16} />;
    if (t === 'triangle' || t === ShapeType.TRIANGLE) return <Triangle size={16} />;
    if (t === 'hexagon') return <Hexagon size={16} />;
    
    // Старые типы
    switch (type) {
        case ShapeType.CYLINDER: return <Database size={16} />;
        case ShapeType.CLOUD: return <Cloud size={16} />;
        case ShapeType.FILE: return <FileText size={16} />;
        case ShapeType.PARALLELOGRAM: return <Activity size={16} />;
        case ShapeType.PLUS: return <Plus size={16} />;
        default: return <Square size={16} />;
    }
};

// --- КЛАССЫ ФИГУР (Оставил как было для обратной совместимости) ---
const getShapeClass = (type: string | ShapeType) => {
    switch (type) {
        case ShapeType.CIRCLE: return 'shape-circle';
        case ShapeType.DIAMOND: return 'shape-diamond';
        case ShapeType.TRIANGLE: return 'shape-triangle';
        case ShapeType.CYLINDER: return 'shape-cylinder';
        case ShapeType.CLOUD: return 'shape-cloud';
        case ShapeType.FILE: return 'shape-file';
        case ShapeType.PARALLELOGRAM: return 'shape-parallelogram';
        case ShapeType.PLUS: return 'shape-plus';
        default: return 'shape-rectangle';
    }
};

export const CustomShapeNode = memo(({ id, data, selected, isConnectable }: NodeProps<NodeData>) => {
    const {
        label, type, metricStatus, color, isMatched, metric, cost, note, link, role,
        fontSize, isBold, isItalic, isUnderline, isStrike,
        textAlign, verticalAlign,
        opacity, strokeWidth, styleType,
        shape: dataShape // Достаем shape из data (это то, что меняет меню)
    } = data;

    // --- ЛОГИКА ОПРЕДЕЛЕНИЯ ФОРМЫ ---
    // Если в data есть shape (выбрали в меню), используем его. Иначе старый type.
    const currentShape = dataShape || type || 'rectangle';

    // --- Внутреннее состояние и обработчики ---
    const [isEditing, setIsEditing] = useState(false);
    const [localLabel, setLocalLabel] = useState(label);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => { setLocalLabel(label); }, [label]);
    useEffect(() => { if (isEditing && inputRef.current) inputRef.current.focus(); }, [isEditing]);

    const handleDoubleClick = (e: React.MouseEvent) => { e.stopPropagation(); setIsEditing(true); };
    const handleBlur = () => { setIsEditing(false); data.label = localLabel; };
    const handleKeyDown = (e: React.KeyboardEvent) => { if (e.key === 'Enter') handleBlur(); };
    const onLinkClick = (e: React.MouseEvent) => { e.stopPropagation(); if (link) window.open(link, '_blank'); };

    // Используем currentShape для класса, если нужно, или оставляем type для старых стилей
    const shapeClass = getShapeClass(type); 
    
    // Обновил проверку пропорций на currentShape
    const keepRatio = currentShape === 'circle' || currentShape === ShapeType.CIRCLE || 
                      currentShape === 'diamond' || currentShape === ShapeType.DIAMOND || 
                      currentShape === ShapeType.PLUS;

    const hasTime = metric !== undefined && metric !== null && String(metric).trim() !== '';
    const hasCost = cost !== undefined && cost !== null && String(cost).trim() !== '';
    const hasLink = link && String(link).trim() !== '';
    const hasRole = role && String(role).trim() !== '';

    // --- ЛОГИКА ЦВЕТА (Твой код) ---
    let primaryColor = color || COLORS.cyan;
    let glowClass = '';
    let positiveCount = 0;
    let negativeCount = 0;

    if (hasTime) { String(metric).includes('-') ? negativeCount++ : positiveCount++; }
    if (hasCost) { String(cost).includes('-') ? negativeCount++ : positiveCount++; }

    if (metricStatus === MetricStatus.SUCCESS || positiveCount >= 2) {
        primaryColor = COLORS.green;
        glowClass = `shadow-[0_0_18px_rgba(34,197,94,0.7)]`; 
    } else if (metricStatus === MetricStatus.ERROR || negativeCount >= 2) {
        primaryColor = COLORS.red;
        glowClass = `shadow-[0_0_18px_rgba(239,68,68,0.7)] animate-pulse`; 
    } else {
        glowClass = selected ? `shadow-[0_0_18px_${primaryColor}]` : '';
    }

    // --- СБОРКА СТИЛЕЙ ---
    const nodeContainerStyle: React.CSSProperties = {
        opacity: (opacity ?? 100) / 100,
        borderWidth: strokeWidth || 2,
        borderStyle: styleType || 'solid',
        borderColor: 'transparent', 
        '--node-color-primary': primaryColor,
        '--node-color-secondary': color ? '#ffffff' : '#a855f7',
        // 2. ДОБАВЛЕНО: Применяем clip-path для обрезки формы
        clipPath: SHAPE_CLIP_PATHS[currentShape] || 'none',
    };

    const textWrapperStyle: React.CSSProperties = {
        display: 'flex', flexDirection: 'column',
        justifyContent: verticalAlign === 'top' ? 'flex-start' : verticalAlign === 'bottom' ? 'flex-end' : 'center',
        alignItems: 'center', width: '100%', height: '100%', padding: '4px',
    };
    
    const textStyle: React.CSSProperties = {
        fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal',
        textDecoration: `${isUnderline ? 'underline' : ''} ${isStrike ? 'line-through' : ''}`.trim() || 'none',
        fontSize: fontSize === 'small' ? '10px' : fontSize === 'large' ? '16px' : fontSize === 'extra' ? '20px' : '12px',
        textAlign: textAlign || 'center', color: 'white', wordBreak: 'break-word', lineHeight: 1.2,
    };
    
    const getBadgeStyle = (value: any) => {
        const stringValue = String(value);
        if (stringValue.includes('--') || stringValue.includes('-')) {
            return 'bg-red-500 border-red-400 text-white shadow-red-500/50';
        }
        return 'bg-green-500 border-green-400 text-white shadow-green-500/50';
    };
    
    const handleStyle = { zIndex: 50, width: 10, height: 10, border: `2px solid ${primaryColor}`, background: '#0B0F19' };

    const getResizerStyle = (): React.CSSProperties => {
        const baseStyle: React.CSSProperties = { borderWidth: '2px' };
        // Проверяем currentShape вместо type
        if (currentShape === 'circle' || currentShape === ShapeType.CIRCLE) {
             return { ...baseStyle, borderRadius: '50%' };
        }
        return { ...baseStyle, borderRadius: '1rem' }; 
    };

    // Определяем, нужно ли вращать контент (ромб)
    const isRotatedShape = currentShape === 'diamond' || currentShape === ShapeType.DIAMOND || 
                           currentShape === ShapeType.PLUS;

    return (
        <>
            <NodeResizer
                color={primaryColor}
                isVisible={selected && isHovered}
                minWidth={40} minHeight={40}
                keepAspectRatio={keepRatio}
                style={getResizerStyle()}
            />
            
            <div 
                className="w-full h-full relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Блоки с бейджами (metric, cost, link, role) без изменений */}
                {hasTime && <div className={`absolute -top-3 -left-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold z-[100] border border-transparent shadow-md ${getBadgeStyle(metric)}`}><Clock size={10} /><span>{metric}</span></div>}
                {hasCost && <div className={`absolute -top-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold z-[100] border border-transparent shadow-md ${getBadgeStyle(cost)}`} style={{ right: hasLink ? '20px' : '-8px' }}><span>{cost}</span><RussianRuble size={10} /></div>}
                {hasLink && <div onClick={onLinkClick} className="absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 border border-blue-400 text-white shadow-lg cursor-pointer hover:bg-blue-500 hover:scale-110 transition-all z-[101]"><Link2 size={12} /></div>}
                {hasRole && <div className="absolute -bottom-3 -left-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold z-[100] bg-indigo-600 border border-indigo-400 text-white shadow-lg"><User size={10} /><span className="max-w-[60px] truncate">{role}</span></div>}

                {/* Хэндлы для связей (без изменений) */}
                <Handle type="target" position={Position.Top} id="t" style={{...handleStyle, top: -5}} isConnectable={isConnectable} />
                <Handle type="source" position={Position.Right} id="r" style={{...handleStyle, right: -5}} isConnectable={isConnectable} />
                <Handle type="source" position={Position.Bottom} id="b" style={{...handleStyle, bottom: -5}} isConnectable={isConnectable} />
                <Handle type="target" position={Position.Left} id="l" style={{...handleStyle, left: -5}} isConnectable={isConnectable} />

                <div 
                    className={`turbo-node w-full h-full ${shapeClass} shadow-none ${glowClass} ${selected ? 'selected' : ''}`} 
                    onDoubleClick={handleDoubleClick}
                    style={{ ...nodeContainerStyle, opacity: isMatched === false ? 0.3 : (opacity ?? 100) / 100 } as React.CSSProperties}
                >
                    {/* Внутренняя структура узла (без изменений) */}
                    <div className="turbo-wrapper">
                        <div className="turbo-inner p-2 relative">
                            {/* Обновлена проверка на isRotatedShape */}
                            <div className={`turbo-content-rotator w-full h-full ${isRotatedShape ? 'rotate-[-45deg]' : ''}`}>
                                <div style={textWrapperStyle}>
                                    <div className="mb-1 opacity-70" style={{ color: primaryColor }}>
                                        <ShapeIcon type={currentShape} />
                                    </div>
                                    <div className="w-full">
                                        {isEditing ? (
                                            <input ref={inputRef} value={localLabel} onChange={(e) => setLocalLabel(e.target.value)} onBlur={handleBlur} onKeyDown={handleKeyDown} className="bg-transparent text-center w-full outline-none border-b border-cyan-500/50 p-0" style={textStyle} />
                                        ) : (
                                            <div className="select-none pointer-events-none" style={textStyle} title={localLabel || ''}>{localLabel}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Заметка под узлом (без изменений) */}
                {(note || note === 0) && (
                    <div className="absolute top-[100%] mt-3 left-1/2 -translate-x-1/2 bg-[#0B0F19]/95 border border-gray-700 text-gray-300 text-[10px] px-2 py-1 rounded max-w-[180px] w-max text-center whitespace-pre-wrap z-10 shadow-xl backdrop-blur-sm">
                        {note}
                    </div>
                )}
            </div>
        </>
    );
});


// --- GroupNode и SwimlaneNode (оставил без изменений) ---
export const GroupNode = memo(({ data, selected }: NodeProps<NodeData>) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="w-full h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <NodeResizer 
                color="#a855f7" 
                isVisible={selected && isHovered} 
                minWidth={100} 
                minHeight={100}
                style={{ borderRadius: '0.75rem' }} 
            />
            <div 
                className={`w-full h-full rounded-xl border-2 border-dashed bg-purple-900/10 transition-all ${selected ? 'border-purple-500' : 'border-purple-900/30'}`}
                style={{ opacity: (data.opacity ?? 100) / 100 }}
            >
                <div className="absolute -top-6 text-purple-400 font-mono text-xs font-bold px-2">{data.label}</div>
            </div>
        </div>
    );
});

export const SwimlaneNode = memo(({ data, selected }: NodeProps<NodeData>) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="w-full h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <NodeResizer 
                color="#22d3ee" 
                isVisible={selected && isHovered} 
                minWidth={200} 
                minHeight={150}
                style={{ borderRadius: '0.5rem' }}
            />
            <div 
                className={`w-full h-full border-2 border-dashed bg-cyan-900/5 transition-all ${selected ? 'border-cyan-400' : 'border-cyan-900/30'}`}
                style={{ opacity: (data.opacity ?? 100) / 100 }}
            >
                <div className="absolute -top-7 left-0 text-cyan-400 font-mono text-xs font-bold bg-[#0B0F19] px-2 py-1 rounded-t border border-cyan-900/50">{data.label || 'SWIMLANE'}</div>
            </div>
        </div>
    );
});