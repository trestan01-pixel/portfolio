import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ClipboardCheck, FileBarChart, Bot, TrendingUp, Layers, Database, Zap, Mouse } from 'lucide-react';
import Background3D from './Background3D';
import MagneticButton from './MagneticButton';

interface HeroProps {
  data?: {
    heroTitle?: string;
    heroSubtitle?: string;
  } | null;
}

// Эффект "Хаос", собирающийся в порядок
const ChaosText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(" ");
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.02, delayChildren: 0.2 } }
  };
  const letterVariants: Variants = {
    hidden: () => ({ x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 50, filter: "blur(8px)", opacity: 0 }),
    visible: { x: 0, y: 0, filter: "blur(0px)", opacity: 1, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  return (
    <motion.div className={`flex flex-wrap justify-center gap-x-2 md:gap-x-3 gap-y-1 ${className}`} variants={container} initial="hidden" animate="visible">
      {words.map((word, i) => (
        <span key={i} className="whitespace-nowrap inline-block">
          {word.split("").map((char, j) => (
            <motion.span key={j} variants={letterVariants} className="inline-block">{char}</motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

interface NeonCardProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  className?: string;
  delay: number;
}

// Летающие иконки С ЛОГИКОЙ "ИСЧЕЗНУТЬ -> ПОЯВИТЬСЯ"
const NeonIconCard = ({ icon, label, color, className, delay }: NeonCardProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false); // Скрываем
    setTimeout(() => {
      setIsVisible(true); // Возвращаем через 1.5 секунды
    }, 1500);
  };

  const colorMap: Record<string, { glow: string, border: string, text: string, iconColor: string }> = {
    cyan: { glow: 'bg-cyan-500', border: 'border-cyan-500/30 group-hover:border-cyan-400', text: 'text-cyan-400', iconColor: 'text-cyan-400' },
    purple: { glow: 'bg-purple-500', border: 'border-purple-500/30 group-hover:border-purple-400', text: 'text-purple-400', iconColor: 'text-purple-400' },
    blue: { glow: 'bg-blue-500', border: 'border-blue-500/30 group-hover:border-blue-400', text: 'text-blue-400', iconColor: 'text-blue-400' },
    green: { glow: 'bg-emerald-500', border: 'border-emerald-500/30 group-hover:border-emerald-400', text: 'text-emerald-400', iconColor: 'text-emerald-400' },
    indigo: { glow: 'bg-indigo-500', border: 'border-indigo-500/30 group-hover:border-indigo-400', text: 'text-indigo-400', iconColor: 'text-indigo-400' },
  };
  const theme = colorMap[color] || colorMap.cyan;

  return (
    <div className={`absolute hidden xl:flex flex-col items-center z-20 ${className}`}>
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }} // Эффект исчезновения
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0 }} // delay 0 чтобы исчезало мгновенно
                    onClick={handleClick}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
                        transition={{ duration: 5 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                        className="relative group cursor-pointer"
                    >
                        <div className={`absolute inset-0 ${theme.glow} blur-[40px] opacity-20 group-hover:opacity-50 transition-opacity duration-500`} />
                        <div className={`relative w-20 h-20 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F19] rounded-2xl border ${theme.border} shadow-2xl flex items-center justify-center transition-colors hover:scale-105`}>
                            <div className={`${theme.iconColor} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>{icon}</div>
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#0B0F19]/80 backdrop-blur-md px-3 py-1 rounded-full border border-gray-800 text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                            {label}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};

const HeroSection: React.FC<HeroProps> = ({ data }) => {
  // Функция плавного скролла
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Элемент с id="${id}" не найден. Проверьте правильность ID в компонентах.`);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F19] pt-20 pb-10">
      
      {/* Backgrounds */}
      <Background3D />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center relative">
            
            {/* Floating Tech Icons */}
            <NeonIconCard icon={<Bot size={36} />} label="AI Systems" color="cyan" className="-top-20 -left-4" delay={0.2} />
            <NeonIconCard icon={<TrendingUp size={36} />} label="Profit Growth" color="green" className="-top-16 -right-4" delay={0.4} />
            <NeonIconCard icon={<Layers size={36} />} label="Architecture" color="indigo" className="bottom-0 -left-10" delay={0.6} />
            <NeonIconCard icon={<Database size={36} />} label="Analytics" color="blue" className="bottom-8 -right-10" delay={0.8} />
            <NeonIconCard icon={<Zap size={36} />} label="Automation" color="purple" className="top-32 -left-24" delay={1.0} />

            {/* 1. TAGLINE (BADGE) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs md:text-sm font-bold tracking-widest mb-8"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                BUSINESS ARCHITECT | FRACTIONAL COO
            </motion.div>

            {/* 2. HEADLINE (OFFER) */}
            <h1 className="font-bold text-white mb-6 tracking-tight leading-tight">
                <div className="text-4xl md:text-5xl lg:text-7xl mb-2 md:mb-4">
                   <ChaosText text="ВАШ БИЗНЕС ТЕРЯЕТ ДЕНЬГИ" />
                </div>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 block text-3xl md:text-5xl lg:text-7xl mt-4 drop-shadow-sm"
                >
                    Я УСТРАНЯЮ ХАОС → РОСТ X3
                </motion.span>
            </h1>

            {/* 3. PUNCHLINE (Ударная фраза) */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.4 }}
               className="mb-8"
            >
                <p className="text-cyan-200/80 font-medium text-lg md:text-xl italic">
                  Помогаю собственникам перестать «тушить пожары» и вернуть контроль над бизнесом.
                </p>
            </motion.div>

            {/* 4. DESCRIPTION (Диагноз) */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="text-base md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed border-t border-b border-white/5 py-6"
            >
                80% бизнес-проблем — это следствие отсутствия системы: нет CRM, нет регламентов, нет прозрачных метрик. Я нахожу эти «узкие места» и собираю управляемую операционную модель. <br/>
                <span className="text-white mt-2 block opacity-80">Без тренингов. Только внедрение руками и измеримый результат.</span>
            </motion.p>

            {/* 5. CTA BUTTONS */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
                {/* Основная кнопка - ВЕДЕТ НА CONTACT */}
                <MagneticButton onClick={() => scrollTo('contact')}>
                    <div className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] cursor-pointer w-full sm:w-auto">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                           <ClipboardCheck size={20} />
                           Получить план устранения хаоса
                        </span>
                    </div>
                </MagneticButton>

                {/* Вторичная кнопка - ВЕДЕТ НА CASES */}
                <MagneticButton onClick={() => scrollTo('cases')}>
                    <button 
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                        <FileBarChart size={20} className="text-gray-400 group-hover:text-white" />
                        Смотреть кейсы
                    </button>
                </MagneticButton>
            </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-600 flex flex-col items-center gap-2 z-20"
        >
            <span className="text-[10px] uppercase tracking-widest opacity-70">Листайте вниз</span>
            <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <Mouse size={20} />
            </motion.div>
        </motion.div>
    </section>
  );
};

export default HeroSection;