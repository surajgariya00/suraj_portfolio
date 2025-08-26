import React from 'react'

export default function About() {
  return (
    <div className="container-xl space-y-6">
      <section className="glass rounded-3xl p-6">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-2 text-foreground/80">
          I architect delightful, high-performance interfaces where design, motion, and code meet. This is dummy content — replace it with your story.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-6">
          <h3 className="font-semibold text-lg">Core Skills</h3>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
            {['React', 'TypeScript', 'R3F/Three.js', 'Design Systems', 'A11y', 'Animations', 'Shaders', 'Performance'].map(s => (
              <li key={s} className="px-3 py-2 rounded-xl bg-foreground/10">{s}</li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="font-semibold text-lg">Tooling</h3>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
            {['Vite', 'Tailwind', 'Figma', 'Framer', 'Jest', 'Playwright', 'Vercel'].map(s => (
              <li key={s} className="px-3 py-2 rounded-xl bg-foreground/10">{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
