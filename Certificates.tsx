
import React, { useState } from 'react';
import { Page } from '../types';
import { Header } from '../components/Shared';
import { CERTIFICATES } from '../constants';

interface CertificatesProps {
  onNavigate: (page: Page) => void;
}

const Certificates: React.FC<CertificatesProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(CERTIFICATES.map(c => c.category)))];

  const filteredCerts = filter === 'All' 
    ? CERTIFICATES 
    : CERTIFICATES.filter(c => c.category === filter);

  // Helper to get a specific tech icon based on content
  const getTechIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('amazon') || t.includes('aws') || t.includes('bedrock')) return 'cloud';
    if (t.includes('java') || t.includes('programação')) return 'code';
    if (t.includes('git') || t.includes('github')) return 'history';
    if (t.includes('english') || t.includes('inglish')) return 'translate';
    if (t.includes('games')) return 'sports_esports';
    if (t.includes('ux') || t.includes('design')) return 'design_services';
    if (t.includes('sheets') || t.includes('data')) return 'analytics';
    if (t.includes('front-end') || t.includes('html') || t.includes('css')) return 'web';
    if (t.includes('writing') || t.includes('guia')) return 'article';
    return 'terminal';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Certificados" onBack={() => onNavigate(Page.HOME)} />
      
      <div className="sticky top-[73px] z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 flex gap-3 overflow-x-auto no-scrollbar border-b border-slate-100 dark:border-slate-800">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-sm border ${
              filter === cat 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white dark:bg-slate-800 text-slate-500 border-slate-100 dark:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="p-4 space-y-4">
        {filteredCerts.map(cert => (
          <div key={cert.id} className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-44 sm:w-44 bg-slate-100 dark:bg-slate-700 overflow-hidden shrink-0">
                <img src={cert.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={cert.title} />
                {/* Dynamic Tech Icon Overlay for Certificate Image */}
                <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white p-2 rounded-xl border border-white/30 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[18px] block">{getTechIcon(cert.title)}</span>
                </div>
                <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-md text-white p-1 rounded-lg border border-white/20 shadow-md">
                  <span className="material-symbols-outlined text-[14px] block">verified</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-center">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black uppercase text-primary tracking-widest">{cert.category}</span>
                    <span className="text-[10px] text-slate-400 font-bold">{cert.year}</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white leading-snug group-hover:text-primary transition-colors">{cert.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-1 w-1 rounded-full bg-slate-300"></div>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-tighter">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
