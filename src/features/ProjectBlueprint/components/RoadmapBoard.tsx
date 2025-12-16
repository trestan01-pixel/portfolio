import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag } from 'lucide-react';

// --- ОБНОВЛЕННЫЕ ДАННЫЕ С ТЕГАМИ ---
const ROADMAP_DATA = [
  // В планах
  { priority: 'high', status: 'planned', title: "Идея №1: 'Живой' UI Kit и Live Preview", tags: ['ui', 'ux', 'code'], problem: "Компоненты в документации — просто картинки.", goal: "Превратить Blueprint в интерактивную песочницу (Storybook).", result: "Ускорение разработки, так как код и примеры всегда под рукой." },
  { priority: 'high', status: 'planned', title: "Идея №2: Интерактивная Карта Проекта и Ченджлога", tags: ['ux', 'system'], problem: "Навигация по карте проекта и ченджлогу неинтерактивна.", goal: "Сделать файловую структуру и теги кликабельными ссылками.", result: "Бесшовная навигация по кодовой базе и истории изменений." },
  { priority: 'medium', status: 'planned', title: "Идея №3: Связь BPMN с редактором", tags: ['ux', 'process'], problem: "Теория о BPMN и редактор находятся на разных страницах.", goal: "Создать бесшовный переход от теории к практике.", result: "Пользователь сможет сразу применить знания, запустив редактор." },
  
  // Желательно (Wishlist)
  { priority: 'low', status: 'wish', title: "Идея №4: Интерактивные 'Стоп-слова'", tags: ['ux', 'brand', 'text'], problem: "Список стоп-слов просто запрещает, но не предлагает альтернатив.", goal: "Обучать правильной коммуникации в интерактивном режиме.", result: "При наведении на стоп-слово пользователь увидит подсказку." },
  { priority: 'low', status: 'wish', title: "Идея №7: Глобальный переключатель тем (Dark/Light)", tags: ['ui', 'ux'], problem: "Система существует только в темной теме.", goal: "Продемонстрировать гибкость Design System.", result: "Кнопка для переключения темы всего Blueprint'а." },
  
  // Реализовано
  { priority: 'high', status: 'done', title: "Система тегов и связанных разделов", tags: ['ux', 'system'], problem: "Навигация по разросшейся системе стала сложной.", goal: "Упростить поиск и показать связи между разделами.", result: "Внедрены кликабельные теги и блок 'Смотри также'." },
  { priority: 'high', status: 'done', title: "Компонентный Changelog", tags: ['ui', 'code'], problem: "История версий была статичным HTML, сложным в поддержке.", goal: "Создать управляемый компонент для рендеринга чейнджлога.", result: "Вся история версий рендерится через <[CHANGELOG]>." },
];

// --- КОМПОНЕНТ КАРТОЧКИ (без изменений) ---
const RoadmapCard = ({ priority, title, problem, goal, result }: any) => {
  const priorityConfig = {
    high: { color: 'border-red-500', label: 'Высокий' },
    medium: { color: 'border-yellow-500', label: 'Средний' },
    low: { color: 'border-green-500', label: 'Низкий' },
    wish: { color: 'border-gray-600', label: 'Желательно' }
  };
  // @ts-ignore
  const config = priorityConfig[priority];

  return (
    <div className={`p-6 bg-[#111827] border-l-4 rounded-r-lg ${config.color} hover:bg-[#1f2937] transition-colors duration-300`}>
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-white font-bold text-lg max-w-[80%]">{title}</h4>
        <div className={`px-2 py-1 text-[10px] font-bold rounded border uppercase ${config.color}`}>{config.label}</div>
      </div>
      <div className="space-y-3 text-sm">
        <div><strong className="text-[#d946ef] text-xs">Проблема:</strong><p className="text-gray-400">{problem}</p></div>
        <div><strong className="text-[#22d3ee] text-xs">Цель:</strong><p className="text-gray-400">{goal}</p></div>
        <div><strong className="text-green-500 text-xs">Результат:</strong><p className="text-gray-400">{result}</p></div>
      </div>
    </div>
  );
};

// --- ОСНОВНОЙ КОМПОНЕНТ С ТАБАМИ И ФИЛЬТРАМИ ---
export const RoadmapBoard = () => {
  const [activeTab, setActiveTab] = useState('planned');
  const [filterTag, setFilterTag] = useState<string | null>(null); // Стейт для фильтра по тегам
  
  const tabs = [
    { id: 'planned', label: 'В планах' },
    { id: 'wish', label: 'Желательно' },
    { id: 'done', label: 'Реализовано' },
  ];

  // Собираем все теги для кнопок фильтров
  const allTags = useMemo(() => {
    const tags = ROADMAP_DATA.flatMap(item => item.tags || []);
    return [...new Set(tags)].sort();
  }, []);

  // Фильтруем карточки по активному табу и тегу
  const filteredItems = ROADMAP_DATA.filter(item => 
    item.status === activeTab && 
    (!filterTag || item.tags.includes(filterTag))
  );

  return (
    <div className="my-8">
      {/* Легенда и фильтры */}
      <div className="p-4 bg-[#111827] border border-gray-800 rounded-lg mb-8 space-y-4">
          {/* Легенда */}
          <div className="text-xs flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div><span className="text-red-400">Высокий</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500"></div><span className="text-yellow-400">Средний</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-green-400">Низкий</span></div>
          </div>
          {/* Фильтры */}
          <div className="border-t border-gray-800 pt-4">
              <div className="flex items-center justify-center flex-wrap gap-2">
                  <button onClick={() => setFilterTag(null)} className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${!filterTag ? 'bg-[#22d3ee] text-black' : 'bg-[#1f2937] text-gray-400 hover:bg-[#22d3ee]/20 hover:text-white'}`}>Все</button>
                  {allTags.map(tag => (
                      <button key={tag} onClick={() => setFilterTag(tag)} className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${filterTag === tag ? 'bg-[#22d3ee] text-black' : 'bg-[#1f2937] text-gray-400 hover:bg-[#22d3ee]/20 hover:text-white'}`}># {tag}</button>
                  ))}
              </div>
          </div>
      </div>

      {/* Переключатели табов */}
      <div className="flex items-center border-b border-gray-800 mb-6">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-3 text-sm font-bold transition-colors relative ${activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
            {tab.label}
            {activeTab === tab.id && <motion.div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[#22d3ee] shadow-[0_0_8px_#22d3ee]" layoutId="underline" />}
          </button>
        ))}
      </div>

      {/* Контент табов */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTab}-${filterTag}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {filteredItems.length > 0 ? filteredItems.map(item => (
            <RoadmapCard key={item.title} {...item} />
          )) : <div className="text-center text-gray-600 font-mono text-sm py-8">Задач не найдено</div>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};