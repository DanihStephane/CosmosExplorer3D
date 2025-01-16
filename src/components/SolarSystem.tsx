import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { Planet } from './Planet';

export function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 30, 80], fov: 60 }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} />
      
      {/* Soleil */}
      <Planet
        position={[0, 0, 0]}
        size={5}
        textureUrl="https://images.unsplash.com/photo-1575881875475-31023242e3f9?auto=format&fit=crop&q=80"
        rotationSpeed={0.001}
        name="Soleil"
      />

      {/* Mercure */}
      <Planet
        position={[8, 0, 0]}
        size={0.8}
        textureUrl="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80"
        orbitRadius={8}
        orbitSpeed={0.047}
        name="Mercure"
      />

      {/* Venus */}
      <Planet
        position={[11, 0, 0]}
        size={1.2}
        textureUrl="https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&q=80"
        orbitRadius={11}
        orbitSpeed={0.035}
        name="Vénus"
      />

      {/* Terre */}
      <Planet
        position={[15, 0, 0]}
        size={1.3}
        textureUrl="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80"
        orbitRadius={15}
        orbitSpeed={0.029}
        name="Terre"
      />

      {/* Mars */}
      <Planet
        position={[19, 0, 0]}
        size={0.9}
        textureUrl="https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?auto=format&fit=crop&q=80"
        orbitRadius={19}
        orbitSpeed={0.024}
        name="Mars"
      />

      {/* Jupiter */}
      <Planet
        position={[25, 0, 0]}
        size={3}
        textureUrl="https://images.unsplash.com/photo-1614314107768-6018061b5b72?auto=format&fit=crop&q=80"
        orbitRadius={25}
        orbitSpeed={0.013}
        name="Jupiter"
      />

      {/* Saturne */}
      <Planet
        position={[32, 0, 0]}
        size={2.5}
        textureUrl="https://images.unsplash.com/photo-1614314107912-5b85657a3e6b?auto=format&fit=crop&q=80"
        orbitRadius={32}
        orbitSpeed={0.009}
        name="Saturne"
      />

      {/* Uranus */}
      <Planet
        position={[38, 0, 0]}
        size={1.8}
        textureUrl="https://images.unsplash.com/photo-1614314107912-5b85657a3e6b?auto=format&fit=crop&q=80"
        orbitRadius={38}
        orbitSpeed={0.007}
        name="Uranus"
      />

      {/* Neptune */}
      <Planet
        position={[43, 0, 0]}
        size={1.7}
        textureUrl="https://images.unsplash.com/photo-1614314107912-5b85657a3e6b?auto=format&fit=crop&q=80"
        orbitRadius={43}
        orbitSpeed={0.005}
        name="Neptune"
      />

      {/* Pluton */}
      <Planet
        position={[48, 0, 0]}
        size={0.4}
        textureUrl="https://images.unsplash.com/photo-1614314107912-5b85657a3e6b?auto=format&fit=crop&q=80"
        orbitRadius={48}
        orbitSpeed={0.004}
        name="Pluton"
      />

      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={20}
        maxDistance={150}
      />
    </Canvas>
  );
}