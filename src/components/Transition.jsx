import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export default function Transition() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname + '-transition'}
        className="fixed inset-0 z-40 pointer-events-none"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)', transition: { duration: .6 } }}
        exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: .4 } }}
        style={{ background: 'radial-gradient(1200px 400px at 50% 0%, rgba(99,102,241,.15), transparent 70%)' }}
      />
    </AnimatePresence>
  )
}
