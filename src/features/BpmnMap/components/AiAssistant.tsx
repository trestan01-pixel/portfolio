import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mic, Send, Loader2, Sparkles } from 'lucide-react';
import { COLORS } from '../constants';
import { AppNode, AppEdge, ShapeType } from '../types';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (nodes: AppNode[], edges: AppEdge[]) => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose, onGenerate }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // Фейковый генератор (Hardcoded Demo)
  const handleGenerateClick = () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);

    // Имитируем задержку "мышления" (2 секунды)
    setTimeout(() => {
      // Заранее подготовленная красивая схема
      const demoNodes: AppNode[] = [
        { id: '1', type: 'customShape', position: { x: 0, y: 100 }, data: { label: 'Заявка с сайта', type: ShapeType.CIRCLE, color: COLORS.green } },
        { id: '2', type: 'customShape', position: { x: 250, y: 100 }, data: { label: 'CRM Система', type: ShapeType.RECTANGLE, color: COLORS.cyan } },
        { id: '3', type: 'customShape', position: { x: 500, y: 100 }, data: { label: 'Менеджер свободен?', type: ShapeType.DIAMOND, color: COLORS.purple } },
        { id: '4', type: 'customShape', position: { x: 750, y: 0 }, data: { label: 'Звонок клиенту', type: ShapeType.RECTANGLE, color: COLORS.cyan } },
        { id: '5', type: 'customShape', position: { x: 750, y: 200 }, data: { label: 'Отправить SMS', type: ShapeType.RECTANGLE, color: COLORS.red } },
        { id: '6', type: 'customShape', position: { x: 1000, y: 100 }, data: { label: 'Успешная сделка', type: ShapeType.CIRCLE, color: COLORS.green } },
      ];

      const demoEdges: AppEdge[] = [
        { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true, style: { stroke: 'url(#edge-gradient)', strokeWidth: 3 }, markerEnd: 'edge-arrow' },
        { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', animated: true, style: { stroke: 'url(#edge-gradient)', strokeWidth: 3 }, markerEnd: 'edge-arrow' },
        { id: 'e3-4', source: '3', target: '4', label: 'Да', type: 'smoothstep', animated: true, style: { stroke: 'url(#edge-gradient)', strokeWidth: 3 }, markerEnd: 'edge-arrow' },
        { id: 'e3-5', source: '3', target: '5', label: 'Нет', type: 'smoothstep', animated: true, style: { stroke: 'url(#edge-gradient)', strokeWidth: 3 }, markerEnd: 'edge-arrow' },
        { id: 'e4-6', source: '4', target: '6', type: 'smoothstep', animated: true, style: { stroke: 'url(#edge-gradient)', strokeWidth: 3 }, markerEnd: 'edge-arrow' },
        { id: 'e5-6', source: '5', target: '6', type: 'smoothstep', animated: true, style: { stroke: 'url(#edge-gradient)', strokeWidth: 3 }, markerEnd: 'edge-arrow' },
      ];

      onGenerate(demoNodes, demoEdges);
      setIsLoading(false);
      onClose();
    }, 2000); 
  };
  
  // Фейковый голосовой ввод (просто пишет текст)
  const handleVoiceInput = () => {
    setIsListening(true);
    setTimeout(() => {
        setPrompt("Обработка входящего лида через CRM с проверкой доступности менеджера...");
        setIsListening(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-lg bg-[#0B0F19] border border-cyan-500/30 rounded-2xl shadow-2xl p-6 flex flex-col font-sans relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <Sparkles className="text-cyan-400" size={20} />
                <h2 className="text-xl font-bold text-white">AI Архитектор (Demo)</h2>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-white transition"><X /></button>
            </div>
            
            <div className="relative mb-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Опишите процесс, и я построю схему..."
                className="w-full h-32 bg-[#161b27] border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none text-sm"
                disabled={isLoading}
              />
              <button 
                onClick={handleVoiceInput}
                className={`absolute bottom-3 right-3 p-2 rounded-lg transition-all ${isListening ? 'bg-cyan-500/20 text-cyan-400 animate-pulse' : 'bg-slate-800 text-gray-400 hover:text-white'}`}
              >
                  <Mic size={18}/>
              </button>
            </div>
            
            <button
              onClick={handleGenerateClick}
              disabled={isLoading || !prompt.trim()}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl transition-all disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />} 
              {isLoading ? 'Генерирую схему...' : 'Создать'}
            </button>
          </motion.div>
        </motion.div>
    </AnimatePresence>
  );
};