import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, OrbitControls, Float } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

function Knot() {
  const ref = React.useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.2
    ref.current.rotation.y += delta * 0.12
  })
  return (
    <Float speed={1.5} floatIntensity={1.2} rotationIntensity={1.2}>
      <mesh ref={ref} position={[0, 0.2, -4]}>
        <torusKnotGeometry args={[0.8, 0.28, 200, 32]} />
        <meshStandardMaterial color={'#7c3aed'} metalness={0.4} roughness={0.2} envMapIntensity={0.4} />
      </mesh>
    </Float>
  )
}

function GradientPlanes() {
  const mat = React.useMemo(() => new THREE.MeshBasicMaterial({ color: new THREE.Color('#1e1b4b'), transparent: true, opacity: 0.5 }), [])
  return (
    <group position={[0, -1.6, -6]}>
      <mesh rotation={[-Math.PI/2.4, 0, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshBasicMaterial color={'#0ea5e9'} transparent opacity={0.06} />
      </mesh>
      <mesh position={[0, -0.8, -2]}>
        <planeGeometry args={[20, 6]} />
        <meshBasicMaterial color={'#22d3ee'} transparent opacity={0.05} />
      </mesh>
    </group>
  )
}

export default function Background3D() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 4], fov: 55 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 6, 5]} intensity={0.8} />
          <Stars radius={60} depth={40} count={3000} factor={4} fade speed={1} />
          <GradientPlanes />
          <Knot />
          <EffectComposer>
            <Bloom intensity={0.8} luminanceThreshold={0.2} mipmapBlur />
            <Vignette eskil={false} offset={0.1} darkness={0.6} />
          </EffectComposer>
        </Suspense>
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
    </div>
  )
}
