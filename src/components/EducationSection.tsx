import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';

interface EducationProps {
  items?: any[]; 
}

const EducationSection: React.FC<EducationProps> = ({ items }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // 1. НОРМАЛИЗАЦИЯ И СОРТИРОВКА ДАННЫХ
  // Мы используем useMemo, чтобы не пересчитывать это при каждом рендере
  const processedItems = useMemo(() => {
    if (!items) return [];

    return items
      .map((item) => {
        // Логика поиска полей (как в твоем коде)
        const title = item.title || item.name || item.course || item.courseName || item.heading || "Без названия";
        const org = item.organization || item.author || item.school || item.institution || item.provider || item.platform || item.university || item.place || item.company || "Организация";
        
        let year = item.year || item.completionYear || item.date;
        if (!year && item.startDate) {
            year = new Date(item.startDate).getFullYear();
        }
        if (!year) year = "20XX";

        // Возвращаем чистый объект
        return {
            id: item._id || Math.random().toString(), // fallback id
            title,
            org,
            year,
            yearNum: parseInt(String(year)) || 0 // Число для сортировки
        };
      })
      // Сортировка: Свежие (2025) сверху
      .sort((a, b) => b.yearNum - a.yearNum);
  }, [items]);

  if (processedItems.length === 0) return null;

  // 2. ЛОГИКА ОТОБРАЖЕНИЯ (3 или Все)
  const visibleItems = isExpanded ? processedItems : processedItems.slice(0, 3);

  return (
    <section id="education" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title="Образование" subtitle="Фундамент компетенций" />
        
        <div className="max-w-3xl mx-auto space-y-4 relative mt-12">
          
          {/* Линия Таймлайна */}
          <div className="absolute left-[19px] sm:left-[19px] top-4 bottom-12 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent z-0" />
          
          <AnimatePresence initial={false} mode="wait">
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout // Важно для плавной анимации соседей
              >
                <SpotlightCard className="bg-[#1e293b] border-white/5 relative z-10" color="rgba(6, 182, 212, 0.15)">
                  <div className="flex items-center p-6">
                    
                    {/* Кружок на таймлайне */}
                    <div className="flex w-10 h-10 rounded-full bg-[#0B0F19] border border-cyan-500/30 items-center justify-center text-cyan-400 mr-6 z-10 shadow-[0_0_10px_rgba(6,182,212,0.3)] shrink-0">
                       <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    </div>

                    <div className="flex-grow">
                       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                          <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-cyan-400 transition-colors">
                            {item.title}
                          </h3>
                          <span className="text-xs font-bold text-cyan-400 border border-cyan-500/30 px-2 py-1 rounded bg-cyan-950/30 font-mono shrink-0 self-start">
                            {item.year}
                          </span>
                       </div>
                       
                       <p className="text-gray-400 text-sm mt-1">{item.org}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* КНОПКА ПОКАЗАТЬ ЕЩЕ (Если элементов больше 3) */}
        {processedItems.length > 3 && (
            <motion.div layout className="flex justify-center mt-8 relative z-20">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 text-white font-medium transition-all group backdrop-blur-sm"
                >
                    <span>{isExpanded ? "Свернуть список" : `Показать еще (${processedItems.length - 3})`}</span>
                    {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                    ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-y-1 transition-transform" />
                    )}
                </button>
            </motion.div>
        )}

      </div>
    </section>
  );
};

export default EducationSection;