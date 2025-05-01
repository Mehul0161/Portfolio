'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'

function Character() {
  return (
    <group position={[0, 0, 0]}>
      {/* Main chat bubble */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#a78bfa" />
      </mesh>
      
      {/* Chat tail */}
      <mesh position={[-0.8, -0.8, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.3, 1, 4]} />
        <meshStandardMaterial color="#a78bfa" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.3, 0.2, 0.8]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0.3, 0.2, 0.8]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Smile */}
      <mesh position={[0, -0.2, 0.8]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.3, 0.05, 16, 32, Math.PI]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Floating message icons */}
      <mesh position={[1.2, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[1.4, -0.2, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  )
}

export default function CharacterScene() {
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const handleContextLost = (event: Event) => {
      event.preventDefault()
      console.log('WebGL context lost, attempting to recover...')
    }

    const handleContextRestored = () => {
      console.log('WebGL context restored')
    }

    window.addEventListener('webglcontextlost', handleContextLost)
    window.addEventListener('webglcontextrestored', handleContextRestored)

    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost)
      window.removeEventListener('webglcontextrestored', handleContextRestored)
    }
  }, [])

  if (error) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <div className="text-violet-400">Failed to load 3D character</div>
      </div>
    )
  }

  return (
    <div className="w-full h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        onError={(event: React.SyntheticEvent<HTMLDivElement, Event>) => {
          const error = new Error('Failed to load 3D scene')
          setError(error)
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Character />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
} 