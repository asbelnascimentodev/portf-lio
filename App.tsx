
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import Languages from './pages/Languages';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage(Page.HOME);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navigateTo = (page: Page) => {
    window.location.hash = `#/${page}`;
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home onNavigate={navigateTo} />;
      case Page.ABOUT: return <About onNavigate={navigateTo} />;
      case Page.EXPERIENCE: return <Experience onNavigate={navigateTo} />;
      case Page.SKILLS: return <Skills onNavigate={navigateTo} />;
      case Page.CERTIFICATES: return <Certificates onNavigate={navigateTo} />;
      case Page.LANGUAGES: return <Languages onNavigate={navigateTo} />;
      case Page.CONTACT: return <Contact onNavigate={navigateTo} />;
      default: return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white flex flex-col items-center">
      <div className="w-full max-w-md min-h-screen bg-white dark:bg-slate-900 shadow-2xl relative flex flex-col">
        {/* Dark Mode Toggle Floating */}
        <button 
          onClick={toggleDarkMode}
          className="fixed top-20 right-4 z-[60] bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
        >
          <span className="material-symbols-outlined text-slate-700 dark:text-yellow-400">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <main className="flex-1 overflow-x-hidden">
          {renderPage()}
        </main>

        {/* Bottom Nav Bar - Sticky */}
        {currentPage !== Page.HOME && (
          <nav className="sticky bottom-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-around items-center z-50">
            <button 
              onClick={() => navigateTo(Page.ABOUT)}
              className={`flex flex-col items-center gap-1 ${currentPage === Page.ABOUT ? 'text-primary' : 'text-slate-400'}`}
            >
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-bold">Sobre</span>
            </button>
            <button 
              onClick={() => navigateTo(Page.EXPERIENCE)}
              className={`flex flex-col items-center gap-1 ${currentPage === Page.EXPERIENCE ? 'text-primary' : 'text-slate-400'}`}
            >
              <span className="material-symbols-outlined">work</span>
              <span className="text-[10px] font-bold">Exp</span>
            </button>
            <button 
              onClick={() => navigateTo(Page.CERTIFICATES)}
              className={`flex flex-col items-center gap-1 ${currentPage === Page.CERTIFICATES ? 'text-primary' : 'text-slate-400'}`}
            >
              <span className="material-symbols-outlined">verified</span>
              <span className="text-[10px] font-bold">Certs</span>
            </button>
            <button 
              onClick={() => navigateTo(Page.SKILLS)}
              className={`flex flex-col items-center gap-1 ${currentPage === Page.SKILLS ? 'text-primary' : 'text-slate-400'}`}
            >
              <span className="material-symbols-outlined">bolt</span>
              <span className="text-[10px] font-bold">Skills</span>
            </button>
            <button 
              onClick={() => navigateTo(Page.CONTACT)}
              className={`flex flex-col items-center gap-1 ${currentPage === Page.CONTACT ? 'text-primary' : 'text-slate-400'}`}
            >
              <span className="material-symbols-outlined">chat</span>
              <span className="text-[10px] font-bold">Falar</span>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
};

export default App;
