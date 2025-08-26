import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <div className="container-xl space-y-6">
      <header className="glass rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="mt-2 text-foreground/80">Showcase of imaginative work — swap with your real case studies.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="group">
            <article className="glass rounded-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-105 transition-transform" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-foreground/80">{p.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
