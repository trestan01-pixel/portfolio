import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Terminal, AlertTriangle } from 'lucide-react';
import CustomCursor from '../components/CustomCursor'; // <--- 1. ИМПОРТ

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0F19] flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
      
      <CustomCursor /> {/* <--- 2. ВСТАВИТЬ СЮДА */}

      {/* Background Grid with Glitch Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Animated 404 Number */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h1 className="text-[120px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 leading-none select-none">
            404
          </h1>
          
          {/* Glitch Layer Red */}
          <motion.h1 
            className="text-[120px] md:text-[200px] font-black text-red-500 absolute top-0 left-0 opacity-50 mix-blend-screen pointer-events-none leading-none"
            animate={{ 
              x: [0, -5, 5, -2, 0],
              opacity: [0, 0.5, 0, 0.2, 0]
            }}
            transition={{ repeat: Infinity, duration: 2, times: [0, 0.1, 0.2, 0.3, 1] }}
          >
            404
          </motion.h1>

          {/* Glitch Layer Cyan */}
          <motion.h1 
            className="text-[120px] md:text-[200px] font-black text-cyan-500 absolute top-0 left-0 opacity-50 mix-blend-screen pointer-events-none leading-none"
            animate={{ 
              x: [0, 5, -5, 2, 0],
              opacity: [0, 0.5, 0, 0.2, 0]
            }}
            transition={{ repeat: Infinity, duration: 2.5, times: [0, 0.1, 0.2, 0.3, 1] }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Terminal Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-[#111827] border border-gray-700 rounded-lg p-6 max-w-md mx-auto shadow-2xl relative overflow-hidden text-left"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
            <Terminal size={16} className="text-red-400" />
            <span className="text-xs font-mono text-gray-400">system_log.txt</span>
          </div>
          <div className="font-mono text-sm space-y-2">
            <p className="text-gray-500"> &gt; Initiating search protocol...</p>
            <p className="text-gray-500"> &gt; Scanning directory /pages...</p>
            <p className="text-red-400 flex items-center gap-2"> 
              <AlertTriangle size={14} /> 
              Error: Path segment not found.
            </p>
            <p className="text-cyan-400 animate-pulse"> &gt; Waiting for user input_</p>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center"
        >
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-none" // cursor-none добавил на всякий случай, если кнопка перебивает
            >
              <Home size={20} />
              Вернуться на главную
            </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;