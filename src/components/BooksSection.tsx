import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { X, Quote, HelpCircle, BookOpen } from 'lucide-react';
import { urlFor } from '../sanityClient';

// --- ТИПЫ ---
interface BookItem {
  title: string;
  author: string;
  coverUrl?: string;
  coverColor?: string;
  quote: string;
  question: string;
  description: string;
  category?: string;
}

interface BooksProps {
  items?: any[];
}

// --- ДЕФОЛТНЫЕ ДАННЫЕ ---
const defaultBooks: BookItem[] = [
  {
    title: "Good to Great",
    author: "Джим Коллинз",
    coverColor: "bg-red-800",
    quote: "Хорошее — враг великого.",
    question: "Почему одни компании совершают прорыв, а другие нет?",
    description: "Исследование того, как обычные компании становятся великими.",
    category: "Soft Skills"
  },
  {
    title: "Заставьте данные говорить",
    author: "Алексей Колоколов",
    coverColor: "bg-emerald-800",
    quote: "Отчет, который никто не читает — это потерянное время.",
    question: "Как презентовать цифры?",
    description: "Руководство по визуализации данных.",
    category: "Hard Skills"
  },
  {
    title: "High Output Management",
    author: "Эндрю Гроув",
    coverColor: "bg-blue-900",
    quote: "Результат менеджера — это сумма результатов его подчиненных.",
    question: "Как повысить управленческий рычаг?",
    description: "Библия менеджмента от экс-CEO Intel.",
    category: "Soft Skills"
  },
  {
    title: "Текст, который продает",
    author: "Анна Шуст",
    coverColor: "bg-amber-700",
    quote: "Люди читают не тексты, они читают о себе.",
    question: "Как словом донести ценность?",
    description: "Копирайтинг для бизнеса.",
    category: "Hard Skills"
  },
  {
    title: "7 Навыков",
    author: "Стивен Кови",
    coverColor: "bg-slate-800",
    quote: "Сначала стремитесь понять, потом — быть понятым.",
    question: "Как быть эффективным?",
    description: "Фундаментальные принципы успеха.",
    category: "Soft Skills"
  }
];

