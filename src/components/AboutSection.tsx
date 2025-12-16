import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { urlFor } from '../sanityClient';
import VoiceIntro from './VoiceIntro';
import Tilt from './Tilt'; 
import localAvatar from '../assets/ruslan.png';

interface AboutProps {
  data?: {
    aboutImage?: any;
    aboutHighlights?: string[];
  } | null;
  onThemeChange?: (theme: 'default' | 'matrix' | 'white') => void;
  currentTheme?: 'default' | 'matrix' | 'white';
}

const AboutSection: React.FC<AboutProps> = ({ data, onThemeChange, currentTheme = 'default' }) => {
  const navigate = useNavigate();
  const [clicks15, setClicks15] = useState(0); // Оставил логику "секрета" на цифре 7
  const [clicks8, setClicks8] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const [imgSrc, setImgSrc] = useState<string>(
    data?.aboutImage 
      ? urlFor(data.aboutImage).width(400).height(400).url() 
      : localAvatar
  );

  // Обновленный список достижений
  const highlights = [
    "Провел due diligence и оценку 100+ инвестиционных проектов на общую сумму более 1.5 млрд рублей, отсеивая до 80% рискованных или бесперспективных на входе.",
    "Освободил 20+ часов в неделю собственникам (выход из рутины)",
    "Системный рост прибыли x2.2 за счет управленческого учета",
    "Автоматизация 40% рутины (AI и No-code решения)"
  ];

  // Иконки списка (акцент на фиолетовый)
  const getIconColor = (index: number) => {
    switch(index) {
        case 0: return "text-cyan-400";
        case 1: return "text-purple-400";
        case 2: return "text-fuchsia-400"; // Немного изменил для разнообразия
        case 3: return "text-indigo-400";
        default: return "text-cyan-400";
    }
  };

  const getIconBg = (index: number) => {
    switch(index) {
        case 0: return "bg-cyan-400/10";
        case 1: return "bg-purple-400/10";
        case 2: return "bg-fuchsia-400/10";
        case 3: return "bg-indigo-400/10";
        default: return "bg-cyan-400/10";
    }
  };

  const handleThemeClick = () => {
    setClicks8(prev => {
        if (prev + 1 >= 5) {
            onThemeChange?.(currentTheme === 'matrix' ? 'default' : 'matrix');
            return 0;
        }
        return prev + 1;
    });
  };

  const handleSecretClick = () => {
    const newCount = clicks15 + 1;
    setClicks15(newCount);
    if (newCount >= 5) {
       navigate('/404');
       setClicks15(0);
    }
  };

  // --- КАРТОЧКА ---
  const CardContent = (
    <div className="group relative overflow-hidden rounded-[2rem] p-8 shadow-2xl h-full flex flex-col justify-center transition-all duration-500 border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_50px_-10px_rgba(6,182,212,0.5)]">
        
        {/* 1. БАЗОВЫЙ ФОН: Глубокий Фиолетовый (Base State) */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-purple-800 to-indigo-950 transition-opacity duration-500 group-hover:opacity-0" />
        
        {/* 2. HOVER ФОН: Голубой смешивается с Фиолетовым (Hover State) */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-600 to-indigo-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Шум/Текстура */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Блики (Анимируются при наведении) */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400/20 blur-[100px] rounded-full pointer-events-none mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/40 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/60 transition-colors duration-500" />

        <div className="relative z-10">
            {/* Верхняя часть: Аватар + Текст */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 text-center md:text-left">
                
                {/* Аватар */}
                <div className="relative shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:border-cyan-400/50 transition-colors duration-500 shadow-xl">
                        <img 
                        src={imgSrc} 
                        alt="Руслан Юмагулов" 
                        className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </div>

                {/* Имя и Роль */}
                <div className="flex flex-col justify-center pt-2 w-full">
                    <div className="flex justify-between items-start w-full">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-md group-hover:text-cyan-50 transition-colors duration-300">
                                Руслан Юмагулов
                            </h3>
                            <p className="text-purple-100 font-bold text-lg tracking-wide group-hover:text-cyan-100 transition-colors duration-300">
                                Fractional COO
                            </p>
                            <p className="text-white/60 text-xs uppercase tracking-wider mt-1">
                                Операционный директор по найму
                            </p>
                        </div>
                        
                        {/* Badge SYSTEMS */}
                        <span className="hidden md:block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30 transition-all duration-300">
                            SYSTEMS
                        </span>
                    </div>
                </div>
            </div>

            {/* Нижняя часть: Статистика */}
            <div className="grid grid-cols-2 gap-4">
                <div 
                    onClick={(e) => { e.stopPropagation(); handleThemeClick(); }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-white/20 transition-all cursor-pointer active:scale-95 shadow-inner group-hover:border-cyan-400/20"
                >
                    <span className="text-2xl md:text-3xl font-bold text-white mb-1">8+</span>
                    <span className="text-[10px] md:text-xs text-white/70 uppercase font-bold tracking-wider group-hover:text-cyan-100">Лет опыта</span>
                </div>
                
                <div 
                    onClick={(e) => { e.stopPropagation(); handleSecretClick(); }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-white/20 transition-all cursor-pointer active:scale-95 shadow-inner group-hover:border-cyan-400/20"
                >
                    <span className="text-2xl md:text-3xl font-bold text-white mb-1">7</span>
                    <span className="text-[10px] md:text-xs text-center text-white/70 uppercase font-bold tracking-wider group-hover:text-cyan-100">
                        Полных трансформаций
                    </span>
                </div>
            </div>
        </div>

        {/* Badge Mobile (Absolute) */}
        <div className="md:hidden absolute top-6 right-6">
             <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold tracking-wider uppercase">
                SYSTEMS
            </span>
        </div>
    </div>
  );

  return (
    <section id="about" className="py-24 bg-[#0B0F19] text-white relative overflow-hidden">
      {/* Background ambient light - Purple/Violet */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-purple-900/10 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Левая часть: Текст */}
          <motion.div
             className="lg:col-span-5"
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            {/* Линия над заголовком (Purple) */}
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mb-8"></div>

            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Не просто консультант. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Ваш играющий тренер
                </span> <br/>
                по выходу из хаоса.
              </h3>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
                За <strong>8+ лет</strong> я проанализировал более <strong>100 бизнес-моделей</strong> и провел <strong>7 полных трансформаций</strong> компаний — от хаоса до управляемой системы. Вот ключевые результаты моей работы:
            </p>

            <div className="space-y-5 mb-8 leading-relaxed text-lg">
              <ul className="space-y-4 pl-0">
                {highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className={`mt-1 p-1 rounded-full transition-colors ${getIconBg(index)}`}>
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${getIconColor(index)}`} />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors text-base font-medium">
                        {item.split(/(\d+%?|\d+\+|x[\d\.]+)/g).map((part, i) => 
                          (part.match(/(\d+%?|\d+\+|x[\d\.]+)/) ? <span key={i} className="text-white font-bold">{part}</span> : part)
                        )}
                      </span>
                    </li>
                ))}
              </ul>
              
              <div className="pt-6">
                  <VoiceIntro />
              </div>
            </div>
          </motion.div>

          {/* Правая часть: Карточка */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end perspective-1000">
             <motion.div
                 initial={{ opacity: 0, scale: 0.9, rotateY: -10 }} 
                 whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, type: "spring" }}
                 className="relative z-10 w-full max-w-2xl"
             >
                {isMobile ? (
                   <div className="w-full">{CardContent}</div>
                ) : (
                   <Tilt rotationFactor={15} isRevese className="w-full">{CardContent}</Tilt>
                )}
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;