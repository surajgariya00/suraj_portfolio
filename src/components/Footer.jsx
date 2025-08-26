import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto">
      <div className="container-xl">
        <div className="glass rounded-2xl p-6 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Suraj Portfolio.</p>
          <div className="flex items-center gap-3">
            <a className="btn-ghost rounded-xl" href="#"><Github size={18}/></a>
            <a className="btn-ghost rounded-xl" href="#"><Twitter size={18}/></a>
            <a className="btn-ghost rounded-xl" href="#"><Linkedin size={18}/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
