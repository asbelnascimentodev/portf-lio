
import React from 'react';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, onBack, rightAction }) => (
  <header className="sticky top-0 z-50 flex items-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 justify-between border-b border-slate-100 dark:border-slate-800">
    <div className="flex items-center gap-3">
      {onBack && (
        <button onClick={onBack} className="text-slate-900 dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      )}
      <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
    </div>
    {rightAction}
  </header>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-5 ${className}`}>
    {children}
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'secondary' }> = ({ children, variant = 'primary' }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
    variant === 'primary' 
      ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300' 
      : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
  }`}>
    {children}
  </span>
);
