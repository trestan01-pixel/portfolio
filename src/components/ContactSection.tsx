import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, ArrowRight, Linkedin, Loader2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', contact: '', message: '' });
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- НАСТРОЙКИ TELEGRAM ---
  // Вставьте сюда ваши данные
  const TG_BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN;
  const TG_CHAT_ID = import.meta.env.VITE_TG_CHAT_ID;     // Пример: '123456789'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isChecked) return;
    setIsSubmitting(true);

    // Формируем сообщение для отправки
    const messageText = `
<b>🔥 Новая заявка с сайта!</b>

<b>Имя:</b> ${formState.name}
<b>Контакт:</b> ${formState.contact}
<b>Задача:</b> ${formState.message}
`;

    try {
      // Отправляем запрос к API Telegram
      const response = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: messageText,
          parse_mode: 'HTML', // Позволяет использовать жирный шрифт
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormState({ name: '', contact: '', message: '' });
        setIsChecked(false);
      } else {
        throw new Error('Ошибка Telegram API');
      }
      
    } catch (error) {
      console.error(error);
      alert("Ошибка отправки. Проверьте подключение к интернету или напишите напрямую.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Левая колонка */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block">
              Start Transformation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Готовы навести <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                порядок в бизнесе?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Не ждите, пока хаос поглотит прибыль. Опишите вашу задачу сейчас, и мы проведем первичную диагностику точек роста за 30 минут.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Телефон / WhatsApp</p>
                  <a href="tel:+79923500987" className="text-white font-medium hover:text-blue-400 transition-colors">
                    +7 (992) 350-09-87
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group">
                <div className="bg-purple-600/20 p-3 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
                  <a href="mailto:Trestan01@gmail.com" className="text-white font-medium hover:text-purple-400 transition-colors">
                    Trestan01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="https://t.me/RuslanPortfolioBot?start=audit_request" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 px-4 rounded-lg bg-[#229ED9]/10 border border-[#229ED9]/20 text-[#229ED9] flex items-center justify-center gap-2 hover:bg-[#229ED9]/20 transition-all font-medium">
                  <Send size={18} /> Telegram
                </a>
                <a href="https://www.linkedin.com/in/ruslan-iumagulov/" target="_blank" rel="noopener noreferrer" className="flex-1 py-3 px-4 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/20 text-[#0077B5] flex items-center justify-center gap-2 hover:bg-[#0077B5]/20 transition-all font-medium">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Правая колонка: Форма */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#111827] border border-white/10 rounded-2xl p-8 shadow-2xl relative min-h-[500px] flex flex-col justify-center"
          >
             <AnimatePresence mode='wait'>
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-6">Заявка на стратегию</h3>
                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                      <div>
                        <label htmlFor="contact-name" className="text-sm text-gray-400 mb-2 block">
                          Ваше имя <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="Иван Иванов"
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-contact" className="text-sm text-gray-400 mb-2 block">
                          Контакты (Телефон или Telegram) <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-contact"
                          type="text"
                          required
                          placeholder="@username / +7..."
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                          value={formState.contact}
                          onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="text-sm text-gray-400 mb-2 block">
                          Какую задачу нужно решить? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          required
                          placeholder="Например: хочу выйти из операционки, масштабировать продажи или внедрить CRM..."
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-gray-600"
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                      </div>
                      <div className="flex items-start space-x-3 pt-2">
                        <input 
                          id="terms" 
                          type="checkbox" 
                          required
                          checked={isChecked} 
                          onChange={(e) => setIsChecked(e.target.checked)} 
                          className="h-4 w-4 mt-1 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-600 shrink-0 cursor-pointer" 
                        />
                        <label htmlFor="terms" className="text-xs text-gray-400 cursor-pointer select-none">
                          Принимаю <Link to="/privacy" target="_blank" className="text-blue-400 hover:underline">Политику конфиденциальности</Link> и даю согласие на обработку персональных данных.
                        </label>
                      </div>
                      <button 
                        type="submit" 
                        disabled={!isChecked || isSubmitting} 
                        className={`w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg transition-all transform flex items-center justify-center gap-2 
                          ${isChecked && !isSubmitting ? 'opacity-100 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1' : 'opacity-50 cursor-not-allowed'}
                        `}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            <span>Отправка...</span>
                          </>
                        ) : (
                          <>
                            <span>Получить план действий</span>
                            <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Заявка отправлена!</h3>
                    <p className="text-gray-400 mb-8">
                      Спасибо, {formState.name || 'гость'}. Я уже получил уведомление в Telegram и скоро отвечу.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Отправить еще одну заявку
                    </button>
                  </motion.div>
                )}
             </AnimatePresence>
          </motion.div>
        </div>
        
        {/* Footer info */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          <p className="mb-4">
            Самозанятый Юмагулов Руслан Юрьевич
            <span className="mx-2 text-gray-700">|</span>
            ИНН: 860201805862
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Политика конфиденциальности</Link>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <Link to="/offer" className="hover:text-gray-300 transition-colors">Договор оферты</Link>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <Link to="/nda" className="hover:text-gray-300 transition-colors">Соглашение о неразглашении</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;