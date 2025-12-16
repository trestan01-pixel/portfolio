// Файл: src/pages/BpmnVisualizerPage.tsx (ФИНАЛЬНАЯ ВЕРСИЯ С ФИКСОМ)

import React, { useCallback } from 'react';
import InteractiveMap from '../components/InteractiveMap';

const BpmnVisualizerPage = () => {

  // Эта функция будет перехватывать движение мыши над картой...
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // ...и создавать стандартное событие 'mousemove', которое ваш курсор УЖЕ умеет слушать.
    const forwardedEvent = new MouseEvent('mousemove', {
      bubbles: true,
      cancelable: true,
      clientX: e.clientX,
      clientY: e.clientY,
    });
    // Мы отправляем это событие в "эфир", и курсор его ловит.
    window.dispatchEvent(forwardedEvent);
  }, []);

  return (
    <main className="bg-[#050810] min-h-screen flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-7xl relative z-10 bg-[#090c15]/50 backdrop-blur-md border border-slate-800 rounded-xl shadow-2xl shadow-black/50 p-4">
        {/* Контейнер для карты и слоя-перехватчика */}
        <div className="relative">
          {/* Слой-перехватчик: он невидим, но ловит мышь */}
          <div
            className="absolute inset-0 z-20"
            onMouseMove={handleMouseMove}
          />
          {/* Сама карта находится под слоем */}
          <div className="relative z-10">
            <InteractiveMap />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BpmnVisualizerPage;