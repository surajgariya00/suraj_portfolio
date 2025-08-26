import React from 'react'
import { Palette, Check } from 'lucide-react'
import { THEMES, applyTheme } from '../lib/theme.js'

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState(localStorage.getItem('Suraj Portfolio-theme') || 'neon')
  const set = (t) => { setTheme(t); applyTheme(t) }

  return (
    <div className="relative">
      <details className="group">
        <summary className="list-none btn-ghost rounded-xl flex items-center gap-2 cursor-pointer">
          <Palette size={18}/>
          <span className="hidden sm:inline">Theme</span>
        </summary>
        <div className="absolute right-0 mt-2 w-56 glass rounded-xl p-2">
          {THEMES.map(t => (
            <button key={t} onClick={() => set(t)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-foreground/10 flex items-center justify-between">
              <span className="capitalize">{t}</span>
              {theme === t && <Check size={16}/>}
            </button>
          ))}
        </div>
      </details>
    </div>
  )
}
