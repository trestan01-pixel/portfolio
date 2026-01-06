import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Phone, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

// --- НАСТРОЙКИ TELEGRAM ---
const TG_BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN;
const TG_CHAT_ID = import.meta.env.VITE_TG_CHAT_ID;

interface AuditFormProps {
  checkedCount: number;
  checkedItems: Record<number, boolean>;
  auditData: any;
}

const AuditForm: React.FC<AuditFormProps> = ({ checkedCount, checkedItems, auditData }) => {
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [shakeAnimation, setShakeAnimation] = useState(false);

  const handleSubmit = async () => {
    if (!privacyChecked) {
      setShakeAnimation(true);
      setTimeout(() => setShakeAnimation(false), 500);
      return;
    }
    if (!formData.name || !formData.contact) {
        alert("Пожалуйста, заполните имя и контакт");
        return;
    }
    
    setIsSubmitting(true);
    
    const isTotalFailure = checkedCount === 30;
    let verdict = "Зона контроля";
    if (checkedCount > 5) verdict = "Кровотечение";
    if (checkedCount > 15) verdict = "Реанимация";
    if (isTotalFailure) verdict = "SYSTEM FAILURE";

    let detailsText = "";
    auditData.sections.forEach((section: any, index: number) => {
        const selectedInBlock = section.points.filter((p: any) => checkedItems[p.id]);
        if (selectedInBlock.length > 0) {
            detailsText += `\n<b>📂 Блок ${index + 1}: ${section.heading}</b>\n`;
            selectedInBlock.forEach((p: any) => {
                detailsText += `— ${p.text}\n`;
            });
        }
    });
    if (detailsText === "") detailsText = "Ничего не выбрано";

    const messageText = `
<b>🚨 ЗАЯВКА НА РАЗБОР (из Аудита)</b>
<b>👤 Имя:</b> ${formData.name}
<b>📞 Контакт:</b> ${formData.contact}
---------------------------
<b>Проблем отмечено:</b> ${checkedCount} из 30
<b>Вердикт системы:</b> ${verdict}
<b>📋 СПИСОК ПРОБЛЕМ:</b>
${detailsText}
`;

    try {
      await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: messageText,
          parse_mode: 'HTML',
        }),
      });
      setIsSuccess(true);
    } catch (error) {
      alert("Ошибка отправки. Пожалуйста, напишите мне в Telegram напрямую: @Trestan01");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const shakeVariants = {
    initial: { x: 0 },
    shake: { 
      x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="relative rounded-2xl overflow-hidden p-8 md:p-14 text-center border border-indigo-500/30 shadow-[0_0_50px_-10px_rgba(79,70,229,0.2)] break-inside-avoid print:border-black print:shadow-none print:p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#0a0a16] to-[#050810] z-0 print:hidden"></div>
        <div className="relative z-10 space-y-8 print:space-y-4">
            <h3 className="text-3xl font-bold text-white print:text-black print:text-xl">Остановите утечку денег</h3>
            <p className="text-indigo-200 text-sm md:text-base print:text-black mb-6">
                Личный стратегический разбор с Русланом Юмагуловым. <br/>
                Оставьте контакты, чтобы мы могли связаться с вами и обсудить план действий.
            </p>
            
            <AnimatePresence mode='wait'>
                {!isSuccess ? (
                    <motion.div 
                        className="max-w-md mx-auto space-y-4"
                        variants={shakeVariants}
                        animate={shakeAnimation ? 'shake' : 'initial'}
                    >
                        <div className="relative group">
                            <label htmlFor="name" className="sr-only">Ваше имя</label>
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                            <input 
                                type="text" 
                                id="name"
                                placeholder="Ваше имя" 
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all hover-target"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="relative group">
                            <label htmlFor="contact" className="sr-only">Телефон или Telegram</label>
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                            <input 
                                type="text" 
                                id="contact"
                                placeholder="Телефон или Telegram (@username)" 
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all hover-target"
                                value={formData.contact}
                                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                            />
                        </div>
                        
                        <div className={`flex items-start gap-3 text-left p-3 rounded-lg transition-colors duration-300 ${shakeAnimation ? 'bg-red-900/50' : ''}`}>
                            <input 
                                type="checkbox" 
                                id="privacy" 
                                checked={privacyChecked}
                                onChange={(e) => setPrivacyChecked(e.target.checked)}
                                className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-500 cursor-pointer hover-target"
                            />
                            <label htmlFor="privacy" className="text-xs text-slate-400 cursor-pointer select-none">
                                Я согласен с <Link to="/privacy" target="_blank" className="text-cyan-400 hover:underline">политикой конфиденциальности</Link> и даю согласие на обработку персональных данных.
                            </label>
                        </div>

                        <button 
                            onClick={handleSubmit}
                            disabled={isSubmitting || !privacyChecked}
                            className="w-full hover-target group relative inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 text-base font-bold tracking-widest uppercase border border-slate-700 
                                shadow-[0_0_30px_rgba(6,182,212,0.3)] 
                                hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] 
                                hover:border-cyan-400 transition-all duration-300 rounded-sm
                                disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:border-slate-700 mt-4"
                        >
                            {isSubmitting ? (
                                <><Loader2 className="animate-spin" /><span>Отправка...</span></>
                            ) : (
                                <><span className="relative z-10">Записаться на разбор</span><ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-cyan-400" /></>
                            )}
                        </button>
                        {!privacyChecked && (
                             <p className="text-cyan-500 text-xs font-mono animate-pulse">
                                ↑ Сначала примите политику конфиденциальности
                             </p>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-green-500/10 border border-green-500/30 p-6 rounded-xl inline-block"
                    >
                        <div className="flex flex-col items-center gap-3 text-green-400">
                            <CheckCircle size={40} />
                            <div className="font-bold text-xl">Заявка успешно отправлена!</div>
                            <div className="text-sm opacity-80">Спасибо! Я свяжусь с вами в ближайшее время.</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </section>
  );
}

export default AuditForm;