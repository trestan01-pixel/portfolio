import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { 
  ChevronDown, Wallet, Clock, ShieldCheck, Users, Briefcase, Globe, 
  FileText, BarChart3, Zap, BrainCircuit, TrendingUp, HelpCircle 
} from 'lucide-react';

// --- 1. КАРТА ИКОНОК ---
// Превращает строку "Zap" из Sanity в компонент <Zap />
const IconMap: Record<string, React.ElementType> = {
  Zap, Users, Globe, BarChart3, Clock, FileText, Wallet, 
  ShieldCheck, BrainCircuit, TrendingUp, Briefcase, HelpCircle
};

// --- 2. СТАТИЧЕСКАЯ СТРУКТУРА ТАБОВ ---
// Эта структура нужна для заголовков и иконок самих табов.
// Вопросы будут подставляться сюда динамически.
const faqCategories = [
  { id: 'general', label: 'О формате', icon: <Briefcase size={18} /> },
  { id: 'process', label: 'Процесс и Результат', icon: <BrainCircuit size={18} /> },
  { id: 'money', label: 'Деньги и Гарантии', icon: <Wallet size={18} /> }
];

interface FAQProps {
  items?: any[]; // "Плоский" массив вопросов из Sanity
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);

  // --- 3. ТРАНСФОРМАЦИЯ ДАННЫХ ---
  // Группируем "плоский" массив из Sanity в категории
  const processedCategories = faqCategories.map(category => {
    const categoryItems = items 
      ? items.filter(item => item.category === category.id)
      : []; // Если данных нет, оставляем пустым
    
    return { ...category, items: categoryItems };
  });

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setActiveQuestionIndex(null); // Сбрасываем открытый вопрос при смене таба
  };

  const currentCategory = processedCategories[activeTab];

  return (
    <section id="faq" className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-gray-800">
      
      <div className="absolute top-0 left-1/4 w-full h-full bg-purple-900/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-3/4 h-3/4 bg-indigo-900/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <SectionHeader 
          title="Частые вопросы" 
          subtitle="Системный подход к каждому этапу сотрудничества" 
        />
        
        {/* --- TABS NAVIGATION --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {processedCategories.map((cat, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${
                  isActive 
                    ? 'bg-purple-600/20 border-purple-500 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)]' 
                    : 'bg-[#1e293b]/50 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* --- QUESTIONS LIST --- */}
        <div className="min-h-[400px]">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {currentCategory.items.length > 0 ? (
                currentCategory.items.map((item, index) => {
                  const isActive = activeQuestionIndex === index;
                  // Находим нужный компонент иконки, если не найден - ставим заглушку
                  const IconComponent = (item.iconName && IconMap[item.iconName]) ? IconMap[item.iconName] : HelpCircle;

                  return (
                    <motion.div
                      key={item._id || index}
                      className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                        isActive ? 'bg-[#13111C] border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.15)]' : 'bg-[#1e293b]/30 border-gray-800 hover:border-purple-500/30 hover:bg-[#1e293b]/50'
                      }`}
                    >
                      <button
                        onClick={() => setActiveQuestionIndex(isActive ? null : index)}
                        className="w-full p-5 md:p-6 flex items-center justify-between text-left group"
                      >
                        <div className="flex items-center gap-4 md:gap-6">
                          <div className={`p-3 rounded-xl transition-colors duration-300 shrink-0 ${
                            isActive ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-800 text-gray-500 group-hover:text-purple-400 group-hover:bg-gray-700'
                          }`}>
                              <IconComponent size={20} />
                          </div>
                          
                          <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                          }`}>
                            {item.question}
                          </span>
                        </div>
                        <div className={`p-1 rounded-full transition-all duration-300 shrink-0 ml-4 ${
                          isActive ? 'rotate-180 text-purple-400 bg-purple-500/10' : 'text-gray-500'
                        }`}>
                           <ChevronDown size={20} />
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-0 pl-[80px] md:pl-[88px] text-gray-400 leading-relaxed text-sm md:text-base border-t border-transparent">
                               <div className="h-px w-full bg-gradient-to-r from-purple-500/30 to-transparent mb-4" />
                               {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center text-gray-600 py-10">
                  Вопросы для этой категории скоро появятся.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default FAQ;