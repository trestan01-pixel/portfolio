import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ChaosToSystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Состояние, которое показывает, активна ли сейчас анимация (показываем overlay)
  const [isAnimating, setIsAnimating] = useState(false);
  // Состояние, которое полностью удаляет компонент со страницы после завершения
  const [hasCompleted, setHasCompleted] = useState(false);
  const progress = useMotionValue(0);

  const handlePlayAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true); // Запускаем полноэкранный режим
    document.body.style.overflow = 'hidden'; // Блокируем скролл

    animate(progress, 1, {
      duration: 10,
      ease: "easeInOut",
      onComplete: () => {
        document.body.style.overflow = ''; // Возвращаем скролл
        setIsAnimating(false); // Закрываем overlay
        setHasCompleted(true); // Говорим компоненту, что он может исчезнуть навсегда
      },
    });
  };

  useEffect(() => {
    if (!isAnimating) return; // Логика canvas работает только в режиме анимации
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let particles: any[] = [];
    let animationFrameId: number;

    const getTextParticles = (text: string, color: string) => {
      const textParticles = [];
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return [];
      const scale = window.devicePixelRatio || 1;
      const fontSize = 80;
      tempCanvas.width = window.innerWidth * scale;
      tempCanvas.height = window.innerHeight * scale;
      tempCtx.scale(scale, scale);
      tempCtx.fillStyle = 'white';
      tempCtx.font = `bold ${fontSize}px monospace`;
      tempCtx.textAlign = 'center';
      tempCtx.textBaseline = 'middle';
      tempCtx.fillText(text, window.innerWidth / 2, window.innerHeight / 2);
      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      const density = 4;
      for (let y = 0; y < imageData.height; y += density) {
        for (let x = 0; x < imageData.width; x += density) {
          if (imageData.data[(y * imageData.width + x) * 4 + 3] > 128) {
            textParticles.push({ x: x / scale, y: y / scale, color });
          }
        }
      }
      return textParticles;
    };

    const init = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        const chaosPoints = getTextParticles('ХАОС', 'rgb(239, 68, 68)');
        const systemPoints = getTextParticles('СИСТЕМА', 'rgb(34, 211, 238)');
        const numPoints = Math.max(chaosPoints.length, systemPoints.length);
        for (let i = 0; i < numPoints; i++) {
            const chaosP = chaosPoints[i % chaosPoints.length];
            const systemP = systemPoints[i % systemPoints.length];
            particles.push({
                startX: chaosP.x, startY: chaosP.y,
                endX: systemP.x, endY: systemP.y,
                midX: Math.random() * canvas.width, midY: Math.random() * canvas.height,
                colorStart: chaosP.color, colorEnd: systemP.color
            });
        }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const render = () => {
      ctx.fillStyle = '#0B0F19';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const currentProgress = progress.get();
      particles.forEach(p => {
        let currentX, currentY, color;
        if (currentProgress < 0.5) {
          const phaseProgress = currentProgress * 2;
          currentX = lerp(p.startX, p.midX, phaseProgress);
          currentY = lerp(p.startY, p.midY, phaseProgress);
          color = p.colorStart;
        } else {
          const phaseProgress = (currentProgress - 0.5) * 2;
          currentX = lerp(p.midX, p.endX, phaseProgress);
          currentY = lerp(p.midY, p.endY, phaseProgress);
          color = p.colorEnd;
        }
        ctx.fillStyle = color;
        ctx.fillRect(currentX, currentY, 2, 2);
      });
      animationFrameId = requestAnimationFrame(render);
    };

    init();
    render();
    window.addEventListener('resize', init);
    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAnimating]);

  return (
    <AnimatePresence>
      {!hasCompleted && (
        <motion.div 
            className="py-12 flex justify-center items-center"
            exit={{ scale: 0.8, opacity: 0 }}
        >
          {/* --- ЭТО БЛОК-КНОПКА, КОТОРЫЙ ВИДЕН НА СТРАНИЦЕ --- */}
          <button
            onClick={handlePlayAnimation}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gray-800 bg-[#111827] px-8 py-3 font-medium text-gray-300 transition-all duration-300 hover:border-cyan-500/50 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            <Sparkles className="mr-3 h-5 w-5 text-cyan-500 transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-125" />
            Визуализировать решение
          </button>

          {/* --- ЭТО ПОЛНОЭКРАННАЯ АНИМАЦИЯ, КОТОРАЯ ПОЯВЛЯЕТСЯ ПО КЛИКУ --- */}
          <AnimatePresence>
            {isAnimating && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-50 bg-[#0B0F19]"
              >
                <canvas ref={canvasRef} className="h-full w-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChaosToSystem;