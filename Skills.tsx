
import React from 'react';
import { Page } from '../types';
import { Header, Card } from '../components/Shared';
import { SKILLS } from '../constants';

interface SkillsProps {
  onNavigate: (page: Page) => void;
}

const Skills: React.FC<SkillsProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      <Header title="Habilidades" onBack={() => onNavigate(Page.HOME)} />
      
      <div className="p-4 space-y-8">
        <div className="py-4">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">Expertise & Ferramentas</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Visão dinâmica das competências técnicas e interpessoais.</p>
        </div>

        <section className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">terminal</span>
            <h3 className="font-bold">Tecnologia</h3>
          </div>
          
          <div className="space-y-6">
            {SKILLS.map(skill => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold">{skill.name}</span>
                  <span className="text-primary font-black text-xs">{skill.percentage}%</span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">diversity_3</span>
            <h3 className="font-bold">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Atendimento ao Cliente', 'Logística', 'Vendas', 'Suporte Técnico', 'Gestão de Qualidade', 'Adaptabilidade'].map(tag => (
              <div key={tag} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-xs font-bold shadow-sm">
                {tag}
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-6 text-white shadow-xl shadow-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-white/70">trending_up</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Performance</span>
          </div>
          <h3 className="text-xl font-bold">Pronto para Desafios</h3>
          <p className="text-sm text-white/80 mt-2">Combinando excelência técnica com visão estratégica de negócios.</p>
          <button 
            onClick={() => onNavigate(Page.CONTACT)}
            className="w-full mt-6 py-3 bg-white text-primary font-bold rounded-xl shadow-lg shadow-black/10 active:scale-[0.98] transition-all"
          >
            Vamos Conversar?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
