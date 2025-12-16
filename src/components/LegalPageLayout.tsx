import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CustomCursor from './CustomCursor'; // Добавим кастомный курсор и сюда

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, children }) => {
  // Прокрутка вверх при загрузке страницы
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-500 selection:text-white">
      <CustomCursor />
      
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Кнопка "Вернуться на главную" */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Вернуться на главную</span>
          </Link>

          {/* Главный заголовок страницы */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 border-b border-white/10 pb-6">
            {title}
          </h1>

          {/* Контентная область со стилями для текста */}
          <div className="prose prose-invert prose-lg max-w-none 
                        prose-h2:text-2xl prose-h2:font-bold prose-h2:text-cyan-400 prose-h2:mb-4 prose-h2:mt-8
                        prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-300
                        prose-strong:text-white">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalPageLayout;