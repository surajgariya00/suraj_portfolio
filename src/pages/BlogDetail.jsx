import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/blog.js'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if (!post) return <div className="container-xl">Not found.</div>
  return (
    <div className="container-xl space-y-6">
      <Link to="/blog" className="text-sm text-muted hover:text-foreground">← Back to blog</Link>
      <article className="prose prose-invert max-w-none glass rounded-3xl p-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-sm text-muted">{post.date}</p>
        <p className="mt-4 text-foreground/80">{post.content}</p>
      </article>
    </div>
  )
}
