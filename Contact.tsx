
import React from 'react';
import { Page } from '../types';
import { Header, Card } from '../components/Shared';
import { PROFILE_IMAGE } from '../constants';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const contacts = [
    { icon: 'mail', label: 'E-mail', val: 'asbel.nascimento157@gmail.com', link: 'mailto:asbel.nascimento157@gmail.com' },
    { icon: 'phone_in_talk', label: 'Telefone', val: '+55 13 99631-9533', link: 'tel:+5513996319533' },
    { icon: 'link', label: 'LinkedIn', val: 'linkedin/asbeldev', link: 'https://linkedin.com/in/asbeldev' },
    { icon: 'location_on', label: 'Localização', val: 'Guarujá, SP', link: '#' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <Header title="Contato" onBack={() => onNavigate(Page.HOME)} />
      
      <div className="p-6 space-y-8 flex-1">
        <div className="flex flex-col items-center py-6 text-center">
          <div className="relative mb-6">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary to-blue-400 blur-md opacity-30 animate-pulse"></div>
            <div className="relative h-28 w-28 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-primary flex items-center justify-center">
              <img src={PROFILE_IMAGE} className="h-full w-full object-cover" alt="AN" />
              {/* Floating Tech Icon on Contact Profile Photo */}
              <div className="absolute top-2 left-2 bg-primary/30 backdrop-blur-sm p-1.5 rounded-lg border border-white/20">
                <span className="material-symbols-outlined text-white text-xs">rocket_launch</span>
              </div>
            </div>
            <div className="absolute bottom-1 right-1 h-5 w-5 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">Vamos trabalhar juntos?</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-[280px]">Estou disponível para novas oportunidades e desafios inovadores.</p>
        </div>

        <div className="space-y-4">
          {contacts.map(c => (
            <a 
              key={c.label} 
              href={c.link}
              target={c.link.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="flex items-center gap-4 transition-all hover:border-primary hover:shadow-md active:scale-[0.98]">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{c.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">{c.label}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{c.val}</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
              </Card>
            </a>
          ))}
        </div>

        <div className="space-y-3 pt-4">
          <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:bg-primary-dark transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-sm">send</span>
            Enviar Mensagem Agora
          </button>
          <button className="w-full py-4 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-sm">content_copy</span>
            Copiar Contatos
          </button>
        </div>
      </div>

      <footer className="p-6 text-center border-t border-slate-100 dark:border-slate-800">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">© 2024 Design & Code by Asbel</p>
      </footer>
    </div>
  );
};

export default Contact;
