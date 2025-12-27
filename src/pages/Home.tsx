import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Импорты всех компонентов
import Header from '../components/Header';
import Hero from '../components/HeroSection';
import PainPoints from '../components/PainPoints';
import ChaosToSystem from '../components/ChaosToSystem'; // Wow-эффект
import ChaosCalculator from '../components/ChaosCalculator';
import Stats from '../components/MetricsSection';
import Cases from '../components/ProjectsSection';
import Services from '../components/ServicesSection';
import Workflow from '../components/Workflow';
import About from '../components/AboutSection';
import Experience from '../components/ExperienceSection';
import Skills from '../components/CompetenciesSection';
import Stack from '../components/TechStackSection';
import Education from '../components/EducationSection';
import Testimonials from '../components/TestimonialsSection';
import Books from '../components/BooksSection';
import Footer from '../components/ContactSection';
import LogoMarquee from '../components/LogoMarquee';
import FAQ from '../components/FAQ';
import CustomCursor from '../components/CustomCursor';
import PrintResume from '../components/PrintResume';

// Интерфейсы для данных из CMS
interface SiteData {
  siteSettings: any;
  experience: any[];
  projects: any[];
  skills: any[];
  testimonials: any[];
  education: any[];
  books: any[];
  faq: any[];
  workflow: any[];
}

interface HomeProps {
  data: SiteData;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState<'default' | 'matrix' | 'white'>('default');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.remove('matrix-mode', 'white-mode');
    if (theme === 'matrix') document.body.classList.add('matrix-mode');
    else if (theme === 'white') document.body.classList.add('white-mode');
  }, [theme]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- ЕДИНСТВЕННЫЙ RETURN С ПРАВИЛЬНОЙ СТРУКТУРОЙ ---
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-500 selection:text-white relative">
      <CustomCursor />
      
      {/* Прогресс-бар скролла */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <Header />
      
      {/* --- 1. HERO --- */}
      <div id="hero">
        <Hero data={data.siteSettings} />
      </div>
      
      {/* --- 2. PAIN POINTS --- */}
      <div id="pain">
        <PainPoints />
      </div>

      {/* --- 3. WOW-ЭФФЕКТ: ТРАНСФОРМАЦИЯ --- */}
      <ChaosToSystem />

      {/* --- 4. CALCULATOR --- */}
      <div id="calculator">
         <ChaosCalculator />
      </div>

      {/* --- 5. STATS (METRICS) --- */}
      <div id="stats">
        <Stats metrics={data.siteSettings?.metrics} />
      </div>

      {/* --- 6. CASES (PROJECTS) --- */}
      <div id="cases">
        <Cases projects={data.projects} />
      </div>
      
      {/* --- 7. SERVICES (METHOD) --- */}
      <div id="services">
        <Services />
      </div>

      {/* --- 8. PROCESS (WORKFLOW) --- */}
      <div id="process">
        <Workflow steps={data.workflow} />
      </div>

      {/* --- 9. AUTHORITY BLOCK (ABOUT, EXPERIENCE, SKILLS) --- */}
      <div id="about">
        <About data={data.siteSettings} onThemeChange={setTheme} currentTheme={theme} />
      </div>
      <div id="experience">
        <Experience experiences={data.experience} />
      </div>
      <LogoMarquee />
      <div id="skills"><Skills skills={data.skills} /></div>
      <div id="stack"><Stack /></div>
      <div id="education"><Education items={data.education} /></div>
      <div id="testimonials"><Testimonials items={data.testimonials} /></div>
      
      {/* --- 10. FAQ --- */}
      <div id="faq">
        <FAQ items={data.faq} />
      </div>

      {/* --- 11. BOOKS --- */}
      <div id="books"><Books items={data.books} /></div>
      
      {/* --- 12. CONTACT --- */}
      <div id="contact">
        <Footer contact={data.siteSettings} />
      </div>
      
      {/* Скрытый компонент для печати */}
      {data.siteSettings && <PrintResume data={data} />}

      {/* Кнопка "Наверх" */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? 'auto' : 'none'
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 p-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full shadow-lg shadow-cyan-500/30 transition-colors"
        aria-label="Вернуться наверх"
      >
        <ArrowUp size={24} />
      </motion.button>
    </main>
  );
};

export default Home;