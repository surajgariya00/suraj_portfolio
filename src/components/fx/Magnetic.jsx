import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Magnetic({ children, strength = 0.3, className }) {
  const ref = React.useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const tx = useTransform(x, v => v * strength)
  const ty = useTransform(y, v => v * strength)

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const mx = e.clientX - (rect.left + rect.width / 2)
    const my = e.clientY - (rect.top + rect.height / 2)
    x.set(mx); y.set(my)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x: tx, y: ty }} className={className}>
      {children}
    </motion.div>
  )
}
