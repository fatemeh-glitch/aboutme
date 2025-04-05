import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Sparkles } from '@react-three/drei'
import { CuteCharacter } from './CuteCharacter'

export function Scene() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas>
        <color attach="background" args={['#ffd6e6']} />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls 
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
        
        {/* Ambient light for overall brightness */}
        <ambientLight intensity={0.6} />
        
        {/* Main light source */}
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        
        {/* Fill light for softer shadows */}
        <pointLight position={[-10, -10, -10]} intensity={0.4} />
        
        {/* Rim light for depth */}
        <pointLight position={[0, 0, -10]} intensity={0.3} color="#ffb6c1" />

        {/* Sparkles effect */}
        <Sparkles 
          count={50}
          scale={6}
          size={2}
          speed={0.4}
          color="#ff69b4"
        />
        
        <CuteCharacter />
      </Canvas>
    </div>
  )
} 