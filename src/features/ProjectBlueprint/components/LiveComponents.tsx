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
const PRODUCT_COLORS: { [key: string]: string } = {
  'Blueprint': 'text-cyan-400 border-cyan-400/30 bg-cyan-900/20',
  'Telegram Bot': 'text-blue-400 border-blue-400/30 bg-blue-900/20'
// --- КОМПОНЕНТ ДЛЯ ОТОБРАЖЕНИЯ ОДНОЙ ЗАПИСИ ИЗ ИСТОРИИ ---
};
type ChangelogEntryProps = {
  product?: string;
  version: string;
  releaseName?: string;
  date: string;
  title: string;
  children: React.ReactNode;
  isFix?: boolean;
  isRefactor?: boolean;
  isContent?: boolean;
};

export const Entry = ({ product, version, releaseName, date, title, children, isFix = false, isRefactor = false, isContent = false }: ChangelogEntryProps) => {
  
  const getColor = () => {
    if (isContent) return { dot: 'bg-green-500 shadow-green-500', text: 'text-green-500' };
    if (isRefactor) return { dot: 'bg-[#d946ef] shadow-[#d946ef]', text: 'text-[#d946ef]' };
    if (isFix) return { dot: 'bg-yellow-500 shadow-yellow-500', text: 'text-yellow-500' };
    return { dot: 'bg-[#22d3ee] shadow-[#22d3ee]', text: 'text-[#22d3ee]' };
  };

  const colors = getColor();
  const productStyle = product ? PRODUCT_COLORS[product] : '';

  return (
    <li className="relative group pt-4">
      <span className={`absolute -left-[31px] top-5 w-2.5 h-2.5 rounded-full ${colors.dot} shadow-[0_0_8px] group-hover:scale-125 transition-transform`}></span>
      
      {/* ▼▼▼ ИЗМЕНЕННЫЙ БЛОК С ВЕРСИЕЙ И МЕТКОЙ ▼▼▼ */}
      <div className="flex justify-between items-center mb-1">
        <p className={`font-mono text-sm font-bold ${colors.text}`}>
          Версия {version}
          {releaseName && ` — "${releaseName}"`}
          <span className="text-gray-500 font-normal ml-2">- {date}</span>
        </p>
        {product && (
          <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${productStyle}`}>
            {product}
          </span>
        )}
      </div>
      
      <div className="mt-2 p-4 bg-[#111827]/50 rounded-lg border border-gray-800/50 group-hover:border-gray-700 transition-colors">
        <p className={`text-xs font-bold mb-3 uppercase tracking-wider ${colors.text}`}>{title}</p>
        <div className="text-sm text-gray-400 space-y-2 prose prose-invert prose-p:m-0 prose-strong:text-white">
            {children}
        </div>
      </div>
    </li>
  );
};