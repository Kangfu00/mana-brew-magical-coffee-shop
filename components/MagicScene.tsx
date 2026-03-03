import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sparkles, PerspectiveCamera, Environment, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ForestParticles = () => {
  return (
    <Sparkles 
      count={100} 
      scale={10} 
      size={2} 
      speed={0.5} 
      opacity={0.5} 
      color="#D4AF37" 
    />
  );
};

const MagicCrystal = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial 
          color="#4CC9FE" 
          speed={2} 
          distort={0.4} 
          radius={1} 
          emissive="#4CC9FE"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

export const ForestScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#D4AF37" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#4CC9FE" intensity={0.5} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles 
          count={200} 
          scale={15} 
          size={3} 
          speed={0.8} 
          opacity={0.6} 
          color="#D4AF37" 
        />
        <Sparkles 
          count={100} 
          scale={10} 
          size={1.5} 
          speed={1.2} 
          opacity={0.4} 
          color="#FFFFFF" 
        />
        
        <MagicCrystal />
        
        <Environment preset="forest" />
      </Canvas>
    </div>
  );
};

export const CrystalBallScene = () => {
  return (
    <div className="w-full h-64 md:h-96">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} color="#A0E9FF" intensity={2} />
        
        <Float speed={5} rotationIntensity={2} floatIntensity={1}>
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshPhysicalMaterial 
              color="#A0E9FF" 
              transmission={1} 
              thickness={0.5} 
              roughness={0} 
              ior={1.5}
              clearcoat={1}
            />
          </mesh>
          <Sparkles count={50} scale={1.5} size={3} speed={2} color="#FFFFFF" />
        </Float>
      </Canvas>
    </div>
  );
};
