import React from 'react';
import { useStore } from 'reactflow';
import { DrawingPath } from '../types';

interface DrawingCanvasProps {
  currentPath: DrawingPath | null;
  drawingPaths: DrawingPath[];
  selectedPathId?: string | null;
  onSelectPath?: (id: string) => void;
}

const getSvgPath = (points: { x: number; y: number }[]) => {
  if (points.length < 2) return '';
  return `M ${points[0].x} ${points[0].y} ` + points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ');
};

export const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ 
  currentPath, 
  drawingPaths, 
  selectedPathId, 
  onSelectPath 
}) => {
  // Достаем состояние трансформации (зум/панорама) из ReactFlow
  const transform = useStore((state) => state.transform);

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
      style={{ 
         // Эта строка чинит "съезжание" при зуме
         transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
         transformOrigin: '0 0'
      }}
    >
      {drawingPaths.map((path) => {
        const isSelected = path.id === selectedPathId;
        
        return (
          <path
            key={path.id}
            d={getSvgPath(path.points)}
            stroke={isSelected ? '#ef4444' : path.color} // Красный, если выбран
            strokeWidth={isSelected ? path.strokeWidth + 2 : path.strokeWidth} // Жирнее, если выбран
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ 
                pointerEvents: 'stroke', // Разрешаем клик только по самой линии
                cursor: 'pointer',
                transition: 'stroke 0.2s, stroke-width 0.2s'
            }} 
            onClick={(e) => {
                e.stopPropagation(); // Не кликаем сквозь линию
                if (onSelectPath) onSelectPath(path.id);
            }}
          />
        );
      })}
      
      {currentPath && (
        <path
          d={getSvgPath(currentPath.points)}
          stroke={currentPath.color}
          strokeWidth={currentPath.strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.7 }}
        />
      )}
    </svg>
  );
};