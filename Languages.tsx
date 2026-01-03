
import React from 'react';
import { Page } from '../types';
import { Header, Card } from '../components/Shared';

interface LanguagesProps {
  onNavigate: (page: Page) => void;
}

const Languages: React.FC<LanguagesProps> = ({ onNavigate }) => {
  const langs = [
    { name: 'Português', level: 'Nativo', perc: 100, flag: '🇧🇷' },
    { name: 'Inglês', level: 'Intermediário (B2)', perc: 65, flag: '🇺🇸' },
    { name: 'Espanhol', level: 'Básico', perc: 30, flag: '🇪🇸' },
  ];

  return (
    <div className="flex flex-col">
      <Header title="Idiomas" onBack={() => onNavigate(Page.HOME)} />
      
      <div className="p-6 space-y-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">Idiomas</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Pronto para desafios globais e comunicação multicultural.</p>
        </div>

        <div className="space-y-4">
          {langs.map(l => (
            <Card key={l.name} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-3xl bg-slate-50 dark:bg-slate-700 h-14 w-14 rounded-full flex items-center justify-center border border-slate-100 dark:border-slate-600">
                    {l.flag}
                  </div>
                  <div>
                    <h3 className="font-black text-lg">{l.name}</h3>
                    <p className="text-slate-500 text-xs font-bold">{l.level}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-primary font-black text-lg">{l.perc}%</p>
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${l.perc}%` }}
                />
              </div>
            </Card>
          ))}
        </div>

        <button className="w-full py-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 text-slate-400 font-bold text-sm hover:border-primary hover:text-primary transition-colors">
          + Adicionar Idioma
        </button>
      </div>
    </div>
  );
};

export default Languages;
