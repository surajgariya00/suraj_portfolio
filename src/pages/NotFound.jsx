import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-xl text-center space-y-4">
      <h2 className="text-6xl font-black">404</h2>
      <p className="text-foreground/80">This galaxy is uncharted.</p>
      <Link to="/" className="btn-primary rounded-2xl inline-block">Return Home</Link>
    </div>
  )
}
