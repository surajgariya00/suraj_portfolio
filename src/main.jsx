import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ensureInitialTheme } from './lib/theme.js'
import Lenis from 'lenis'

ensureInitialTheme()

// Smooth scrolling
const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
