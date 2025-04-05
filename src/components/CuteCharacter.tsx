import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function CuteCharacter() {
  const characterRef = useRef<THREE.Group>(null)
  const bodyRef = useRef<THREE.Mesh>(null)
  const leftEarRef = useRef<THREE.Mesh>(null)
  const rightEarRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (characterRef.current) {
      // Gentle floating animation
      characterRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
      
      // Subtle swaying
      characterRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }

    if (bodyRef.current) {
      // Breathing effect
      bodyRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02
      bodyRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02
    }

    if (leftEarRef.current && rightEarRef.current) {
      // Ear wiggle
      leftEarRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.1
      rightEarRef.current.rotation.z = -Math.sin(state.clock.elapsedTime * 3) * 0.1
    }
  })

  return (
    <group ref={characterRef}>
      {/* Main Body */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ff9dbb" />
      </mesh>

      {/* Ears */}
      <mesh ref={leftEarRef} position={[-0.7, 0.7, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#ff9dbb" />
      </mesh>
      <mesh ref={rightEarRef} position={[0.7, 0.7, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#ff9dbb" />
      </mesh>

      {/* Inner Ears */}
      <mesh position={[-0.7, 0.7, 0.2]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#ffcce0" />
      </mesh>
      <mesh position={[0.7, 0.7, 0.2]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#ffcce0" />
      </mesh>

      {/* Eyes */}
      <group position={[0, 0.1, 0.8]}>
        {/* Eye Whites */}
        <mesh position={[0.25, 0, 0]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[-0.25, 0, 0]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* Pupils */}
        <mesh position={[0.25, 0, 0.08]}>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[-0.25, 0, 0.08]}>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Eye Shine */}
        <mesh position={[0.28, 0.03, 0.12]}>
          <sphereGeometry args={[0.03, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[-0.22, 0.03, 0.12]}>
          <sphereGeometry args={[0.03, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>

      {/* Blush */}
      <mesh position={[0.5, -0.1, 0.7]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#ff7eb6" transparent opacity={0.5} />
      </mesh>
      <mesh position={[-0.5, -0.1, 0.7]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#ff7eb6" transparent opacity={0.5} />
      </mesh>

      {/* Mouth */}
      <group position={[0, -0.2, 0.8]}>
        {/* Smile */}
        <mesh rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.15, 0.04, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#ff5ca1" />
        </mesh>
      </group>

      {/* Nose */}
      <mesh position={[0, -0.05, 1]}>
        <sphereGeometry args={[0.06, 32, 32]} />
        <meshStandardMaterial color="#ff7eb6" />
      </mesh>
    </group>
  )
} 