import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Layers, Zap, Users } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

// Интерфейсы можно упростить, так как переходим на Hardcoded Data
interface CompetenciesProps {
  skills?: any[]; // Оставляем проп, чтобы TypeScript не ругался в родительском файле, но игнорируем его
}

const CompetenciesSection: React.FC<CompetenciesProps> = () => {
  
  // ЖЕСТКАЯ КОНФИГУРАЦИЯ ДАННЫХ (игнорируем CMS для полного контроля)
  const columns = [
    {
      title: "Бизнес-архитектура",
      icon: <Layers className="w-10 h-10 text-cyan-400" />,
      color: "rgba(6, 182, 212, 0.15)",
      items: [
        "Построение операционных моделей", // Убрал комментарий про CJM
        "Проектирование процессов (BPMN)",
        "Стратегическое планирование",
        "SWOT-анализ и Due Diligence"
      ]
    },
    {
      title: "Цифровая трансформация",
      icon: <Zap className="w-10 h-10 text-purple-400" />,
      color: "rgba(168, 85, 247, 0.15)",
      items: [
        "BI-аналитика (Power BI)",
        "CRM-системы (amoCRM, Bitrix24)",
        "Автоматизация процессов",
        "Внедрение AI-решений"
      ]
    },
    {
      title: "Управление",
      icon: <Users className="w-10 h-10 text-blue-400" />,
      color: "rgba(59, 130, 246, 0.15)",
      items: [
        "Построение отделов с нуля",
        "Масштабирование бизнеса",
        "Разработка регламентов и KPI",
        "Снижение операционных расходов"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0B0F19] overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader title="Ключевые компетенции" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <SpotlightCard className="h-full p-8 group flex flex-col" color={col.color}>
                
                <div className="mb-6 p-4 bg-gray-900/50 rounded-xl inline-block border border-white/5 group-hover:border-white/10 transition-colors shadow-lg">
                  {col.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                  {col.title}
                </h3>
                
                <ul className="space-y-3 flex-grow">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 mt-2 bg-cyan-500 rounded-full flex-shrink-0 shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                      <span className="text-sm md:text-base leading-relaxed group-hover:text-gray-100 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;