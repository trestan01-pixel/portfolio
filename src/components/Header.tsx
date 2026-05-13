import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import MagneticButton from './MagneticButton';
import SmartAvailability from './SmartAvailability';

// Конфигурация кнопок (текст меняется в зависимости от активной секции)
const ctaConfig: Record<string, string> = {
  'hero': 'Обсудить проект',
  'calculator': 'Остановить потери',
  'cases': 'Хочу результат',
  'services': 'Выбрать формат',
  'experience': 'Точки роста',
  'faq': 'Задать вопрос',
  'contact': 'Отправить заявку'
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 50);

      // Массив секций в порядке их появления на странице (Home.tsx) для подсветки
      const sections = ['hero', 'calculator', 'cases', 'services', 'experience', 'faq', 'contact'];
      const scrollPosition = scrollY + (window.innerHeight / 3);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- ОБНОВЛЕННЫЙ ПОРЯДОК МЕНЮ ---
  const navLinks = [
    { name: 'Калькулятор', href: '#calculator', id: 'calculator' },
    { name: 'Кейсы', href: '#cases', id: 'cases' },
    { name: 'Метод', href: '#services', id: 'services' },
    { name: 'Опыт', href: '#experience', id: 'experience' },
    { name: 'Вопросы', href: '#faq', id: 'faq' }, 
    { name: 'Игра', href: '/game/mainMenu.html', id: 'game', external: true },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentCtaText = ctaConfig[activeSection] || 'Обсудить проект';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto flex items-center justify-between gap-2 p-1 rounded-full border backdrop-blur-md bg-[#0B0F19]/90 border-white/10 shadow-lg w-[95%] md:w-auto max-w-6xl"
      >
        {/* LOGO */}
        <div className="flex items-center pl-1 pr-2">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }} className="block group">
                <img 
                  src="favicon1.png" 
                  alt="Logo" 
                  className="w-10 h-10 rounded-lg object-cover border border-white/10 group-hover:border-cyan-500/50 transition-colors shadow-md" 
                />
            </a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center bg-white/5 rounded-full px-1 py-0.5 border border-white/5">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative px-4 py-1.5 text-xs md:text-sm font-medium transition-colors rounded-full text-gray-400 hover:text-gray-200`}
                >
                  <span className="relative z-10">{link.name}</span>
                </a>
              ) : (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-1.5 text-xs md:text-sm font-medium transition-colors rounded-full ${
                  activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-inner"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            )))}
        </nav>

        {/* RIGHT: WIDGET & CTA */}
        <div className="flex items-center gap-2 pr-1">
             {/* Виджет доступности */}
             <div className="hidden 2xl:block scale-90 origin-right">
                <SmartAvailability mode="simulated" />
             </div>

             {/* CTA Button */}
             <MagneticButton 
               onClick={() => scrollTo('#contact')}
               className="relative overflow-hidden bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-2 rounded-full transition-all text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5 active:scale-95 min-w-[140px] flex justify-center items-center group"
             >
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence mode='wait'>
                    <motion.span
                      key={currentCtaText}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2 whitespace-nowrap"
                    >
                      <Zap size={14} className="fill-current" />
                      {currentCtaText}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="opacity-0 pointer-events-none whitespace-nowrap px-1 flex gap-2">
                  <Zap size={14} /> {currentCtaText}
                </span>
             </MagneticButton>

             {/* Mobile Burger */}
             <button className="xl:hidden p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors ml-1" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed inset-x-4 top-20 p-4 bg-[#111827]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-40 xl:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-center mb-4 lg:hidden">
                 <SmartAvailability mode="simulated" className="w-full justify-center" />
              </div>
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left px-4 py-3 rounded-xl transition-all text-gray-300 hover:bg-white/5"
                  >
                    {link.name}
                  </a>
                ) : (
                <button 
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                    activeSection === link.id 
                      ? 'bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/20' 
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;