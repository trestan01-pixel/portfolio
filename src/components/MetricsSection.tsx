import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { TrendingUp, Target, FileCheck, Clock, Zap, Award, Users, Briefcase, BarChart3 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Tilt from './Tilt';

// --- АНИМАЦИЯ ЦИФР ---
const AnimatedValue = ({ valueStr }: { valueStr: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 60 });
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  if (!valueStr) return null;

  const match = valueStr.match(/^([^0-9.]*)([0-9.]+)(.*)$/);

  useEffect(() => {
    if (isInView && match) {
      const numberVal = parseFloat(match[2]);
      if (!isNaN(numberVal)) {
        motionValue.set(numberVal);
      }
    }
  }, [isInView, match, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current && match) {
        const prefix = match[1] || "";
        const suffix = match[3] || "";
        const isFloat = match[2].includes('.');
        const currentNumber = isFloat ? latest.toFixed(1) : latest.toFixed(0);
        ref.current.textContent = `${prefix}${currentNumber}${suffix}`;
      }
    });
  }, [springValue, match]);

  if (!match) return <span>{valueStr}</span>;
  return <span ref={ref} />;
};

// --- ИКОНКИ ---
const IconMap: Record<string, React.ElementType> = {
  TrendingUp, Target, FileCheck, Clock, Zap, Award, Users, Briefcase, BarChart3
};

interface MetricItem {
  value: string;
  label: string;
  description?: string;
  iconName?: string;
  company?: string;
}

interface MetricsProps {
  metrics?: MetricItem[] | null;
}

const MetricsSection: React.FC<MetricsProps> = ({ metrics }) => {
  
  // Жестко заданные компании
  const companies = [
    "Medion ",
    "Medion ",
    "Школьная Лига",
    "Karso"
  ];

  const defaultMetrics: MetricItem[] = [
    { value: "x3", label: "Рост оборота", description: "За 2 года работы", iconName: "TrendingUp" },
    { value: "2.2x", label: "Снижение CPL", description: "Оптимизация затрат", iconName: "Target" },
    { value: "30+", label: "Регламентов", description: "Создано процессов", iconName: "FileCheck" },
    { value: "до 97%", label: "Выполнение", description: "KPI команды", iconName: "Clock" },
  ];

  const rawItems = (metrics && Array.isArray(metrics) && metrics.length > 0) ? metrics : defaultMetrics;

  const itemsToRender = rawItems.map((item, index) => ({
    ...item,
    company: item.company || companies[index] || "Проект"
  }));

  return (
    <section id="stats" className="py-20 bg-[#0B0F19] relative overflow-hidden">
       {/* Фон оставил мягким, чтобы не мешал */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Результаты в цифрах" 
          subtitle="Каждая цифра — это результат системного подхода к управлению"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {itemsToRender.map((item, index) => {
            const IconComponent = (item.iconName && IconMap[item.iconName]) ? IconMap[item.iconName] : TrendingUp;

            return (
              <Tilt key={index} rotationFactor={5} isRevese>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  // КАРТОЧКА: Плотный цвет (bg-gray-900), четкая граница, без размытия
                  className="h-full p-6 rounded-2xl bg-[#111827] border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 group shadow-xl flex flex-col items-start"
                >
                  {/* Верхний ряд */}
                  <div className="flex justify-between items-start w-full mb-6">
                      <div className="bg-gray-800 p-3 rounded-lg w-fit group-hover:bg-blue-900/20 transition-colors border border-gray-700">
                        <IconComponent className="w-6 h-6 text-cyan-400 group-hover:text-blue-400 transition-colors" />
                      </div>

                      {/* КОМПАНИЯ: СИНИЙ ЦВЕТ */}
                      <div className="px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-sm">
                          {item.company}
                      </div>
                  </div>
                  
                  {/* Значение (Максимальная резкость и контраст) */}
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight tabular-nums">
                    <AnimatedValue valueStr={item.value || "0"} />
                  </div>
                  
                  {/* Заголовок */}
                  <div className="text-lg font-bold text-white mb-1">
                    {item.label}
                  </div>
                  
                  {/* Описание (Светло-серый для читаемости) */}
                  <div className="text-sm text-gray-400 font-medium">
                    {item.description}
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;