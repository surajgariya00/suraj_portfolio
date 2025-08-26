import React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const dx = useSpring(x, { stiffness: 400, damping: 40 })
  const dy = useSpring(y, { stiffness: 400, damping: 40 })

  React.useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/40 mix-blend-difference"
      style={{ left: dx, top: dy }}
    />
  )
}
