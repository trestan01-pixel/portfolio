import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  rotationFactor?: number;
}

const Tilt: React.FC<TiltProps> = ({ children, className = "", rotationFactor = 15 }) => {
  const ref = useRef<HTMLDivElement>(null);

  // НАСТРОЙКИ НАКЛОНА В ПОКОЕ
  // 0.5 = Максимально возможный поворот вправо (100% от rotationFactor)
  // Это даст ровно 45 градусов, если rotationFactor=45.
  const initialX = 0.25; 
  const initialY = -0.1; 

  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [rotationFactor, -rotationFactor]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-rotationFactor, rotationFactor]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(0);
    y.set(0);
  };

  const handleMouseLeave = () => {
    // Возвращаем в состояние 45 градусов
    x.set(initialX);
    y.set(initialY);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-all will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Tilt;