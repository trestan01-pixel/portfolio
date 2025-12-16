import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Uber', color: 'text-white' },
  { name: 'Yandex', color: 'text-red-500' },
  { name: 'SberAuto', color: 'text-green-500' },
  { name: 'Drom.ru', color: 'text-red-600' },
  { name: 'Medion', color: 'text-blue-500' },
  { name: 'Mango Office', color: 'text-orange-500' },
  { name: 'Skolkovo', color: 'text-blue-400' },
  { name: 'Школьная Лига', color: 'text-cyan-400' },
];

const LogoMarquee: React.FC = () => {
  return (
    <div className="w-full py-10 bg-[#0B0F19] border-y border-gray-800/50 overflow-hidden relative z-20">
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#0B0F19] to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#0B0F19] to-transparent z-10" />

      <div className="flex">
        {/* Создаем 4 копии списка, которые едут паровозиком */}
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 30, // Чем больше число, тем медленнее скорость
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-16 items-center whitespace-nowrap pr-16 flex-shrink-0"
          >
            {logos.map((logo, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center"
              >
                <span className={`text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity cursor-default ${logo.color}`}>
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;