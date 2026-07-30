import React from 'react';
import { Sun, Moon, Sparkles, Layers } from 'lucide-react';

export default function ThemeSwitcher({ currentTheme, setTheme }) {
  const themes = [
    { id: 'cyber', label: 'Cyber Dark', icon: Moon, accent: 'bg-cyan-500 text-black' },
    { id: 'executive', label: 'Executive Light', icon: Sun, accent: 'bg-blue-600 text-white' },
    { id: 'synthwave', label: 'Synthwave Neon', icon: Sparkles, accent: 'bg-pink-500 text-white' },
  ];

  return (
    <div className="flex items-center gap-1.5 bg-slate-900/90 border border-cyan-500/30 p-1 rounded-xl backdrop-blur-md shadow-lg">
      <div className="hidden sm:flex items-center gap-1 px-2 text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold border-r border-slate-800">
        <Layers className="w-3 h-3 text-cyan-400" />
        <span>Style</span>
      </div>

      {themes.map((t) => {
        const Icon = t.icon;
        const isActive = currentTheme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            title={`Switch to ${t.label} style`}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              isActive
                ? `${t.accent} shadow-md`
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
