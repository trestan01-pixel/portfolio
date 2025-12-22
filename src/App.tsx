// Файл: src/App.tsx (ФИНАЛЬНАЯ ИСПРАВЛЕННАЯ ВЕРСЯ)

import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import { AnimatePresence } from 'framer-motion';

import { client } from './sanityClient';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Preloader from './components/Preloader';

// --- 1. ИСПРАВЛЕН ИМПОРТ: Имя совпадает с именем компонента ---
import ChaosAuditPage from './features/ChaosAudit/ChaosAuditPage';

// Импорт остальных страниц
import DisclosurePage from './pages/DisclosurePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import BpmnVisualizerPage from './pages/BpmnVisualizerPage'; 
import SystemPage from './pages/SystemPage';
import CustomCursor from './components/CustomCursor';
import ProjectBlueprint from './features/ProjectBlueprint/ProjectBlueprint';

import './print.css';

// Интерфейс данных (без изменений)
interface SiteData {
    siteSettings: any; experience: any[]; projects: any[]; skills: any[];
    testimonials: any[]; education: any[]; books: any[]; faq: any[]; workflow: any[];
}

// --- 2. ИСПРАВЛЕН ЗАПРОС: Добавлена пропущенная запятая ---
const query = `
  {
    "siteSettings": *[_type == "siteSettings"][0],
    "experience": *[_type == "experience"] | order(startDate desc),
    "projects": *[_type == "project"] | order(_createdAt desc),
    "skills": *[_type == "skill"],
    "testimonials": *[_type == "testimonial"],
    "education": *[_type == "education"],
    "books": *[_type == "book"],
    "faq": *[_type == "faq"],
    "workflow": *[_type == "workflow"]
  }
`;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SiteData>({
    siteSettings: null, experience: [], projects: [], skills: [], testimonials: [],
    education: [], books: [], faq: [], workflow: []
  });

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await client.fetch(query);
            if (result) { setData(result); }
        } catch (error) {
            console.error("❌ Ошибка загрузки из Sanity:", error);
        } finally {
            setTimeout(() => setLoading(false), 2500);
        }
    };
    fetchData();
  }, []);

  return (
    <>
      <CustomCursor /> 
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            {/* Имя в роуте теперь совпадает с импортом */}
            <Route path="/audit" element={<ChaosAuditPage />} /> 
            <Route path="/nda" element={<DisclosurePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/offer" element={<TermsPage />} />
            <Route path="/system" element={<SystemPage />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/blueprint" element={<ProjectBlueprint />} />
          </Routes>
        </HashRouter>
      )}
    </>
  );
};

export default App;