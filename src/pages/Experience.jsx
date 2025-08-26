import React from 'react'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <div className="container-xl space-y-6">
      <section className="glass rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Experience</h2>
        <p className="mt-2 text-foreground/80">A timeline of achievements (dummy for now).</p>
        <ol className="relative border-l border-border ml-2 mt-6">
          {experience.map((it, i) => (
            <li key={i} className="mb-10 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 ring-2 ring-primary/40">
                <span className="h-2 w-2 bg-primary rounded-full" />
              </span>
              <div className="glass rounded-2xl p-4">
                <div className="flex flex-wrap items-center gap-2 justify-between">
                  <h3 className="font-semibold">{it.role} • <span className="text-primary">{it.company}</span></h3>
                  <span className="text-sm text-muted">{it.period}</span>
                </div>
                <p className="mt-1 text-foreground/80">{it.summary}</p>
                <ul className="mt-2 list-disc pl-4 text-sm text-foreground/80">
                  {it.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
