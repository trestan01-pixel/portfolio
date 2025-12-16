import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CustomCursor from '../components/CustomCursor'; // <-- ВОЗВРАЩАЕМ КУРСОР

// ... auditData ...

const AuditPage = () => {
  const [selected, setSelected] = useState<number[]>([]);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const togglePoint = (index: number) => setSelected(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);

  const totalPoints = selected.length;
  let verdict: 'safe' | 'warning' | 'critical' = 'safe';
  if (totalPoints >= 6 && totalPoints <= 15) verdict = 'warning';
  if (totalPoints > 15) verdict = 'critical';
  
  let pointCounter = 0;

  return (
    <div className="bg-[#0B0F19] text-white font-sans">
      <CustomCursor /> {/* <-- ВОЗВРАЩАЕМ КУРСОР */}
      <Header />
      <main className="pt-24">
        {/* ... вся верстка страницы аудита ... */}
        
        {/* Блок вердикта и CTA */}
        <div className="text-center py-16">
            {/* ... вердикт ... */}
            <div className="mt-12 bg-indigo-900/20 ...">
                {/* ... CTA ... */}
            </div>
            {/* КНОПКА ПЕЧАТИ УДАЛЕНА */}
        </div>
      </main>
    </div>
  );
};

export default AuditPage;