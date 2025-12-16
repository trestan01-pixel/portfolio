import { ShapeType, MetricStatus, AppNode, AppEdge } from './types';
import { MarkerType } from 'reactflow';

export const COLORS = {
  cyan: '#22d3ee',
  purple: '#a855f7',
  red: '#ef4444',
  green: '#22c55e',
  slate: '#1e293b',
  text: '#f3f4f6',
};

// Расширенная палитра
export const PRESET_COLORS = [
  '#22d3ee', // Cyan Neon
  '#a855f7', // Purple Neon
  '#f472b6', // Pink
  '#ef4444', // Red
  '#facc15', // Yellow
  '#22c55e', // Green
  '#3b82f6', // Blue
  '#6366f1', // Indigo
  '#ec4899', // Magenta
  '#14b8a6', // Teal
  '#f97316', // Orange
  '#ffffff', // White
  '#94a3b8', // Gray
  '#000000', // Black
];

export const INITIAL_NODES: AppNode[] = [
  {
    id: '1',
    type: 'customShape',
    position: { x: 100, y: 100 },
    style: { width: 140, height: 80 },
    data: { label: 'Начало', type: ShapeType.CIRCLE, color: COLORS.cyan, metric: 'Start', metricStatus: MetricStatus.SUCCESS },
  },
];

export const INITIAL_EDGES: AppEdge[] = [];