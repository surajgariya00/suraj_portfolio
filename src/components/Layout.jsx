import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Cursor from './fx/Cursor.jsx'
import Background3D from '../three/Background3D.jsx'

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="grain" aria-hidden></div>
      <Background3D />
      <Navbar />
      {children}
      <Footer />
      <Cursor />
    </div>
  )
}
