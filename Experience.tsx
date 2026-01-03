
import React from 'react';
import { Page } from '../types';
import { Header, Card, Badge } from '../components/Shared';
import { EXPERIENCES, PROFILE_IMAGE } from '../constants';

interface ExperienceProps {
  onNavigate: (page: Page) => void;
}

const Experience: React.FC<ExperienceProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Experiência" onBack={() => onNavigate(Page.HOME)} />
      
      <div className="p-4 space-y-6 pb-12">
        <div className="flex flex-col items-center py-6 text-center space-y-2">
          <div className="relative">
            <div className="h-20 w-20 rounded-full border-2 border-slate-100 dark:border-slate-800 shadow-md overflow-hidden bg-primary">
              <img src={PROFILE_IMAGE} className="h-full w-full object-cover" alt="AN" />
            </div>
            <div className="absolute -top-1 -right-1 bg-primary text-white p-1 rounded-full border-2 border-white dark:border-slate-900 shadow-sm">
              <span className="material-symbols-outlined text-[10px] block">bolt</span>
            </div>
          </div>
          <h2 className="text-xl font-bold">Minha Jornada Profissional</h2>
          <div className="flex gap-2 justify-center">
            <Badge variant="primary">Disponível</Badge>
            <Badge variant="secondary">Global</Badge>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Anos Exp.', val: '2+' },
            { label: 'Projetos', val: '12' },
            { label: 'Certificados', val: '4' }
          ].map(stat => (
            <div key={stat.label} className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
              <p className="text-xl font-black text-primary leading-none">{stat.val}</p>
              <p className="text-[10px] uppercase font-bold text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative pl-6 space-y-8">
          <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-slate-100 dark:bg-slate-800"></div>
          
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              <div className={`absolute -left-[23px] top-1 h-6 w-6 rounded-full border-4 border-white dark:border-slate-900 shadow-sm ${idx === 0 ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}></div>
              <Card className="relative overflow-hidden">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-black text-lg text-slate-900 dark:text-white leading-tight">{exp.role}</h3>
                    <p className="text-primary font-bold text-sm">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-black bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">{exp.period}</span>
                </div>
                <div className="space-y-2 mt-4">
                  {exp.responsibilities.map((res, rIdx) => (
                    <div key={rIdx} className="flex gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary text-sm shrink-0">check_circle</span>
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-slate-50 dark:bg-slate-700 rounded-md">{tag}</span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
