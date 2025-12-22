// Файл: src/features/ProjectBlueprint/components/MasterChangelogPage.tsx (ПОЛНАЯ НОВАЯ ВЕРСИЯ)

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allChangelogData } from '../data/changelogData';
import { Entry } from './LiveComponents';

const TABS = [
  { id: 'all', label: 'Все проекты' },
  { id: 'Blueprint', label: ' Дизайн-система' },
  { id: 'Telegram Bot', label: ' Telegram Бот' },
];

const FILTERS = [
    { id: 'feature', label: 'Новая фича', color: 'bg-[#22d3ee]' },
    { id: 'fix', label: 'Исправление (Fix)', color: 'bg-yellow-500' },
    { id: 'refactor', label: 'Рефакторинг / UI', color: 'bg-[#d946ef]' },
    { id: 'content', label: 'Контент', color: 'bg-green-500' },
];

export const MasterChangelogPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  // НОВОЕ: Состояние для фильтров по типу
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // НОВОЕ: Функция для управления фильтрами
  const handleFilterToggle = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(f => f !== filterId) 
        : [...prev, filterId]
    );
  };

  const filteredData = useMemo(() => {
    let data = activeTab === 'all'
      ? allChangelogData
      : allChangelogData.filter(item => item.product === activeTab);

    // Применяем фильтры по типу, если они выбраны
    if (activeFilters.length > 0) {
      data = data.filter(item => activeFilters.includes(item.type));
    }

    return data;
  }, [activeTab, activeFilters]);
  
  // Получаем самую последнюю версию из отсортированных данных
  const latestVersion = allChangelogData.length > 0 ? allChangelogData[0].version : 'N/A';

  return (
    <div>
      <p className="mb-6 text-lg text-gray-400">Единая история изменений для всех продуктов экосистемы. Выберите вкладку или фильтр, чтобы отсортировать события.</p>
      
      {/* ▼▼▼ ПЕРЕНЕСЕННЫЙ БЛОК С ТЕКУЩЕЙ ВЕРСИЕЙ ▼▼▼ */}
      <div className="p-4 bg-[#111827] border border-gray-800 rounded-lg flex items-center justify-between shadow-lg mb-12">
        <span className="text-gray-400 font-medium">Текущая версия системы:</span>
        <code className="px-3 py-1 bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[#5eead4] text-sm font-mono rounded-full shadow-[0_0_10px_rgba(34,211,238,0.1)]">{`v${latestVersion}`}</code>
      </div>

      {/* ▼▼▼ НОВАЯ КЛИКАБЕЛЬНАЯ ЛЕГЕНДА ▼▼▼ */}
      <h3 className="text-white font-bold text-lg mb-4">Легенда статусов версий</h3>
      <div className="p-4 bg-[#111827] border border-gray-800 rounded-lg mb-12 text-xs grid grid-cols-2 md:grid-cols-4 gap-4">
          {FILTERS.map(filter => (
              <button 
                key={filter.id}
                onClick={() => handleFilterToggle(filter.id)}
                className={`flex items-center gap-2 transition-opacity duration-300 ${activeFilters.length > 0 && !activeFilters.includes(filter.id) ? 'opacity-30 hover:opacity-100' : 'opacity-100'}`}
              >
                  <span className={`w-2 h-2 rounded-full ${filter.color} shadow-[0_0_4px]`}></span>
                  <span className="text-gray-300">{filter.label}</span>
              </button>
          ))}
      </div>

      {/* Переключатель табов */}
<div className="flex items-center gap-x-4 border-b border-gray-800 mb-8 flex-wrap">
  {TABS.map(tab => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`px-4 py-2 text-sm font-medium relative transition-colors ${
        activeTab === tab.id ? 'text-[#22d3ee]' : 'text-gray-500 hover:text-white'
      }`}
    >
      {tab.label}
      {activeTab === tab.id && <motion.div layoutId="changelog-underline" className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[#22d3ee]" />}
    </button>
  ))}
</div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={`${activeTab}-${activeFilters.join('-')}`} // Ключ для перерисовки при смене фильтра
          // ... (анимации без изменений) ...
          className="space-y-6"
        >
          {filteredData.map((item, index) => (
            <Entry
              key={`${item.version}-${index}`}
              product={activeTab === 'all' ? item.product : undefined} // Показываем подпись только в общем списке
              version={item.version}
              date={item.date}
              title={item.title}
              isFix={item.type === 'fix'}
              isRefactor={item.type === 'refactor'}
              isContent={item.type === 'content'}
            >
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </Entry>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};