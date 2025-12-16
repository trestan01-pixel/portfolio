import React from 'react';

// Предполагаем, что картинка лежит в /src/assets/landing-full.png 
// (тебе нужно будет положить её туда или в public)

export const LandingPreview = () => {
  return (
    <div className="my-8">
      <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#05080f] shadow-2xl">
        
        {/* Browser Header */}
        <div className="h-8 bg-[#111827] border-b border-gray-800 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
            </div>
            <div className="ml-4 flex-1 flex justify-center">
                <div className="w-64 h-5 bg-[#0B0F19] rounded flex items-center justify-center text-[10px] text-gray-600 font-mono">
                    ruslan-yumagulov.com
                </div>
            </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent relative group">
            {/* Твоя картинка сайта */}
            {/* ВАЖНО: Замени путь на реальный, когда добавишь файл */}
            <img 
                src="landing-full.png" 
                alt="Product Landing Page" 
                className="w-full h-auto object-cover"
            />
            
            {/* Overlay hint */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-black/80 text-white px-4 py-2 rounded-full text-xs backdrop-blur-sm border border-white/10">
                    Scroll to view full page
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};