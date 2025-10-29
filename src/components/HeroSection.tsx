// src/components/HeroSection.tsx

import { Download, ExternalLink, Phone, Mail, MessageCircle } from 'lucide-react';
import FlippingText from './FlippingText';

const ScrollIndicator = () => (
  <div className="w-8 h-14 border-2 border-[#00d9ff] rounded-full flex justify-center pt-2 animate-bounce">
    <div className="w-1 h-3 bg-[#00d9ff] rounded-full"></div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="bg-[#1e1e2f] text-white min-h-screen flex flex-col items-center justify-center text-center p-6 relative">
      <div className="flex flex-col items-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider text-[#00d9ff]">
          Руслан Юмагулов
        </h1>
        <FlippingText />
        <p className="text-lg text-gray-400">
          Превращаю хаос в предсказумую систему для масштабирования вашего бизнеса.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-300 pt-2">
          <a href="tel:+79923500987" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={18} /><span>+7 (992) 350-09-87</span></a>
          <a href="mailto:Trestan01@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={18} /><span>Trestan01@gmail.com</span></a>
          <a href="https://t.me/Trestan01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors"><MessageCircle size={18} /><span>@Trestan01</span></a>
        </div>
        <div className="flex items-center gap-4 pt-4">
          <a href="/resume-ruslan-yumagulov.pdf" download="resume-ruslan-yumagulov.pdf" className="bg-[#00d9ff] hover:bg-[#00b8e6] text-black font-bold px-6 py-3 rounded-md text-base flex items-center gap-2 transition-transform hover:scale-105"><Download size={20} /><span>Скачать резюме</span></a>
          <a href="#contact" className="bg-transparent border-2 border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff] hover:text-black font-bold px-6 py-3 rounded-md text-base flex items-center gap-2 transition-all hover:scale-105"><ExternalLink size={20} /><span>Связаться</span></a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>
    </section>
  );
}
