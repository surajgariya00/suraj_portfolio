import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRightCircle, Download } from 'lucide-react'
import Magnetic from '../components/fx/Magnetic.jsx'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

function TiltCard({ children }) {
  const ref = React.useRef(null)
  const [rot, setRot] = React.useState({ x: 0, y: 0 })
  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setRot({ x: (0.5 - py) * 10, y: (px - 0.5) * 12 })
  }
  const onLeave = () => setRot({ x: 0, y: 0 })
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className="tilt glass rounded-3xl p-6"
      style={{ transform: `perspective(900px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)` }}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <div className="container-xl space-y-12">
      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center relative">
        <div className="space-y-4 relative z-10">
          <p className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-muted">
            <Sparkles size={16}/> Motion-first engineering
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">impossible</span> on the web.
          </h1>
          <p className="text-foreground/80 text-lg max-w-xl">Suraj Portfolio is a 3D-powered, animated portfolio that screams future. Swap in your content and ship.</p>
          <div className="flex items-center gap-3 pt-1">
            <Magnetic><a href="#" className="btn-primary rounded-2xl inline-flex items-center gap-2"><Download size={18}/> Download CV</a></Magnetic>
            <Magnetic><Link to="/projects" className="btn-ghost rounded-2xl inline-flex items-center gap-2">Explore Projects <ArrowRightCircle size={18}/></Link></Magnetic>
          </div>
        </div>
        <TiltCard>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-foreground/5 to-secondary/30" />
            <div className="absolute inset-0 grid place-items-center text-center p-6">
              <div>
                <div className="text-8xl font-black tracking-tight">★</div>
                <p className="mt-2 text-sm text-muted">React • Vite • Tailwind • Framer Motion • R3F</p>
              </div>
            </div>
          </div>
        </TiltCard>
      </section>

      {/* FEATURED */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured</h2>
          <Link to="/projects" className="text-sm text-muted hover:text-foreground">See all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0,3).map((p) => (
            <Link to={`/projects/${p.slug}`} key={p.slug} className="group">
              <div className="glass rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform" />
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-foreground/80">{p.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map(t => <span key={t} className="px-2.5 py-1 rounded-full bg-foreground/10 text-xs">{t}</span>)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
