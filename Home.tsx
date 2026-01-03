
import React from 'react';
import { Page } from '../types';
import { PROFILE_IMAGE } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Profile Section - Stylized AN Initials */}
      <div className="relative group flex flex-col items-center">
        <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary via-blue-400 to-cyan-300 opacity-25 blur-3xl group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>
        <div className="relative h-52 w-52 rounded-full border-[6px] border-white dark:border-slate-800 shadow-[0_20px_50px_rgba(19,109,236,0.3)] overflow-hidden bg-primary flex items-center justify-center">
          <img 
            src={PROFILE_IMAGE} 
            alt="Asbel Nascimento" 
            className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
          />
          {/* Tech Icon Overlay */}
          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30 shadow-lg animate-bounce">
            <span className="material-symbols-outlined text-white text-xl">terminal</span>
          </div>
        </div>
        <div className="absolute bottom-4 right-6 bg-primary text-white p-2.5 rounded-full border-4 border-white dark:border-slate-900 shadow-2xl z-10">
          <span className="material-symbols-outlined text-lg block font-bold">verified</span>
        </div>
      </div>

      {/* Name and Title with Enhanced Typography */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
          ASBEL <span className="text-primary">NASCIMENTO</span>
        </h1>
        <div className="flex items-center justify-center gap-2">
          <div className="h-[2px] w-8 bg-primary/30 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-[0.2em]">
            Innovation & AI Expert
          </p>
          <div className="h-[2px] w-8 bg-primary/30 rounded-full"></div>
        </div>
      </div>

      {/* Stats Highlight Bar */}
      <div className="w-full grid grid-cols-3 gap-0 bg-white dark:bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-100 dark:border-white/10 shadow-xl overflow-hidden">
        <div className="flex flex-col items-center py-5 border-r border-slate-100 dark:border-white/5 group hover:bg-primary/5 transition-colors">
          <span className="text-primary font-black text-2xl group-hover:scale-110 transition-transform">+2</span>
          <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center px-1">Anos de Exp</span>
        </div>
        <div className="flex flex-col items-center py-5 border-r border-slate-100 dark:border-white/5 group hover:bg-primary/5 transition-colors">
          <span className="text-primary font-black text-2xl group-hover:scale-110 transition-transform">+5</span>
          <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center px-1">Skills</span>
        </div>
        <div className="flex flex-col items-center py-5 group hover:bg-primary/5 transition-colors">
          <span className="text-primary font-black text-2xl group-hover:scale-110 transition-transform">+10</span>
          <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center px-1">Certificados</span>
        </div>
      </div>

      {/* Main CTA */}
      <button 
        onClick={() => onNavigate(Page.ABOUT)}
        className="w-full h-16 bg-primary hover:bg-primary-dark text-white rounded-2xl flex items-center justify-center gap-3 shadow-[0_15px_30px_-5px_rgba(19,109,236,0.4)] active:scale-[0.97] transition-all group relative overflow-hidden"
      >
        <span className="text-lg font-extrabold relative z-10">Explorar Portfólio</span>
        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform relative z-10">arrow_forward</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>

      {/* Quick Navigation Footer */}
      <div className="grid grid-cols-3 gap-3 w-full">
        {[
          { icon: 'bolt', label: 'Habilidades', page: Page.SKILLS },
          { icon: 'history_edu', label: 'Experiência', page: Page.EXPERIENCE },
          { icon: 'contact_page', label: 'Contato', page: Page.CONTACT }
        ].map(item => (
          <button 
            key={item.label}
            onClick={() => onNavigate(item.page)}
            className="flex flex-col items-center justify-center p-4 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:border-primary/30 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-primary mb-1 text-xl">{item.icon}</span>
            <span className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
