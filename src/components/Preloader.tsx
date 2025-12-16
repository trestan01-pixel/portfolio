import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("INITIALIZING SYSTEM...");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 400);

    const loadSequence = async () => {
      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      await delay(300); setProgress(12); setText("LOADING CORE MODULES...");
      await delay(500); setProgress(28);
      await delay(200); setProgress(45); setText("OPTIMIZING ASSETS...");
      await delay(400); setProgress(87); setText("ESTABLISHING UPLINK...");
      await delay(600); setProgress(100); setText("ACCESS GRANTED");
      await delay(600);
      if (onComplete) onComplete();
    };

    loadSequence();
    return () => clearInterval(cursorInterval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
      className="fixed inset-0 z-[9999] bg-[#0B0F19] flex flex-col items-center justify-center font-mono"
    >
      <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
        className="w-full max-w-[400px] px-4 space-y-6 relative"
      >
        <div className="flex items-center justify-start text-cyan-500 text-xs md:text-sm tracking-widest h-6 w-full font-mono overflow-hidden whitespace-nowrap">
          <span className="text-cyan-300 mr-3 shrink-0">root@system:~$</span> 
          <span className="mr-3 truncate">{text}</span>
          <span className="font-bold text-white/90 shrink-0">[{Math.min(progress, 100)}%]</span>
          {showCursor && <span className="w-2 h-4 bg-cyan-500 block ml-2" />}
        </div>
        <div className="h-1 w-full bg-gray-800/50 overflow-hidden border-b border-gray-800">
          <motion.div
            className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] relative"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "circOut", duration: 0.3 }}
          >
             <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/50 skew-x-[-20deg]" />
          </motion.div>
        </div>
        <div className="flex justify-between text-[9px] text-gray-600 uppercase tracking-wider px-1">
          <span>Memory: 64TB OK</span>
          <span>Security: Encrypted</span>
        </div>
      </motion.div>
      <motion.div 
        exit={{ opacity: 0 }}
        className="absolute bottom-10 text-gray-700 text-[10px] uppercase tracking-[0.2em]"
      >
        Ruslan Yumagulov Architecture v2.0
      </motion.div>
    </motion.div>
  );
};

export default Preloader;