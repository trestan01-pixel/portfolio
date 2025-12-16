import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Zap } from 'lucide-react';

export const BpmnFlowDemo = () => {
  const [isFlowing, setIsFlowing] = useState(false);

  const triggerFlow = () => {
    setIsFlowing(true);
    setTimeout(() => setIsFlowing(false), 2000); // Сброс через 2 сек
  };

  return (
    <div className="my-8 p-10 bg-[#080c14] border border-gray-800 rounded-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] select-none">
      
      {/* ФОНОВАЯ СЕТКА */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="relative z-10 flex items-center gap-24 w-full justify-center">
        
        {/* NODE A (START) */}
        <div className="relative group">
            <div className="w-40 p-4 bg-[#111827] border border-[#22d3ee] rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.2)] flex flex-col items-center gap-2 z-20 relative">
                <div className="w-8 h-8 rounded bg-[#22d3ee]/20 flex items-center justify-center text-[#22d3ee]">
                    <Database size={16} />
                </div>
                <div className="text-xs font-mono text-gray-400">DATA_SOURCE</div>
                <div className="text-sm font-bold text-white">Входящий лид</div>
                
                {/* Порт выхода */}
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#22d3ee] rounded-full border-2 border-[#0B0F19]" />
            </div>
        </div>

        {/* CONNECTION LINE (SVG) */}
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-24 h-1 bg-gray-800 overflow-visible">
            {/* Линия */}
            <div className="absolute inset-x-0 top-0 h-full bg-gray-800 rounded-full" />
            
            {/* Бегущий сигнал */}
            {isFlowing && (
                <motion.div 
                    initial={{ left: '0%' }}
                    animate={{ left: '100%' }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#22d3ee] rounded-full shadow-[0_0_15px_#22d3ee] z-30"
                />
            )}
        </div>

        {/* NODE B (END) */}
        <div className="relative">
             <div className={`w-40 p-4 border rounded-lg flex flex-col items-center gap-2 z-20 relative transition-all duration-300 ${isFlowing ? 'bg-[#22d3ee]/10 border-[#22d3ee] shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'bg-[#111827] border-gray-700'}`}>
                <div className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${isFlowing ? 'bg-[#22d3ee] text-black' : 'bg-gray-800 text-gray-500'}`}>
                    <Zap size={16} fill={isFlowing ? "currentColor" : "none"} />
                </div>
                <div className="text-xs font-mono text-gray-400">ACTION</div>
                <div className="text-sm font-bold text-white">Создать сделку</div>

                {/* Порт входа */}
                <div className={`absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[#0B0F19] transition-colors ${isFlowing ? 'bg-[#22d3ee]' : 'bg-gray-600'}`} />
            </div>
        </div>

      </div>

      {/* КНОПКА ЗАПУСКА */}
      <div className="mt-12 z-10">
        <button 
            onClick={triggerFlow}
            disabled={isFlowing}
            className="flex items-center gap-2 px-6 py-2 bg-[#22d3ee] text-black font-bold rounded hover:bg-white hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
        >
            {isFlowing ? 'Processing...' : 'Simulate Signal'} <ArrowRight size={16} />
        </button>
      </div>

    </div>
  );
};