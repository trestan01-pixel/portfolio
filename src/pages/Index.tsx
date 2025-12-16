// src/pages/Index.tsx

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
// ИЗМЕНЕНО: Импортируем компонент анимации
import { Slide } from "react-awesome-reveal";

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MetricsSection from '@/components/MetricsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CompetenciesSection from '@/components/CompetenciesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TechStackSection from '@/components/TechStackSection';
import EducationSection from '@/components/EducationSection';
import BooksSection from '@/components/BooksSection';
import ContactSection from '@/components/ContactSection';

export default function Index() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) { setShowScrollTop(true); } 
      else { setShowScrollTop(false); }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Первый блок анимировать не нужно, он и так виден */}
      <HeroSection />

      {/* ИЗМЕНЕНО: Каждая следующая секция обернута в <Slide> */}
      <Slide direction="left" triggerOnce={true}>
        <AboutSection />
      </Slide>
      
      <Slide direction="right" triggerOnce={true}>
        <MetricsSection />
      </Slide>
      
      <Slide direction="left" triggerOnce={true}>
        <ExperienceSection />
      </Slide>
      
      <Slide direction="right" triggerOnce={true}>
        <CompetenciesSection />
      </Slide>

      <Slide direction="left" triggerOnce={true}>
        <TestimonialsSection />
      </Slide>
      
      <Slide direction="right" triggerOnce={true}>
        <ProjectsSection />
      </Slide>
      
      <Slide direction="left" triggerOnce={true}>
        <TechStackSection />
      </Slide>
      
      <Slide direction="right" triggerOnce={true}>
        <EducationSection />
      </Slide>

      <Slide direction="left" triggerOnce={true}>
        <BooksSection />
      </Slide>

      <Slide direction="right" triggerOnce={true}>
        <ContactSection />
      </Slide>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#00d9ff] text-black rounded-full p-3 shadow-lg hover:bg-[#00b8e6] hover:scale-110 transition-all duration-300"
          aria-label="Вернуться наверх"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </main>
  );
}