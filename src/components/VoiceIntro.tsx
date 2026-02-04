import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const VoiceIntro: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="mt-8 mb-4 inline-flex items-center gap-4 bg-[#111827] border border-white/10 rounded-full p-2 pr-6 shadow-lg backdrop-blur-md hover:border-cyan-500/30 transition-colors group cursor-pointer">
      
      {/* Кнопка Play/Pause */}
      <button 
        type="button"
        aria-label={isPlaying ? "Пауза" : "Воспроизвести аудио-визитку"}
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-transform relative z-10"
      >
        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
      </button>

      {/* Аудио элемент (скрытый) */}
      <audio 
        ref={audioRef} 
        src="intro.mp3"  // <--- Важно: Слэш в начале
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <div className="flex flex-col gap-1 min-w-[140px]">
        <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                {isPlaying ? "Слушать интро" : "Аудио-визитка"}
            </span>
            {isPlaying && (
                <div className="flex gap-0.5 items-end h-3">
                    {[...Array(3)].map((_, i) => (
                        <motion.div 
                           key={i}
                           className="w-0.5 bg-cyan-500 rounded-full"
                           animate={{ height: [3, 8, 3] }}
                           transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )}
        </div>
        
        {/* Визуализация волны */}
        <div className="flex items-center gap-0.5 h-6 cursor-pointer" onClick={togglePlay}>
            {[...Array(24)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-1 rounded-full transition-colors duration-300"
                    style={{ 
                        backgroundColor: i / 24 * 100 < progress ? '#06b6d4' : '#374151' 
                    }}
                    initial={{ height: 4 }}
                    animate={{ 
                        height: isPlaying ? [6, Math.random() * 16 + 6, 6] : 6,
                    }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 0.5, 
                        delay: i * 0.05,
                        ease: "easeInOut" 
                    }}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceIntro;