import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { colorPaletteData } from '../data/blueprintData';

// --- Color Swatch ---
interface ColorSwatchProps {
  name: string;
  hex: string;
  description: string;
  isAccent?: boolean;
}

export const ColorSwatchCard: React.FC<ColorSwatchProps> = ({ name, hex, description, isAccent = false }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isAccent) {
    return (
      <button onClick={handleCopy} className="group text-left bg-[#111827] rounded-xl overflow-hidden border border-gray-800 hover:border-[#22d3ee] transition-all duration-300 w-full">
        <div className="h-40" style={{ backgroundColor: hex }}></div>
        <div className="p-5 relative">
          <h4 className="text-white font-bold text-lg mb-1">{name}</h4>
          <div className="text-xs text-gray-500 font-mono mb-4">{hex}</div>
          <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-800 pt-3">{description}</p>
          <AnimatePresence>
            {copied && <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute bottom-4 right-4 text-xs font-mono text-green-400">Copied!</motion.div>}
          </AnimatePresence>
        </div>
      </button>
    );
  }
  return (
    <button onClick={handleCopy} className="w-full text-left flex items-center gap-4 p-4 bg-[#111827] rounded-lg border border-gray-800 hover:border-gray-600 transition-colors duration-300">
      <div className="w-12 h-16 rounded border border-gray-700" style={{ backgroundColor: hex }}></div>
      <div>
        <div className="text-white font-bold">{name}</div>
        <div className="text-xs text-gray-500 font-mono">{hex}</div>
        <div className="text-xs text-gray-600 mt-1">{description}</div>
        {copied && <div className="text-xs font-mono text-green-400 mt-1">Copied!</div>}
      </div>
    </button>
  );
};

export const ColorPaletteRenderer = () => (
    <div className="my-10">
    <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Основные акценты</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {colorPaletteData?.accents.map((color) => <ColorSwatchCard key={color.hex} {...color} isAccent />)}
    </div>
    <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Фоновые цвета</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {colorPaletteData?.backgrounds.map((color) => <ColorSwatchCard key={color.hex} {...color} />)}
    </div>
    </div>
);

// --- Live Buttons ---
export const LiveButtonPreview = () => (
  <div className="my-8 p-8 bg-[#111827] border border-gray-800 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-6">
    <motion.button 
      className="px-6 py-3 bg-[#22d3ee] text-[#0B0F19] font-bold rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300"
      whileTap={{ scale: 0.95 }}
    >
      Primary Action
    </motion.button>
    <motion.button 
      className="px-6 py-3 bg-transparent border border-gray-700 text-gray-400 rounded-lg hover:border-[#22d3ee] hover:text-[#22d3ee] transition-colors duration-300"
      whileTap={{ scale: 0.95 }}
    >
      Secondary Action
    </motion.button>
  </div>
);

// --- Do / Don't ---
export const DoDontExample = () => (
  <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="border border-green-500/20 bg-green-500/5 rounded-lg p-5">
      <div className="flex items-center gap-2 text-green-400 font-bold mb-4 uppercase tracking-wider text-xs">
        <CheckCircle size={16} /><span>Correct Usage</span>
      </div>
      <p className="text-sm text-gray-400 mb-6 min-h-[40px]">Используйте одну акцентную кнопку для главного действия.</p>
      <div className="p-6 bg-[#0B0F19] border border-gray-800 rounded-md flex justify-center">
        <button className="px-4 py-2 bg-[#22d3ee] text-black text-sm font-bold rounded shadow-[0_0_10px_rgba(34,211,238,0.2)]">Submit Request</button>
      </div>
    </div>
    <div className="border border-red-500/20 bg-red-500/5 rounded-lg p-5">
      <div className="flex items-center gap-2 text-red-400 font-bold mb-4 uppercase tracking-wider text-xs">
        <XCircle size={16} /><span>Incorrect Usage</span>
      </div>
      <p className="text-sm text-gray-400 mb-6 min-h-[40px]">Избегайте использования нескольких конкурирующих акцентов.</p>
      <div className="p-6 bg-[#0B0F19] border border-gray-800 rounded-md flex justify-center gap-4">
        <button className="px-4 py-2 bg-[#22d3ee] text-black text-sm font-bold rounded">Save</button>
        <button className="px-4 py-2 bg-[#f43f5e] text-white text-sm font-bold rounded">Delete</button>
      </div>
    </div>
  </div>
);

// --- КОМПОНЕНТ CHANGELOG v2.1 ---

type ChangelogEntryProps = {
  version: string;
  releaseName?: string;
  date: string;
  title: string;
  children: React.ReactNode;
  isFix?: boolean;
  isRefactor?: boolean;
  isContent?: boolean; // Новый флаг для контента
};

const Entry = ({ version, releaseName, date, title, children, isFix = false, isRefactor = false, isContent = false }: ChangelogEntryProps) => {
  
  const getColor = () => {
    if (isContent) return { dot: 'bg-green-500 shadow-green-500', text: 'text-green-500' };
    if (isRefactor) return { dot: 'bg-[#d946ef] shadow-[#d946ef]', text: 'text-[#d946ef]' };
    if (isFix) return { dot: 'bg-yellow-500 shadow-yellow-500', text: 'text-yellow-500' };
    return { dot: 'bg-[#22d3ee] shadow-[#22d3ee]', text: 'text-[#22d3ee]' };
  };

  const colors = getColor();

  return (
    <li className="relative group">
      <span className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full ${colors.dot} shadow-[0_0_8px] group-hover:scale-125 transition-transform`}></span>
      
      <p className={`font-mono text-sm font-bold ${colors.text}`}>
        Версия {version}
        {releaseName && ` — "${releaseName}"`}
        <span className="text-gray-500 font-normal ml-2">- {date}</span>
      </p>
      
      <div className="mt-2 p-4 bg-[#111827]/50 rounded-lg border border-gray-800/50 group-hover:border-gray-700 transition-colors">
        <p className={`text-xs font-bold mb-3 uppercase tracking-wider ${colors.text}`}>{title}</p>
        <div className="text-sm text-gray-400 space-y-2 prose prose-invert prose-p:m-0 prose-strong:text-white">
            {children}
        </div>
      </div>
    </li>
  );
};

// Основной компонент-рендер с полной историей
export const ChangelogRenderer = () => (
  <ul className="space-y-6">
    
     <Entry 
      version="2.4.2" 
      date="14.12.2025" 
      title="PATCH: PROMPT LIBRARY UI" 
      isFix={true}
    >
      <p>•  <strong>UI FIX:</strong> Улучшено форматирование текста в 'Библиотеке промптов' для предотвращения переполнения.</p>
    </Entry>

    <Entry 
      version="2.4.1" 
      date="14.12.2025" 
      title="PATCH: UI FIX & CONTENT UPDATE" 
      isFix={true}
    >
      <p>•  <strong>FIX:</strong> Исправлена Легенда статусов в Changelog (добавлен 'Контент').</p>
      <p>•  <strong>CONTENT:</strong> В Библиотеку промптов добавлен 'Мастер-промпт' для документирования кода.</p>
    </Entry>

    <Entry 
      version="2.4.0" 
      date="14.12.2025" 
      title="REFACTOR: TABBED CODE REFERENCE" 
      isRefactor={true}
    >
      <p>• <strong>Справочник по коду</strong> переработан в панель с вкладками по проектам.</p>
      <p>• Добавлена боковая панель с кратким резюме для каждого проекта.</p>
    </Entry>

    <Entry 
      version="2.3.1" 
      date="14.12.2025" 
      title="PATCH: CODE REFERENCE STRUCTURE" 
      isFix={true}
    >
      <p>• Справочник по коду структурирован по проектам.</p>
      <p>• Добавлен мастер-промпт для автоматической генерации документации.</p>
    </Entry>

     <Entry 
      version="2.3.0" 
      date="14.12.2025" 
      title="FEATURE UPDATE: ROADMAP FILTERS" 
    >
      <p>• В Roadmap добавлена <strong>фильтрация по тегам</strong> (#ui, #ux, #code).</p>
      <p>• Обновлена база идей, включены все 8+ задач.</p>
    </Entry>

    <Entry 
      version="2.2.0" 
      date="13.12.2025" 
      title="ROADMAP REWORK: INTERACTIVE KANBAN" 
      isRefactor={true}
    >
      <p>• Раздел <strong>Roadmap</strong> полностью переработан в интерактивную канбан-доску с табами.</p>
      <p>• Добавлена полная база идей с визуальными приоритетами и легендой.</p>
      <p>• Улучшен дизайн карточек задач с цветовой кодировкой.</p>
    </Entry>

    <Entry 
      version="2.1.0" 
      date="13.12.2025" 
      title="ROADMAP 2.0: KANBAN BOARD" 
      isRefactor={true}
    >
      <p>• Раздел <strong>Roadmap</strong> переработан в интерактивную канбан-доску.</p>
      <p>• Внедрены статусы ('В планах', 'Желательно', 'Реализовано') и визуальные приоритеты.</p>
    </Entry>
    
    <Entry 
      version="2.0.1" 
      date="13.12.2025" 
      title="STRATEGIC UPDATE: ROADMAP V2.0" 
      isContent={true}
    >
      <p>• Сформирован и задокументирован детальный план развития до версии 2.0.</p>
      <p>• Внедрена система приоритетов для будущих задач.</p>
    </Entry>

    <Entry 
      version="2.0.0" date="13.12.2025" title="SYSTEM REFACTOR: COMPONENT-DRIVEN LOG" isRefactor={true}
    >
      <p>• Переход на компонентную систему <code>&lt;[CHANGELOG]&gt;</code> для управления версиями.</p>
    </Entry>

    <Entry version="1.9.1" date="13.12.2025" title="PATCH: MISSING DATA" isFix={true} >
      <p>• 🐞 <strong>FIX:</strong> Добавлены теги и связи для главы 'Служебные страницы'.</p>
    </Entry>

    <Entry version="1.9.0" releaseName="Connectivity" date="13.12.2025" title="FEATURE UPDATE: NAVIGATION">
      <p>• <strong>ВНЕДРЕНА:</strong> Система тегов и связанных разделов ("Смотри также").</p>
    </Entry>

     <Entry version="1.8.0" date="13.12.2025" title="NEW MODULE: AI & AUTOMATION">
      <p>• <strong>ДОБАВЛЕН ТОМ 7:</strong> AI & Automation.</p>
    </Entry>
    
    <Entry version="1.7.0" date="13.12.2025" title="ROADMAP & FIXES">
        <p>• Обновлен Roadmap: добавлены планы по CRM, Платформе и n8n.</p>
        <p>• Исправлена загрузка логотипа в Логобуке.</p>
    </Entry>

    <Entry version="1.6.0" date="13.12.2025" title="NEW SECTION & UI POLISH" isRefactor={true}>
        <p>• <strong>ДОБАВЛЕН ТОМ 6:</strong> Roadmap (Планы).</p>
        <p>• Добавлена глава 'Оформление документов'.</p>
        <p>• Улучшен дизайн раздела 'Иконография'.</p>
    </Entry>

    <Entry version="1.5.1" date="12.12.2025" title="VISUAL SYSTEM UPDATE" isRefactor={true}>
        <p>• Переработан раздел Grid & Spacing (добавлен адаптив и примеры).</p>
    </Entry>

    <Entry version="1.4.0" date="12.12.2025" title="CONTENT UPDATE: BRAND IDENTITY" isContent={true}>
        <p>• <strong>Полностью заполнен ТОМ 1:</strong> Смыслы (Миссия, Голос, Питчи).</p>
    </Entry>

    <Entry version="1.3.0" date="12.12.2025" title="MAJOR UPDATE: BUSINESS & ARCHITECTURE">
        <p>• <strong>ДОБАВЛЕН ТОМ 5:</strong> Business Protocols (Аудит, BPMN, 404).</p>
    </Entry>

    <Entry version="1.2.0" date="12.12.2025" title="FEATURE UPDATE: INTERACTIVITY">
        <p>• Добавлен том System API для React-компонентов.</p>
        <p>• Реализована система интерактивных плейсхолдеров.</p>
    </Entry>

    <Entry version="1.0.0" date="11.12.2025" title="INITIAL RELEASE" isRefactor={true}>
        <p>Инициализация системы Blueprint. Базовая структура томов.</p>
    </Entry>
  </ul>
);

