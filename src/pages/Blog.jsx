import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/blog.js'

export default function Blog() {
  return (
    <div className="container-xl space-y-6">
      <header className="glass rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Blog</h2>
        <p className="mt-2 text-foreground/80">Write long-form ideas. MDX support can be added later.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link to={`/blog/${p.slug}`} key={p.slug} className="group">
            <article className="glass rounded-2xl overflow-hidden flex flex-col">
              <div className="h-40 bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-105 transition-transform" />
              <div className="p-5">
                <span className="text-xs text-muted">{p.date}</span>
                <h3 className="text-lg font-semibold mt-1">{p.title}</h3>
                <p className="text-sm text-foreground/80 mt-1">{p.excerpt}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
