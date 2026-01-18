import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

type CursorType = 'default' | 'pointer' | 'text';

const CustomCursor: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [isVisible, setIsVisible] = useState(false);
  
  // --- КЛЮЧЕВОЕ ИЗМЕНЕНИЕ 1: СКОРОСТЬ ---
  // Убираем useSpring. Теперь используем useMotionValue напрямую.
  // Это гарантирует НУЛЕВУЮ задержку.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);

      if (
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        computedStyle.cursor === 'text'
      ) {
        setCursorType('text');
        return;
      }

      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.closest('[role="button"]') ||
        computedStyle.cursor === 'pointer';

      if (isClickable) {
        setCursorType('pointer');
        return;
      }
      
      setCursorType('default');
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (prefersReducedMotion) return null;
  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null;

  return (
    // Применяем сырые значения mouseX и mouseY для мгновенной реакции
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100000]"
      style={{ x: mouseX, y: mouseY, opacity: isVisible ? 1 : 0 }}
    >
      <div className="relative drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
        
        <AnimatePresence mode="wait">
          
          {/* 1. DEFAULT CURSOR */}
          {cursorType === 'default' && (
            <motion.svg
              key="default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              width="24" height="24" viewBox="0 0 24 24" fill="none"
              // --- КЛЮЧЕВОЕ ИЗМЕНЕНИЕ 2: ПРИЦЕЛИВАНИЕ ---
              // Точная коррекция, чтобы острие (координаты 3,3 в SVG) было под курсором
              style={{ x: -3, y: -3 }}
              className="rotate-[-15deg]"
            >
              <path 
                d="M3 3L10.5 20.5L13.5 13.5L20.5 10.5L3 3Z" 
                fill="#0B0F19"
                stroke="#22d3ee" 
                strokeWidth="1.5" 
                strokeLinejoin="round"
              />
            </motion.svg>
          )}

          {/* 2. POINTER CURSOR */}
          {cursorType === 'pointer' && (
            <motion.div
                key="pointer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
                className="relative"
                // Коррекция для "pointer" курсора (острие в 6,4)
                style={{ x: -6, y: -4 }}
            >
                <motion.svg 
                    width="48" height="48" viewBox="0 0 48 48" fill="none"
                    className="absolute -top-3 -left-3"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                    <circle cx="24" cy="24" r="22" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 10" />
                </motion.svg>
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                    <path 
                        d="M6 4L14 26L17 17L26 14L6 4Z" 
                        fill="rgba(6,182,212, 0.2)" 
                        stroke="#22d3ee" 
                        strokeWidth="2" 
                        strokeLinejoin="round"
                        className="drop-shadow-[0_0_5px_#22d3ee]"
                    />
                    <path d="M17 17L24 24" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.6" />
                </svg>
            </motion.div>
          )}

          {/* 3. TEXT CURSOR (он должен быть по центру) */}
          {cursorType === 'text' && (
            <motion.div
              key="text"
              initial={{ opacity: 0, scaleY: 0.5 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0.5 }}
              transition={{ duration: 0.1 }}
              className="-translate-x-1/2 -translate-y-1/2" // Центрируем I-beam
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 4V20" stroke="#22d3ee" strokeWidth="2" />
                <path d="M8 4H16" stroke="#22d3ee" strokeWidth="2" />
                <path d="M8 20H16" stroke="#22d3ee" strokeWidth="2" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CustomCursor;