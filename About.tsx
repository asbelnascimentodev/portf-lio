
import React from 'react';
import { Page } from '../types';
import { Header, Card, Badge } from '../components/Shared';
import { PROFILE_IMAGE, INNOVATION_HERO_IMAGE } from '../constants';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      <Header 
        title="Sobre Mim" 
        onBack={() => onNavigate(Page.HOME)}
        rightAction={
          <button className="text-primary flex items-center justify-center size-10 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">download</span>
          </button>
        }
      />

      <div className="p-4 space-y-6">
        <div className="flex flex-col items-center py-6 relative">
          <div className="absolute top-0 w-full h-32 bg-primary/5 rounded-3xl -z-10"></div>
          <div className="relative h-32 w-32 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden mb-4 bg-primary">
            <img 
              src={PROFILE_IMAGE} 
              className="h-full w-full object-cover" 
              alt="Asbel"
            />
            {/* Tech Icon Overlay for Profile */}
            <div className="absolute top-2 right-2 bg-primary/40 backdrop-blur-sm p-1 rounded-lg border border-white/20">
              <span className="material-symbols-outlined text-white text-xs">code</span>
            </div>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Asbel Nascimento</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest text-center mt-1">Innovation & AI Design</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            Minha Jornada
          </h3>

          <div className="relative overflow-hidden rounded-2xl h-64 shadow-lg group">
            <img 
              src={INNOVATION_HERO_IMAGE} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              alt="Innovation" 
            />
            {/* Tech Icon Overlay for Hero */}
            <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md p-3 rounded-2xl border border-white/10 z-10 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-2xl">smart_toy</span>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <Badge variant="primary">Destaque</Badge>
              <h4 className="text-xl font-bold mt-2">Criatividade & Inovação</h4>
              <p className="text-xs text-slate-200 mt-1 leading-relaxed line-clamp-2">
                Transformo ideias em experiências digitais com expertise multidisciplinar.
              </p>
            </div>
          </div>

          <Card className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">rocket_launch</span>
              <h4 className="font-bold">Objetivo Profissional</h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Busco colaborar em projetos ambiciosos onde possa aplicar minha visão criativa e habilidades técnicas em IA e Design para solucionar problemas complexos.
            </p>
          </Card>

          <Card className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">diversity_3</span>
              <h4 className="font-bold">Diferenciais</h4>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0"></div>
                <div>
                  <p className="text-sm font-bold">Versatilidade & Adaptação</p>
                  <p className="text-xs text-slate-500">Transito entre design, código e texto com fluidez.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0"></div>
                <div>
                  <p className="text-sm font-bold">Foco em Resultados</p>
                  <p className="text-xs text-slate-500">Entregas ágeis e de alta qualidade.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
