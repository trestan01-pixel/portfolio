import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ДАННЫЕ ДЛЯ ТАБОВ И КОНТЕНТА ---
const PROJECTS = [
  {
    id: 'blueprint',
    label: 'Project Blueprint',
    summary: { title: 'Мозг системы', text: 'Интерактивная база знаний и UI Kit.' },
    content: `
        <!-- ОПИСАНИЕ ФАЙЛА 1 -->
        <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl mb-4">
            <h4 class="font-bold text-white mb-1">Файл: <code>/components/ContentRenderer.tsx</code></h4>
            <p class="text-xs font-mono text-gray-500 mb-6">Отвечает за рендеринг контента глав</p>
            <ul class="space-y-6 text-sm">
                <li class="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
                    <code class="font-mono text-xs text-blue-400 bg-[#0B0F19] px-3 py-1.5 rounded border border-gray-700 shrink-0">'renderPlaceholder'()</code>
                    <p class="text-gray-400 text-xs leading-relaxed md:pt-1">— Парсит HTML, находит теги <code>&lt;[...]&gt;</code> и заменяет их на React-компоненты.</p>
                </li>
            </ul>
        </div>
        <!-- ОПИСАНИЕ ФАЙЛА 2 -->
        <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl">
            <h4 class="font-bold text-white mb-1">Файл: <code>/ProjectBlueprint.tsx</code></h4>
            <p class="text-xs font-mono text-gray-500 mb-6">Главный компонент страницы, собирающий весь интерфейс</p>
            <ul class="space-y-6 text-sm">
                <li class="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
                    <code class="font-mono text-xs text-blue-400 bg-[#0B0F19] px-3 py-1.5 rounded border border-gray-700 shrink-0">'useMemo' hooks</code>
                    <p class="text-gray-400 text-xs leading-relaxed md:pt-1">— Кэшируют данные для оптимизации рендеринга.</p>
                </li>
            </ul>
        </div>
        <!-- ОПИСАНИЕ ФАЙЛА 3 -->
            <div class="p-6 bg-[#111827] border border-gray-800 rounded-xl mt-4">
                <h4 class="font-bold text-white mb-1">Файл: <code>/data/blueprintData.ts</code></h4>
                <p class="text-xs font-mono text-gray-500 mb-6">Центральный источник данных и конфигурации для "Blueprint".</p>
                <ul class="space-y-6 text-sm">
                    <li class="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
                        <code class="font-mono text-xs text-blue-400 bg-[#0B0F19] px-3 py-1.5 rounded border border-gray-700 shrink-0">colorPaletteData</code>
                        <p class="text-gray-400 text-xs leading-relaxed md:pt-1">— Экспортирует объект с цветовой палитрой (акценты и фоны).</p>
                    </li>
                     <li class="flex flex-col md:flex-row md:items-start gap-3 md:gap-4">
                        <code class="font-mono text-xs text-blue-400 bg-[#0B0F19] px-3 py-1.5 rounded border border-gray-700 shrink-0">blueprintData</code>
                        <p class="text-gray-400 text-xs leading-relaxed md:pt-1">— Основной массив, формирующий структуру контента. Организован по "Томам" и "Главам".</p>
                    </li>
                </ul>
            </div>
        </div>
    `
  },
  {
    id: 'landing',
    label: 'Product Landing',
    summary: { title: 'Лицо проекта', text: 'Высококонверсионный сайт для клиентов.' },
    content: `<div class="text-gray-500 text-sm p-8 text-center border border-dashed border-gray-800 rounded-xl">Документация для этого проекта еще не добавлена.</div>`
  },
  {
    id: 'bpmn',
    label: 'BPMN Architecture',
    summary: { title: 'Ядро логики', text: 'Инструмент для визуализации бизнес-процессов.' },
    content: `<div class="text-gray-500 text-sm p-8 text-center border border-dashed border-gray-800 rounded-xl">Документация для этого проекта еще не добавлена.</div>`
  },
   {
    id: 'audit',
    label: 'Chaos Audit',
    summary: { title: 'Инструмент вовлечения', text: 'Интерактивный виджет-калькулятор.' },
    content: `<div class="text-gray-500 text-sm p-8 text-center border border-dashed border-gray-800 rounded-xl">Документация для этого проекта еще не добавлена.</div>`
  }
];

// --- ОСНОВНОЙ КОМПОНЕНТ С ТАБАМИ ---
export const CodeReference = () => {
  const [activeTabId, setActiveTabId] = useState(PROJECTS[0].id);
  const activeProject = PROJECTS.find(p => p.id === activeTabId);

  return (
    <div className="my-8">
      {/* Переключатели табов */}
      <div className="flex items-center border-b border-gray-800 mb-6 flex-wrap">
        {PROJECTS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={`px-4 py-3 text-sm font-bold transition-colors relative ${activeTabId === tab.id ? 'text-white' : 'text-gray-500 hover:text-white'}`}
          >
            {tab.label}
            {activeTabId === tab.id && <motion.div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[#22d3ee] shadow-[0_0_8px_#22d3ee]" layoutId="ref-underline" />}
          </button>
        ))}
      </div>

      {/* Контент табов */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTabId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2" dangerouslySetInnerHTML={{ __html: activeProject?.content || '' }}></div>
            <div className="lg:col-span-1">
                <div className="p-4 bg-[#1f2937]/50 border border-[#22d3ee]/30 rounded-lg sticky top-8">
                    <h5 className="text-[#22d3ee] font-bold mb-1">{activeProject?.summary.title}</h5>
                    <p className="text-xs text-gray-400">{activeProject?.summary.text}</p>
                </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};