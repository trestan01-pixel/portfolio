import React, { useRef, useMemo, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Briefcase, School, BrainCircuit, Car, Phone, Navigation, ChevronDown, ChevronUp } from 'lucide-react';
import { PortableText } from '@portabletext/react';

interface ExperienceItem {
  _id?: string;
  company?: string;
  title?: string;
  role?: string;
  position?: string;
  startDate?: string;
  endDate?: string;
  isCurrent?: boolean;
  description?: any;
  customHighlights?: string[];
  skills?: string[];
}

interface ExperienceProps {
  experiences?: ExperienceItem[]; // Мы пока проигнорируем этот проп, чтобы показать новые данные
}

const ExperienceSection: React.FC<ExperienceProps> = () => { // Убрал деструктуризацию props временно
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // --- ХАРДКОД ДАННЫЕ (SOURCE OF TRUTH) ---
  const defaultExperiences: ExperienceItem[] = [
    {
      _id: "1",
      company: "Школьная Лига",
      role: "Коммерческий директор / Бизнес-архитектор",
      startDate: "2025-01",
      isCurrent: true,
      customHighlights: [
        "Полная оцифровка компании за 7 месяцев",
        "Разработал 30+ регламентов и процессов",
        "Автоматизация: 4 дня → 2 часа → 15 минут",
        "Построил HR-систему: найм, адаптация, мотивация"
      ],
      skills: ["BPMN", "Business Architecture", "HR Tech", "Регламенты"]
    },
    {
      _id: "2",
      company: "Medion",
      role: "Технический директор / Архитектор цифровых продуктов",
      startDate: "2022-01",
      endDate: "2025-01",
      customHighlights: [
        "Рост оборота компании x3 за 2 года",
        "Снизил стоимость лида (CPL) в 2.2 раза",
        "Создал IT-отдел и продуктовую команду с нуля",
        "NPS внутренних клиентов вырос с 5 → 9.1",
        "Защитил AI-проект в Сколково"
      ],
      skills: ["Product Management", "AI", "Unit Economics", "Team Building"]
    },
    {
      _id: "3",
      company: "Karso",
      role: "Заместитель ген. директора / Product Manager",
      startDate: "2021-01",
      endDate: "2022-01",
      customHighlights: [
        "Разработал архитектуру B2B IT-платформы с нуля",
        "Внедрил CRM и автоматизировал продажи",
        "Обеспечил партнерство с Drom.ru и СберАвто"
      ],
      skills: ["B2B Sales", "Platform Architecture", "CRM", "Partnership"]
    },
    {
      _id: "4",
      company: "Mango Office",
      role: "Эксперт по продажам / Бизнес-аналитик",
      startDate: "2019-01",
      endDate: "2020-12",
      customHighlights: [
        "Топ-13 в рейтинге продаж по России (среди 250 менеджеров)",
        "Повысил конверсию за счет анализа циклов сделок"
      ],
      skills: ["Sales Analytics", "B2B Negotiation", "Telecom"]
    },
    {
      _id: "5",
      company: "Uber / Яндекс",
      role: "Партнер-рекрутер",
      startDate: "2016-01",
      endDate: "2018-12",
      customHighlights: [
        "Вошел в топ-3 рекрутеров города",
        "Самостоятельно создал сайт и настроил трафик",
        "Первый опыт построения digital-воронок"
      ],
      skills: ["Digital Marketing", "Recruiting", "Traffic Management"]
    }
  ];

  // ИСПОЛЬЗУЕМ ТОЛЬКО ХАРДКОД
  const itemsToRender = useMemo(() => {
    return [...defaultExperiences].sort((a, b) => {
      const dateA = new Date(a.startDate || 0).getTime();
      const dateB = new Date(b.startDate || 0).getTime();
      return dateB - dateA;
    });
  }, []); // Убрал зависимость от props

  const visibleItems = isExpanded ? itemsToRender : itemsToRender.slice(0, 3);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('ru-RU', { year: 'numeric' }).format(date);
    } catch (e) {
      return dateString;
    }
  };

  const getIcon = (companyName: string = "") => {
    const name = companyName.toLowerCase();
    const props = { size: 18, className: "text-cyan-400" };
    
    if (name.includes('школ')) return <School {...props} />;
    if (name.includes('medion') || name.includes('ai')) return <BrainCircuit {...props} />;
    if (name.includes('karso') || name.includes('авто')) return <Car {...props} />;
    if (name.includes('mango') || name.includes('телеком')) return <Phone {...props} />;
    if (name.includes('uber') || name.includes('яндекс')) return <Navigation {...props} />;
    return <Briefcase {...props} />;
  };

  const colors = ["text-cyan-400", "text-purple-400", "text-blue-400", "text-indigo-400", "text-fuchsia-400"];

  return (
    <section id="experience" className="py-24 bg-[#0B0F19] overflow-hidden relative">
       <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
       
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
           title="Трек-рекорд" 
           subtitle="История роста капитализации компаний, с которыми я работал." 
        />
        
        <div className="relative max-w-5xl mx-auto mt-16" ref={ref}>
          {/* Линии таймлайна */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2" />
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 transform md:-translate-x-1/2 origin-top shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10" 
          />

          <div className="space-y-12 relative z-20">
            <AnimatePresence mode='popLayout'>
            {visibleItems.map((item, index) => {
              const colorClass = colors[index % colors.length];
              
              let period = '';
              if (item.startDate) {
                  const start = formatDate(item.startDate);
                  const end = item.isCurrent ? 'Н.В.' : formatDate(item.endDate);
                  period = (start === end || !item.endDate && !item.isCurrent) ? start : `${start} — ${end}`;
              } else {
                  period = '20XX';
              }
              
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  layout
                  key={item._id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Dot */}
                  <div className="absolute left-[19px] md:left-1/2 w-8 h-8 bg-[#0B0F19] border-2 border-cyan-500 rounded-full transform -translate-x-1/2 mt-6 shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center justify-center z-20 group hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 bg-white rounded-full group-hover:bg-cyan-300 shadow-[0_0_10px_white]" />
                  </div>

                  {/* Card Content */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-12">
                    <div className="group bg-[#111827]/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.1)] relative overflow-hidden flex flex-col h-full">
                      
                      {/* Glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Header: Company + Year */}
                      <div className="flex justify-between items-start mb-2 relative z-10">
                          <div className={`text-xl sm:text-2xl font-bold ${colorClass}`}>
                            {item.company || item.title} 
                          </div>
                          <div className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-500/20 whitespace-nowrap">
                            {period}
                          </div>
                      </div>
                      
                      {/* Role */}
                      <div className="text-white font-medium mb-6 flex items-center gap-2 border-b border-white/5 pb-4 relative z-10">
                        {getIcon(item.company)}
                        <span className="text-sm sm:text-base">{item.role || item.position}</span>
                      </div>
                      
                      {/* Achievements (The List) */}
                      <div className="text-gray-300 text-sm leading-relaxed relative z-10 flex-grow">
                         {item.customHighlights ? (
                            <ul className="space-y-3">
                                {item.customHighlights.map((line, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        {/* --- МАРКЕР (ИКОНКА) --- */}
                                        <div className="mt-1.5 w-1.5 h-1.5 rotate-45 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] shrink-0" />
                                        
                                        {/* --- ТЕКСТ --- */}
                                        <span>
                                            {line.split(/(x[\d\.]+|\d+(?:\.\d+)?%?|days?|minutes?|\d+\s(?:дня|минут|регламентов)|топ-\d+|4 дня → 2 часа → 15 минут)/gi).map((part, j) => 
                                                // Регулярка для подсветки цифр и стрелочек
                                                part.match(/(x[\d\.]+|\d+(?:\.\d+)?%?|days?|minutes?|\d+\s(?:дня|минут|регламентов)|топ-\d+|4 дня → 2 часа → 15 минут)/i) 
                                                ? <span key={j} className="text-white font-bold">{part}</span> 
                                                : part
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                         ) : (
                           // Fallback (хотя сейчас он не сработает, так как мы используем defaultExperiences)
                           Array.isArray(item.description) ? (
                            <PortableText value={item.description} />
                           ) : (
                            <p>{item.description}</p>
                           )
                         )}
                      </div>

                      {/* --- SKILLS SECTION (TAGS) --- */}
                      {/* Явно выносим скиллы в низ карточки */}
                      {item.skills && item.skills.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-white/10 relative z-10">
                            <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, s) => (
                                    <span key={s} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md bg-white/5 text-gray-400 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                      )}

                    </div>
                  </div>
                  
                  {/* Spacer for Desktop Grid */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
            </AnimatePresence>
          </div>

          {/* Show More Button */}
          {itemsToRender.length > 3 && (
            <motion.div 
                layout
                className="flex justify-center mt-12 relative z-20"
            >
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold hover:bg-cyan-500/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 backdrop-blur-sm"
                >
                    {isExpanded ? (
                        <>Свернуть опыт <ChevronUp className="w-4 h-4" /></>
                    ) : (
                        <>Показать ранний опыт <ChevronDown className="w-4 h-4" /></>
                    )}
                </button>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;