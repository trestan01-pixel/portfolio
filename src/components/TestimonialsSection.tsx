import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Quote, Building2, User, Briefcase } from 'lucide-react';

interface TestimonialsProps {
  items?: any[];
}

const TestimonialsSection: React.FC<TestimonialsProps> = () => {
  
  // Получаем базовый путь (например, '/portfolio/' или просто '/')
  const basePath = import.meta.env.BASE_URL;

  // Функция-хелпер для склеивания пути (чтобы не дублировать слэши)
  const getPath = (fileName: string) => {
    // Убираем слэш в начале имени файла, если он есть, и соединяем с basePath
    const cleanName = fileName.startsWith('/') ? fileName.slice(1) : fileName;
    return `${basePath}${cleanName}`;
  };

  const testimonials = [
    {
      text: (
        <>
          Мы тонули в Excel, а клиенты ждали ответа днями. Руслан не просто внедрил CRM — он пересобрал всю логику продаж. Время обработки заявки сократилось <span className="text-cyan-400 font-medium">с 4 дней до 15 минут</span>. Это не просто автоматизация, это квантовый скачок в эффективности отдела.
        </>
      ),
      author: "Кристина",
      role: "РОП",
      company: "Школьная Лига",
      // Иконка категории (сверху)
      categoryIcon: <User className="w-6 h-6 text-purple-400" />,
      // Логотип (снизу) - используем правильный путь
      photo: getPath('sl.png')
    },
    {
      text: (
        <>
          Мне нужен был не просто исполнитель, а архитектор бизнеса. Руслан с нуля спроектировал IT-ядро платформы Karso. Теперь система «переваривает» 10 000+ заявок, а время оформления упало <span className="text-cyan-400 font-medium">с 3 часов до 10 минут</span>. Именно этот фундамент позволил нам стать лидерами рынка.
        </>
      ),
      author: "Александр Метёлкин",
      role: "Директор",
      company: "Karso",
      categoryIcon: <Briefcase className="w-6 h-6 text-cyan-400" />,
      photo: getPath('karso.png')
    },
    {
      text: (
        <>
          Из стартап-хаоса мы превратились в системную машину. Руслан выстроил «цифровой скелет» клиники и дашборды, которые показали, где мы теряем деньги. Результат за 2 года: <span className="text-cyan-400 font-medium">оборот вырос в 3 раза</span>, стоимость лида (CPL) <span className="text-cyan-400 font-medium">упала в 2.2 раза</span>.
        </>
      ),
      author: "Константин Усанов",
      role: "Исполнительный директор",
      company: "Medion",
      categoryIcon: <Building2 className="w-6 h-6 text-blue-400" />,
      photo: getPath('medion.png')
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-blue-900/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title="Рекомендации" subtitle="Результаты внедрения системы глазами собственников" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-gray-800 relative hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all flex flex-col group h-full"
            >
              {/* --- ХЕДЕР: Иконка категории и кавычка --- */}
              <div className="mb-6 flex justify-between items-start">
                 <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-cyan-500/20 transition-colors">
                   {item.categoryIcon}
                 </div>
                 <Quote className="text-gray-700 w-8 h-8 group-hover:text-cyan-500/20 transition-colors" />
              </div>
              
              {/* --- ТЕКСТ --- */}
              <div className="text-gray-300 italic mb-8 leading-relaxed flex-grow relative z-10 text-sm md:text-base">
                "{item.text}"
              </div>
              
              {/* --- ПОДВАЛ: Логотип компании и Имя --- */}
              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-800">
                
                {/* Кружок с логотипом */}
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-600 overflow-hidden shrink-0">
                   {item.photo ? (
                     <img 
                       src={item.photo} 
                       alt={item.company}
                       className="w-full h-full object-contain p-1"
                       onError={(e) => {
                         // Если вдруг картинка все равно не грузится - скрываем её
                         (e.target as HTMLImageElement).style.display = 'none';
                       }}
                     />
                   ) : (
                     <span className="text-black font-bold">{item.author[0]}</span>
                   )}
                </div>
                
                <div>
                  <div className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">{item.author}</div>
                  <div className="text-xs text-gray-500">
                       {item.role}, <span className="text-gray-400">{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;