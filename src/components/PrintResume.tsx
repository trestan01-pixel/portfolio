import React from 'react';
import { Phone, Mail, Linkedin, Globe, Briefcase, Award, BookOpen } from 'lucide-react';
import { PortableText } from '@portabletext/react';

// Типы данных
interface PrintResumeProps {
  data: {
    siteSettings: any;
    experience: any[];
    skills: any[];
    education: any[];
  }
}

// --- УЛУЧШЕННЫЕ ХЕЛПЕРЫ ДЛЯ ДАННЫХ ---
const formatDate = (dateStr?: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long' });
};

const getYear = (course: any) => {
  const dateStr = course.startDate || course.year || course.completionDate;
  if (!dateStr) return 'Н/Д';
  if (typeof dateStr === 'number' && dateStr.toString().length === 4) return dateStr.toString();
  const date = new Date(dateStr);
  if (!isNaN(date.getTime())) return date.getFullYear().toString();
  return dateStr.toString();
};

// --- ОСНОВНОЙ КОМПОНЕНТ ---
const PrintResume: React.FC<PrintResumeProps> = ({ data }) => {
  const { siteSettings, experience, skills, education } = data;

  if (!siteSettings) return null;

  // Фильтруем навыки
  const businessSkills = skills.filter(s => s.category === 'business').map(s => s.title);
  const techSkills = skills.filter(s => ['nocode', 'ai', 'data'].includes(s.category)).map(s => s.title);
  const managementSkills = skills.filter(s => s.category === 'management').map(s => s.title);

  return (
    <div className="print-only font-sans">
      {/* HEADER */}
      <header className="text-center mb-4 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800">Руслан Юмагулов</h1>
        <p className="text-lg text-cyan-700 font-medium">Business Architect & COO / Digital Transformation</p>
      </header>

      {/* CONTACTS */}
      <section className="flex justify-center items-center gap-x-4 gap-y-1 text-sm mb-4 flex-wrap">
        {siteSettings.phone && <div className="flex items-center gap-2"><Phone size={14} /> {siteSettings.phone}</div>}
        {siteSettings.email && <div className="flex items-center gap-2"><Mail size={14} /> {siteSettings.email}</div>}
        {siteSettings.linkedin && <div className="flex items-center gap-2"><Linkedin size={14} /> {siteSettings.linkedin}</div>}
        {siteSettings.address && <div className="flex items-center gap-2"><Globe size={14} /> {siteSettings.address}</div>}
      </section>

      {/* EXPERIENCE */}
      <section className="mb-4">
        <h2 className="text-xl font-bold border-b-2 border-cyan-600 pb-1 mb-3 flex items-center gap-2"><Briefcase /> Опыт работы</h2>
        {experience.map((job, index) => (
          <div key={index} className="mb-3 break-inside-avoid">
            <div className="flex justify-between items-baseline">
              <h3 className="text-base font-bold text-gray-800">{job.company}</h3>
              <p className="text-xs text-gray-600 font-mono">
                {formatDate(job.startDate)} – {job.isCurrent ? 'наст. время' : formatDate(job.endDate)}
              </p>
            </div>
            <p className="font-semibold text-cyan-800 mb-1">{job.role}</p>
            <div className="prose prose-sm max-w-none text-gray-700">
              {Array.isArray(job.description) ? <PortableText value={job.description} /> : <p>{job.description}</p>}
            </div>
          </div>
        ))}
      </section>
      
      {/* SKILLS */}
      <section className="mb-4">
        <h2 className="text-xl font-bold border-b-2 border-cyan-600 pb-1 mb-3 flex items-center gap-2"><Award /> Ключевые компетенции</h2>
        <div className="grid grid-cols-3 gap-4 text-xs">
           <div className="break-inside-avoid">
             <h4 className="font-bold mb-1">Бизнес-архитектура</h4>
             {businessSkills.length > 0 ? (
                <ul className="list-disc list-inside text-gray-700">
                    {businessSkills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
             ) : (<p className="text-gray-500 italic">Нет данных</p>)}
           </div>
           <div className="break-inside-avoid">
             <h4 className="font-bold mb-1">Технологии и Автоматизация</h4>
             {techSkills.length > 0 ? (
                <ul className="list-disc list-inside text-gray-700">
                    {techSkills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
             ) : (<p className="text-gray-500 italic">Нет данных</p>)}
           </div>
           <div className="break-inside-avoid">
             <h4 className="font-bold mb-1">Менеджмент</h4>
             {managementSkills.length > 0 ? (
                <ul className="list-disc list-inside text-gray-700">
                    {managementSkills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
             ) : (<p className="text-gray-500 italic">Нет данных</p>)}
           </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section>
        <h2 className="text-xl font-bold border-b-2 border-cyan-600 pb-1 mb-3 flex items-center gap-2"><BookOpen /> Образование и Курсы</h2>
        <ul className="list-disc list-inside text-xs text-gray-700 columns-2">
          {education.map((course, index) => {
            // ✅ УМНЫЙ ПОИСК ДАННЫХ
            const title = course.title || course.courseName;
            const organization = course.school || course.organization || course.issuingOrganization;
            const year = getYear(course);

            return (
              <li key={index} className="mb-1 break-inside-avoid">
                <strong>{title || 'Название курса'}</strong> ({organization || 'Учебный центр'}, {year})
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default PrintResume;