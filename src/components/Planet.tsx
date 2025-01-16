import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  size: number;
  textureUrl: string;
  rotationSpeed?: number;
  orbitRadius?: number;
  orbitSpeed?: number;
  name: string;
}

export function Planet({ 
  position, 
  size, 
  textureUrl, 
  rotationSpeed = 0.01, 
  orbitRadius = 0,
  orbitSpeed = 0.001,
  name 
}: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textureUrl);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotation autour de son axe
      meshRef.current.rotation.y += rotationSpeed;

      // Orbite autour du soleil
      if (orbitRadius > 0) {
        const time = state.clock.getElapsedTime();
        meshRef.current.position.x = Math.cos(time * orbitSpeed) * orbitRadius;
        meshRef.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius;
      }
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={position}>
        <Sphere args={[size, 32, 32]}>
          <meshStandardMaterial map={texture} />
        </Sphere>
      </mesh>
      <Text
        position={[position[0], position[1] + size + 1, position[2]]}
        fontSize={1}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}