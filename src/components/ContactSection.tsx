// src/components/ContactSection.tsx

import { Phone, Mail, MessageCircle, MapPin, Download, Send, Linkedin } from 'lucide-react';

const contactData = [
  { icon: <Phone size={20} />, text: "+7 (992) 350-09-87", href: "tel:+79923500987" },
  { icon: <Mail size={20} />, text: "Trestan01@gmail.com", href: "mailto:Trestan01@gmail.com" },
  { icon: <MessageCircle size={20} />, text: "@Trestan01", href: "https://t.me/Trestan01" },
  { icon: <Linkedin size={20} />, text: "LinkedIn", href: "https://www.linkedin.com/in/ruslan-iumagulov-baa770387/" },
  { icon: <MapPin size={20} />, text: "Екатеринбург | Удаленная работа" },
];

export default function ContactSection() {
  return (
    // ИЗМЕНЕНО: ID добавлен сюда
    <section id="contact" className="bg-[#1e1e2f] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Связаться со мной
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-xl text-gray-300">
              Готов обсудить ваши задачи по цифровой трансформации и масштабированию бизнеса
            </p>
            <div className="space-y-4">
              {contactData.map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-gray-300">
                  <div className="text-[#00d9ff]">{item.icon}</div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
              <h3 className="text-lg font-semibold">Быстрые действия</h3>
            <a
              href="/Юмагулов Руслан Юрьевич РЦТ.pdf"
              download="Юмагулов Руслан Юрьевич РЦТ.pdf"
              className="block w-full text-center bg-[#00d9ff] text-black font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
             >              
              <Download size={20} className="inline-block mr-2" />
                Скачать резюме PDF
              </a>
              <a href="https://t.me/Trestan01" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white text-[#1e1e2f] font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
                <Send size={20} className="inline-block mr-2" />
                Написать в Telegram
              </a>
              <a href="https://www.linkedin.com/in/ruslan-iumagulov-baa770387/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#1e1e2f] font-bold py-3 px-6 rounded-lg transition-all hover:scale-105">
                <Linkedin size={20} className="inline-block mr-2" />
                Перейти в LinkedIn
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              Отвечаю в течение 2-4 часов<br/>
              Готов к удаленной работе и командировкам
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}