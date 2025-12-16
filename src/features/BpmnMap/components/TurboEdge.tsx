import React, { memo } from 'react';
import { EdgeLabelRenderer, EdgeProps, getSmoothStepPath, getBezierPath, getStraightPath } from 'reactflow';
import { EdgeData } from '../types';

const TurboEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  markerStart, // Добавляем markerStart
  data,
  selected,
}: EdgeProps<EdgeData>) => {

  // --- 1. ДИНАМИЧЕСКИЙ РАСЧЕТ ПУТИ ---
  let edgePath, labelX, labelY;
  const pathOptions = { sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition };

  switch (data?.pathType) {
    case 'straight':
      [edgePath, labelX, labelY] = getStraightPath(pathOptions);
      break;
    case 'default': // 'default' - это bezier в React Flow
    case 'bezier':
      [edgePath, labelX, labelY] = getBezierPath(pathOptions);
      break;
    default: // 'smoothstep' - наш вариант по умолчанию
      [edgePath, labelX, labelY] = getSmoothStepPath(pathOptions);
      break;
  }

  // --- 2. ЛОГИКА СТИЛЕЙ И АНИМАЦИИ ---
  
  // Уникальный ID градиента
  const gradientId = `grad-${id.replace(/[^\w]/g, '_')}`;
  
  // Определяем цвет: либо из data, либо градиент
  const useCustomColor = !!data?.color;
  const strokeColor = useCustomColor ? data.color : `url(#${gradientId})`;
  
  // Анимация "Шарик"
  const showBallAnimation = data?.animation === 'ball';
  
  // Стили для видимой линии
  const baseStrokeWidth = data?.strokeWidth || 2;
  const finalEdgeStyle: React.CSSProperties = {
    ...style,
    stroke: strokeColor,
    strokeWidth: selected ? baseStrokeWidth + 1 : baseStrokeWidth,
    opacity: (data?.opacity ?? 100) / 100,
    filter: selected ? 'drop-shadow(0 0 4px #22d3ee)' : 'none',
  };

  // Стили для текста лейбла
  const labelStyle: React.CSSProperties = {
    position: 'absolute',
    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
    pointerEvents: 'all',
    color: 'white',
    padding: '2px 6px',
    borderRadius: '4px',
    background: 'rgba(9, 12, 21, 0.75)',
    backdropFilter: 'blur(2px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    // Применяем стили из data
    fontSize: data?.fontSize === 'small' ? '10px' : data?.fontSize === 'large' ? '14px' : '12px',
    fontWeight: data?.isBold ? 'bold' : 'normal',
    fontStyle: data?.isItalic ? 'italic' : 'normal',
    textDecoration: `${data?.isUnderline ? 'underline' : ''} ${data?.isStrike ? 'line-through' : ''}`.trim() || 'none',
  };

  return (
    <>
      {/* 
         ГРАДИЕНТ (рендерится только если нет кастомного цвета)
      */}
      {!useCustomColor && (
        <defs>
          <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1={sourceX} y1={sourceY} x2={targetX} y2={targetY}>
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      )}

      {/* ХИТ-БОКС (невидимая линия для удобного клика) */}
      <path
        d={edgePath}
        fill="none"
        stroke="transparent"
        strokeWidth={20}
        className="react-flow__edge-interaction"
      />

      {/* ВИДИМАЯ ЛИНИЯ */}
      <path
        id={id}
        d={edgePath}
        fill="none"
        markerEnd={markerEnd}
        markerStart={markerStart}
        style={finalEdgeStyle}
        // `animated` prop для анимации "Поток" (пунктир) устанавливается в BpmnToolContent
      />
      
      {/* АНИМАЦИЯ "ШАРИК" */}
      {showBallAnimation && (
        <circle r="4" fill={strokeColor} style={{ filter: 'drop-shadow(0 0 3px currentColor)' }}>
            <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path={edgePath}
            />
        </circle>
      )}

      {/* ЛЕЙБЛ (Если есть текст) */}
      {data?.label && (
        <EdgeLabelRenderer>
          <div style={labelStyle} className="nodrag nopan">
            {data.label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

export default memo(TurboEdge);