import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Settings, Rocket, Zap, Target } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Маппинг иконок из строки Sanity в компонент Lucide
const IconMap: Record<string, React.ElementType> = {
  Search, Compass, Settings, Rocket, Zap, Target
};

const defaultSteps = [
  { id: '01', title: 'Аудит', description: 'Поиск узких мест.', iconName: 'Search' },
  { id: '02', title: 'Стратегия', description: 'Разработка Roadmap.', iconName: 'Compass' },
  { id: '03', title: 'Внедрение', description: 'Настройка процессов.', iconName: 'Settings' },
  { id: '04', title: 'Рост', description: 'Масштабирование.', iconName: 'Rocket' }
];

interface WorkflowProps {
  steps?: any[];
}

const Workflow: React.FC<WorkflowProps> = ({ steps }) => {
  const displaySteps = (steps && steps.length > 0) ? steps : defaultSteps;

  return (
    <section id="process" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title="Как мы работаем" subtitle="Системный подход от хаоса к росту" />

        <div className="relative mt-20">
          {/* Линия, соединяющая шаги */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-800">
            <motion.div 
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {displaySteps.map((step, index) => {
               const Icon = (step.iconName && IconMap[step.iconName]) ? IconMap[step.iconName] : Search;
               
               return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}
                    className="relative flex flex-col items-center text-center group"
                  >
                    {/* Круг с иконкой */}
                    <div className="w-24 h-24 rounded-2xl bg-[#111827] border border-gray-800 flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                      <div className="bg-gray-800/50 p-4 rounded-xl group-hover:bg-gray-800 transition-colors">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      
                      {/* ПЛАШКА "ШАГ" (ПЕРЕНЕСЕНА ВНИЗ ПО ЦЕНТРУ) */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0B0F19] text-gray-500 text-xs font-mono py-1 px-2 rounded border border-gray-800 group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                        ШАГ {step.stepId || `0${index + 1}`}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">{step.description}</p>
                  </motion.div>
               )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;