import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <div className="container-xl">Not found.</div>
  return (
    <div className="container-xl space-y-6">
      <Link to="/projects" className="text-sm text-muted hover:text-foreground">← Back to projects</Link>
      <header className="glass rounded-3xl p-6">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-foreground/80 mt-2 max-w-3xl">{project.content}</p>
        <div className="flex gap-2 mt-3">
          {project.tags.map(t => <span key={t} className="px-2.5 py-1 rounded-full bg-foreground/10 text-xs">{t}</span>)}
        </div>
      </header>
      <section className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl aspect-video" />
        <div className="glass rounded-2xl aspect-video" />
      </section>
    </div>
  )
}
