import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FileCode, ChevronDown, Search, X, Tag, Link as LinkIcon, Book } from 'lucide-react';
import { blueprintData } from './data/blueprintData';
import { ContentRenderer } from './components/ContentRenderer';

const ProjectBlueprint: React.FC = () => {
  // --- ЗАЩИТА ОТ ОШИБОК ---
  if (!blueprintData || blueprintData.length === 0) {
    return <div className="flex h-screen items-center justify-center bg-[#0B0F19] text-white">No Blueprint Data Found</div>;
  }
  
  const defaultTome = blueprintData[0];
  const defaultChapter = defaultTome.chapters[0];

  // --- STATE MANAGEMENT ---
  const [activeTomeId, setActiveTomeId] = useState<string | null>(defaultTome.id);
  const [activeChapterId, setActiveChapterId] = useState<string>(defaultChapter.id);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // --- DATA PROCESSING (MEMOIZED) ---
  const allTags = useMemo(() => {
    const tags = blueprintData.flatMap(tome => tome.chapters.flatMap(ch => ch.tags || []));
    return [...new Set(tags)].sort();
  }, []);

  const filteredBlueprintData = useMemo(() => {
    return blueprintData
      .map(tome => {
        const filteredChapters = tome.chapters.filter(chapter => {
          const matchesSearch = searchTerm 
            ? chapter.russianTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
              chapter.englishTitle.toLowerCase().includes(searchTerm.toLowerCase())
            : true;
          
          const matchesTag = activeTag 
            ? chapter.tags?.includes(activeTag) 
            : true;

          return matchesSearch && matchesTag;
        });
        return { ...tome, chapters: filteredChapters };
      })
      .filter(tome => tome.chapters.length > 0);
  }, [searchTerm, activeTag]);

  const activeChapterData = blueprintData.flatMap(tome => tome.chapters).find(chapter => chapter.id === activeChapterId);
  const activeTomeData = blueprintData.find(tome => tome.chapters.some(ch => ch.id === activeChapterId));

  const relatedChapters = useMemo(() => {
    if (!activeChapterData?.related) return [];
    const allChapters = blueprintData.flatMap(tome => tome.chapters.map(ch => ({ ...ch, tomeTitle: tome.title })));
    return activeChapterData.related.map(id => allChapters.find(ch => ch.id === id)).filter(Boolean);
  }, [activeChapterData]);


  // --- HANDLERS ---
  const toggleTome = (id: string) => setActiveTomeId(activeTomeId === id ? null : id);
  const handleTagClick = (tag: string | null) => setActiveTag(activeTag === tag ? null : tag);

  // --- ANIMATION VARIANTS ---
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  return (
    <div className="flex h-screen bg-[#0B0F19] text-[#e5e7eb] font-sans selection:bg-[#22d3ee] selection:text-[#0B0F19] overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-[320px] h-full flex flex-col border-r border-gray-800 bg-[#0B0F19]/95 backdrop-blur-xl z-20 shrink-0">
        <div className="p-8 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-[#22d3ee] rounded-sm shadow-[0_0_10px_#22d3ee]"></div>
            <h1 className="text-xl font-bold font-mono tracking-widest text-white">BLUEPRINT</h1>
          </div>
          <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]">System Architecture</p>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="p-4 border-b border-gray-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Поиск по разделам..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-[#111827] border border-gray-700 rounded-lg pl-9 pr-8 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#22d3ee]/50 transition-all" />
            {searchTerm && <button onClick={() => setSearchTerm('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"><X size={14}/></button>}
          </div>
          
          <AnimatePresence>
            {allTags.length > 0 && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                    <Tag size={12} className="text-gray-500" />
                    <h3 className="text-xs text-gray-500 font-bold uppercase tracking-wider">Теги</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => handleTagClick(null)} className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${!activeTag ? 'bg-[#22d3ee] text-black' : 'bg-[#1f2937] text-gray-400 hover:bg-[#22d3ee]/20 hover:text-white'}`}>Все</button>
                  {allTags.map(tag => (
                    <button key={tag} onClick={() => handleTagClick(tag)} className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${activeTag === tag ? 'bg-[#22d3ee] text-black' : 'bg-[#1f2937] text-gray-400 hover:bg-[#22d3ee]/20 hover:text-white'}`}># {tag}</button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* NAV */}
        <nav className="flex-1 overflow-y-auto p-4 scrollbar-hide">
          {filteredBlueprintData.map((tome) => (
            <div key={tome.id} className="mb-2">
              <button onClick={() => toggleTome(tome.id)} className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 group ${activeTomeId === tome.id ? 'bg-[#1f2937] text-white border border-gray-700' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}>
                <div className="flex items-center gap-3"><Folder size={16} className={`transition-colors ${activeTomeId === tome.id ? 'text-[#22d3ee]' : 'text-gray-600 group-hover:text-gray-400'}`} /><span className="text-xs font-bold uppercase tracking-wide">{tome.title}</span></div>
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeTomeId === tome.id ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {(activeTomeId === tome.id || searchTerm || activeTag) && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    style={{ transformOrigin: 'top' }}
                  >
                    <div className="mt-2 ml-3 pl-3 border-l border-gray-800 space-y-1">
                      {tome.chapters.map((chapter) => {
                        const isActive = activeChapterId === chapter.id;
                        return (
                          <button 
                            key={chapter.id} 
                            onClick={() => setActiveChapterId(chapter.id)}
                            // ✅ ИСПРАВЛЕНИЕ: Добавляем min-w-0 к flex-контейнеру
                            className="relative w-full min-w-0 text-left pl-4 pr-3 py-2 text-sm rounded transition-all group flex items-center gap-3"
                          >
                            {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#22d3ee] rounded-r-full shadow-[0_0_10px_rgba(34,211,238,0.7)]" />}
                            
                            <FileCode size={12} className={`${isActive ? 'text-[#22d3ee]' : 'text-gray-600 group-hover:text-gray-400 transition-colors'}`} />
                            <span className={`font-mono truncate ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300 transition-colors'}`}>
                              {chapter.russianTitle}
                            </span> 
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
           {filteredBlueprintData.length === 0 && <div className="text-center py-10 text-gray-500 text-xs font-mono">NO DATA FOUND</div>}
        </nav>
        
        <div className="p-4 border-t border-gray-800 bg-[#05080f]"><div className="flex items-center gap-2 text-[10px] font-mono text-gray-600"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse">
        </span>SYSTEM ONLINE :: V.2.4.0</div></div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 h-full overflow-y-auto bg-gradient-to-br from-[#0B0F19] to-[#0f1421] relative scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <AnimatePresence mode='wait'>
          {activeChapterData && (
            <motion.div key={activeChapterData.id} className="max-w-5xl mx-auto px-16 py-16 relative z-10 min-h-full flex flex-col" variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
              <motion.div variants={itemVariants}>
                <div className="mb-6 font-mono text-xs uppercase text-gray-500 tracking-widest flex items-center gap-2"><span>//_ROOT</span><span>/</span><span className="text-gray-400">{activeTomeData?.title}</span><span>/</span><span className="text-[#22d3ee]">{activeChapterData.russianTitle}</span></div>
              </motion.div>
              <motion.div variants={itemVariants} className="mb-10 pb-6 border-b border-gray-800/50">
                 <h2 className="text-4xl font-bold text-white mb-2 font-mono tracking-tight">{activeChapterData.englishTitle}</h2>
                 <p className="text-xl text-gray-500 font-light">{activeChapterData.russianTitle}</p>
              </motion.div>

              <motion.div variants={itemVariants}><ContentRenderer htmlContent={activeChapterData.content} /></motion.div>
              
              <AnimatePresence>
                {relatedChapters.length > 0 && (
                   <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-gray-800/50" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }}>
                      <div className="flex items-center gap-3 mb-6">
                        <LinkIcon size={16} className="text-gray-500" />
                        <h3 className="text-lg font-bold text-white">Смотри также</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {relatedChapters.map((related: any) => (
                           <button key={related.id} onClick={() => setActiveChapterId(related.id)} className="p-4 bg-[#111827] border border-gray-800 rounded-lg text-left hover:border-[#22d3ee] hover:bg-[#1f2937] transition-all duration-300 group">
                              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2 group-hover:text-[#22d3ee] transition-colors"><Book size={10} /> {related.tomeTitle}</div>
                              <div className="font-bold text-white group-hover:text-[#22d3ee] transition-colors">{related.englishTitle}</div>
                              <div className="text-xs text-gray-400">{related.russianTitle}</div>
                           </button>
                        ))}
                      </div>
                   </motion.div>
                )}
              </AnimatePresence>
              <div className="h-32"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ProjectBlueprint;