import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { CheckCircle2, Code2, Database, ShieldCheck, X, ArrowRight, Layers, Coins, Brain, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import { urlFor } from '../sanityClient';

// --- ТИПЫ ДАННЫХ ---
interface CaseItem {
  id: string;
  title: string;
  subtitle: string; // Короткий тег под заголовком
  shortDesc: string; // Для карточки
  tags: string[];
  icon: React.ReactNode;
  logoImage?: any;
  // Данные для модалки
  fullDesc: {
    problem: string;
    result: string;
    implementation: string;
  };
}

interface ProjectsProps {
  projects?: any[];
}

// Эффект матрицы при наведении
const MatrixRain = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none font-mono text-[10px] leading-none text-cyan-500 select-none">
      <div className="flex justify-between">
        {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
                key={i}
                initial={{ y: -100 }}
                animate={{ y: 400 }}
                transition={{ repeat: Infinity, duration: Math.random() * 2 + 2, delay: Math.random() * 2, ease: "linear" }}
                className="flex flex-col"
            >
                {Array.from({ length: 10 }).map((_, j) => (
                    <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
                ))}
            </motion.div>
        ))}
      </div>
    </div>
  );
}

const ProjectsSection: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);

  // --- НОВЫЕ ТЕКСТЫ (Hardcoded для идеального отображения) ---
  const casesData: CaseItem[] = [
    {
      id: 'skolkovo-ai',
      title: "AI-платформа для Сколково",
      subtitle: "AI SALES",
      shortDesc: "Проект-доказательство: как AI повышает эффективность продаж. Пройдена защита в Сколково.",
      tags: ["AI/ML", "Python", "Predictive"],
      icon: <Brain size={32} className="text-white" />,
      fullDesc: {
        problem: "Отсутствовала система для объективной оценки вероятности закрытия сделок, что приводило к расфокусировке отдела продаж. Менеджеры тратили время на «пустых» лидов.",
        result: "Защитил проект, доказав применимость AI для повышения эффективности продаж на 20-30%. Проект прошел отбор в Сколково и получил грант.",
        implementation: "Спроектирована архитектура предиктивной модели. Интеграция с CRM через Speech-to-Text позволяет давать менеджерам подсказки (Next Best Action) в реальном времени."
      }
    },
    {
      id: 'karso',
      title: "Karso: IT-платформа",
      subtitle: "B2B / SAAS",
      shortDesc: "B2B SaaS-платформа, обрабатывающая 10,000+ заявок/мес. Успешное партнерство со Сбером и DROM.",
      tags: ["HighLoad", "Microservices", "FinTech"],
      icon: <Database size={32} className="text-white" />,
      fullDesc: {
        problem: "Стартапу была необходима масштабируемая B2B-платформа, способная выдержать интеграцию с гигантами вроде Сбера и DROM.",
        result: "Запущена платформа, которая обрабатывает 10,000+ заявок в месяц. Время оформления гарантии сократилось с 3 часов (бумажная волокита) до 10 минут.",
        implementation: "С нуля спроектирован личный кабинет, автоматический биллинг и система ЭДО. Платформа объединила три стороны: автодилеров, СТО и клиентов."
      }
    },
    {
      id: 'school-league',
      title: "Школьная Лига",
      subtitle: "ОЦИФРОВКА",
      shortDesc: "Наведение порядка в хаосе: время найма сократилось с 4 дней до 15 минут. Оборот вырос на 40%.",
      tags: ["Automation", "HR Tech", "CRM"],
      icon: <Users size={32} className="text-white" />,
      fullDesc: {
        problem: "Полный операционный хаос. Сотрудники нанимались и увольнялись без системы, процессы не были описаны, KPI отсутствовали.",
        result: "Время найма сократилось с 4 дней до 15 минут. Оборот вырос на 40% за полгода. Команда работает по понятным KPI.",
        implementation: "Проведен полный аудит 'as is'. Внедрена AmoCRM с триггерами. Создана база знаний в Notion. Разработана прозрачная система KPI в реальном времени."
      }
    },
    {
      id: 'medion',
      title: "Medion: Рост х3",
      subtitle: "ANALYTICS",
      shortDesc: "Рост оборота в 3 раза и снижение CPL в 2.2 раза благодаря внедрению сквозной аналитики.",
      tags: ["Roistat", "Marketing", "MedTech"],
      icon: <TrendingUp size={32} className="text-white" />,
      fullDesc: {
        problem: "Классическая клиника с «бумажным» маркетингом. Бюджеты сжигались, не было понимания, какая реклама приносит клиентов.",
        result: "Оборот компании вырос в 3 раза, CPL снизился в 2.2 раза благодаря сквозной аналитике.",
        implementation: "Внедрена сквозная аналитика Roistat, интегрированная с МИС. Отключены неэффективные каналы. Запущен модуль телемедицины."
      }
    }
  ];

  return (
    <section id="cases" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
            title="Ключевые кейсы трансформации" 
            subtitle="Бизнес-задачи, которые я решил, и полученный ROI" 
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {casesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCase(item)}
              onMouseEnter={() => setHoveredCase(item.id)}
              onMouseLeave={() => setHoveredCase(null)}
              className="group relative bg-[#111827]/80 backdrop-blur-sm rounded-2xl border-t border-white/10 border-b border-black/50 shadow-lg hover:border-cyan-500/50 cursor-pointer transition-all duration-300 overflow-hidden hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] h-full flex flex-col"
            >
              <AnimatePresence>
                 {hoveredCase === item.id && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-0">
                        <MatrixRain />
                    </motion.div>
                 )}
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8 relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#1e293b] border border-gray-700 group-hover:border-cyan-500/50 transition-colors z-20 flex items-center justify-center shadow-lg relative">
                        {item.logoImage ? (
                           <img src={urlFor(item.logoImage).width(200).url()} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                           <div className="opacity-80 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                        )}
                    </div>

                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-cyan-400 bg-cyan-950/40 px-3 py-1.5 rounded-full border border-cyan-500/20 backdrop-blur-md uppercase tracking-wider">
                        {item.subtitle}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                    {item.title}
                </h3>
                
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed font-medium">
                   {item.shortDesc}
                </p>

                <div className="flex flex-wrap items-center justify-between pt-6 border-t border-gray-800 group-hover:border-gray-700 transition-colors gap-4">
                   <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-md bg-[#0B0F19] border border-gray-800 text-[10px] text-gray-400 font-mono group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors">
                              #{tag}
                          </span>
                      ))}
                   </div>

                   <div className="flex items-center gap-2 text-white text-sm font-bold group-hover:translate-x-1 transition-transform ml-auto">
                      Подробнее <ArrowRight size={16} className="text-cyan-500" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- МОДАЛЬНОЕ ОКНО --- */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCase(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[70] flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.95 }} onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a] border border-cyan-500/30 rounded-2xl max-w-4xl w-full relative shadow-2xl flex flex-col my-8"
            >
               {/* Header */}
               <div className="p-8 pb-6 flex justify-between items-start border-b border-white/5 bg-[#1e293b]/50 rounded-t-2xl">
                  <div className="flex items-center gap-5">
                     <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-700 hidden sm:flex items-center justify-center bg-[#0B0F19]">
                        {selectedCase.logoImage ? (
                           <img src={urlFor(selectedCase.logoImage).width(200).url()} className="w-full h-full object-cover" alt={selectedCase.title} />
                        ) : (
                           <div className="p-2">{selectedCase.icon}</div>
                        )}
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{selectedCase.title}</h3>
                        <p className="text-cyan-400 font-mono text-sm tracking-wide bg-cyan-950/30 inline-block px-2 py-0.5 rounded border border-cyan-500/20">
                            {selectedCase.subtitle}
                        </p>
                     </div>
                  </div>
                  <button onClick={() => setSelectedCase(null)} className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
                    <X size={28} />
                  </button>
               </div>

               {/* Body */}
               <div className="p-8">
                  {/* Grid: Problem & Result */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Проблема */}
                      <div className="bg-red-500/5 p-6 rounded-xl border border-red-500/10">
                         <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                            <div className="text-sm text-red-400 font-bold uppercase tracking-wider">Проблема (Было)</div>
                         </div>
                         <div className="text-gray-300 leading-relaxed text-base">{selectedCase.fullDesc.problem}</div>
                      </div>
                      
                      {/* Результат */}
                      <div className="bg-gradient-to-br from-green-500/10 to-emerald-900/10 p-6 rounded-xl border border-green-500/20 shadow-[0_0_20px_rgba(16,185,129,0.05)] relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full" />
                         <div className="flex items-center gap-2 mb-3 relative z-10">
                            <Coins className="w-5 h-5 text-green-400" />
                            <div className="text-sm text-green-400 font-bold uppercase tracking-wider">Результат (Стало)</div>
                         </div>
                         <div className="text-white font-bold leading-relaxed text-lg relative z-10">{selectedCase.fullDesc.result}</div>
                      </div>
                  </div>

                  {/* Implementation */}
                  <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mb-8 border-t border-white/10 pt-8">
                     <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-blue-500" />
                        Реализация проекта
                     </h4>
                     <p className="text-lg">{selectedCase.fullDesc.implementation}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                      {selectedCase.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-[#0B0F19] text-gray-400 rounded-lg text-xs font-bold border border-gray-800 font-mono uppercase tracking-wider">
                           #{tag}
                        </span>
                      ))}
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;