const BooksSection: React.FC<BooksProps> = ({ items }) => {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  // --- ПОДГОТОВКА ДАННЫХ ---
  let displayBooks = defaultBooks;
  
  if (items && items.length > 0) {
    const colors = ["bg-red-800", "bg-blue-900", "bg-emerald-800", "bg-purple-900", "bg-amber-700"];
    
    displayBooks = items.map((item, index) => {
      const lowerTitle = (item.title || "").toLowerCase();
      let skillType = "Soft Skills";
      
      if (lowerTitle.includes("данн") || lowerTitle.includes("stat") || lowerTitle.includes("аналит") || lowerTitle.includes("финанс") || lowerTitle.includes("excel") || lowerTitle.includes("sql") || lowerTitle.includes("power bi") || lowerTitle.includes("текст")) {
        skillType = "Hard Skills";
      }

      return {
        title: item.title,
        author: item.author,
        coverUrl: item.coverImage ? urlFor(item.coverImage).width(300).height(450).url() : undefined,
        coverColor: colors[index % colors.length],
        quote: item.quote || "Инсайт из книги...",
        question: item.keyQuestion || "О чем эта книга?",
        description: item.description || item.comment || "Описание...",
        category: skillType
      };
    });
  }

  // Дублируем массив 4 раза для бесконечной ленты
  const marqueeItems = [...displayBooks, ...displayBooks, ...displayBooks, ...displayBooks];

  return (
    <section id="books" className="py-24 bg-[#0B0F19] text-white relative overflow-hidden">
      
      {/* СТИЛИ АНИМАЦИИ И 3D */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* Блик при наведении */
        @keyframes shine-move {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          /* СКОРОСТЬ: 150s = медленно */
          animation: scroll 120s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }

        .book-3d {
          transform-style: preserve-3d;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Поворот книги при наведении */
        .book-container:hover .book-3d {
          transform: rotateY(-20deg) rotateX(5deg) translateY(-10px);
        }

        /* Запуск блика при наведении */
        .book-container:hover .shine-effect {
          animation: shine-move 0.8s ease-in-out forwards;
        }
      `}</style>

      {/* Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/20 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-4 mb-16 relative z-10">
           <SectionHeader title="Любимые книги" subtitle="Фундамент моего мышления и подхода к бизнесу" center />
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden pb-12 pt-4">
          
          {/* Градиенты по краям */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-20 pointer-events-none" />

          {/* TRACK */}
          <div className="marquee-track px-4">
            {marqueeItems.map((book, index) => {
              const isHard = book.category === 'Hard Skills';
              const glowColor = isHard ? 'rgba(6,182,212,0.6)' : 'rgba(59,130,246,0.6)';

              return (
                <div
                  key={`${index}-${book.title}`}
                  className="book-container relative mx-6 md:mx-10 cursor-pointer group"
                  onClick={() => setSelectedBook(book)}
                >
                  {/* 3D BOOK */}
                  <div className="book-3d w-36 sm:w-44 aspect-[2/3] relative">
                    
                    {/* --- FRONT COVER (Лицевая сторона) --- */}
                    <div className={`absolute inset-0 rounded-sm shadow-xl z-10 overflow-hidden ${book.coverUrl ? 'bg-black' : book.coverColor} group-hover:shadow-[0_20px_40px_-10px_${glowColor}] transition-shadow duration-500`}>
                      
                      {book.coverUrl ? (
                        <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover relative z-0" />
                      ) : (
                        <div className="w-full h-full flex flex-col justify-between p-4 border border-white/10 relative z-0">
                           <BookOpen className="w-6 h-6 text-white/50" />
                           <h3 className="font-serif font-bold text-base leading-tight text-center">{book.title}</h3>
                           <div className="text-xs text-white/60 text-center">{book.author}</div>
                        </div>
                      )}
                      
                      {/* SHINE EFFECT (Белая полоса блика) */}
                      <div className="shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full z-20 pointer-events-none" style={{ transform: 'translateX(-150%)' }} />
                      
                      {/* Static Gradient for volume */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none z-10" />
                    </div>

                    {/* --- SPINE (Корешок слева) --- */}
                    <div className={`absolute left-0 top-0 bottom-0 w-8 ${book.coverColor || 'bg-gray-800'} origin-left brightness-75`} style={{ transform: 'rotateY(90deg) translateZ(-1px)' }} />
                    
                    {/* --- PAGES (Страницы справа с текстурой линий) --- */}
                    <div 
                        className="absolute right-1 top-1 bottom-1 w-8 origin-right" 
                        style={{ 
                            transform: 'rotateY(90deg) translateZ(6px)',
                            backgroundColor: '#fffcf5',
                            backgroundImage: 'repeating-linear-gradient(to bottom, #fffcf5 0px, #fffcf5 2px, #d1d5db 3px)'
                        }} 
                    />

                    {/* --- BACK COVER (Задняя часть) --- */}
                    <div className="absolute inset-0 bg-gray-900 rounded-sm" style={{ transform: 'translateZ(-30px)' }} />
                  </div>

                  {/* Category Badge */}
                  <div className="mt-8 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase border backdrop-blur-md ${
                          isHard 
                          ? 'border-cyan-500/50 text-cyan-300 bg-cyan-950/80' 
                          : 'border-blue-500/50 text-blue-300 bg-blue-950/80'
                      }`}>
                          {book.category}
                      </span>
                  </div>
                </div>
              );
            })}
          </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBook(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#111827] border border-white/10 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
               {/* Close Button */}
               <button 
                 onClick={() => setSelectedBook(null)}
                 className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-white bg-black/50 rounded-full transition-colors"
               >
                 <X size={20} />
               </button>

               {/* Left: Book Cover */}
               <div className="w-full md:w-2/5 bg-gradient-to-br from-gray-900 to-black p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  
                  {/* Blurred Background Image */}
                  {selectedBook.coverUrl && (
                      <img src={selectedBook.coverUrl} className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110" />
                  )}

                  <div className={`w-40 sm:w-48 aspect-[2/3] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 rounded overflow-hidden transform hover:scale-105 transition-transform duration-500 ${selectedBook.coverUrl ? '' : selectedBook.coverColor}`}>
                     {selectedBook.coverUrl ? (
                        <img src={selectedBook.coverUrl} className="w-full h-full object-cover" />
                     ) : (
                        <div className="w-full h-full flex items-center justify-center p-4 text-center border border-white/20">
                            <span className="font-serif font-bold text-white text-xl">{selectedBook.title}</span>
                        </div>
                     )}
                  </div>
               </div>

               {/* Right: Info */}
               <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col overflow-y-auto">
                  
                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-3 ${
                        selectedBook.category === 'Hard Skills' 
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                        {selectedBook.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{selectedBook.title}</h3>
                    <p className="text-lg text-gray-400 font-medium">Автор: {selectedBook.author}</p>
                  </div>

                  <div className="space-y-6">
                    {/* Quote */}
                    <div className="relative pl-6 border-l-2 border-amber-500/50 italic text-gray-300">
                        <Quote className="absolute -top-2 -left-3 w-6 h-6 text-amber-500 bg-[#111827] p-1" />
                        "{selectedBook.quote}"
                    </div>

                    {/* Question */}
                    <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                        <div className="flex items-center gap-2 text-cyan-400 mb-2">
                           <HelpCircle size={16} />
                           <span className="font-bold text-xs uppercase tracking-wider">Ключевой вопрос</span>
                        </div>
                        <p className="text-white font-medium text-lg">{selectedBook.question}</p>
                    </div>

                    {/* Description */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">О чем книга</h4>
                        <p className="text-gray-400 leading-relaxed text-sm">{selectedBook.description}</p>
                    </div>
                  </div>

               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BooksSection;