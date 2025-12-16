import { Node, Edge } from 'reactflow';

export type Theme = 'light' | 'dark';

export enum ShapeType {
  RECTANGLE = 'rectangle',
  CIRCLE = 'circle',
  DIAMOND = 'diamond',
  TRIANGLE = 'triangle',
  HEXAGON = 'hexagon',
  SWIMLANE = 'swimlane',
}

export enum CommentType {
  PROBLEM = 'problem',
  SOLUTION = 'solution',
  INFO = 'info',
}

export enum MetricStatus {
  NONE = 'none',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export interface Comment {
  id: string;
  text: string;
  type: CommentType;
  timestamp: number;
}

export interface NodeData {
  label: string;
  type: ShapeType;
  color?: string;
  url?: string;
  description?: string;
  isMatched?: boolean;
  
  // МЕТРИКИ
  metric?: string; // Время
  cost?: string;   // Деньги
  note?: string;   // Примечание
  
  metricStatus?: MetricStatus;
}

export enum EdgePathType {
  SMOOTH_STEP = 'smoothstep',
  STRAIGHT = 'straight',
  BEZIER = 'default',
}

export enum EdgeStyleType {
  SOLID = 'solid',
  DASHED = 'dashed',
  DOTTED = 'dotted',
}

export interface EdgeData {
  label?: string;
  pathType?: EdgePathType;
  styleType?: EdgeStyleType;
  color?: string;
  animation?: AnimationType;
}

export enum AnimationType {
  NONE = 'none',
  SIGNAL = 'signal',
}

export interface DrawingPath {
  id: string;
  points: { x: number; y: number }[];
  color: string;
  strokeWidth: number;
}

export type AppNode = Node<NodeData>;
export type AppEdge = Edge<EdgeData>;