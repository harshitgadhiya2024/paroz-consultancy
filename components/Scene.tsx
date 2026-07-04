"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <>
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#00f0ff" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#7000ff" />
      
      {/* Sci-Fi Stars Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={0.2} color="#00f0ff" />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={sphereRef} scale={1.5}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial 
            color="#111111" 
            roughness={0.1} 
            metalness={0.9} 
            distort={0.4} 
            speed={2} 
            envMapIntensity={2}
            wireframe={true}
          />
        </mesh>
        
        {/* Core solid mesh */}
        <mesh scale={1.2}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color="#000000" 
            roughness={0.2} 
            metalness={1}
            emissive="#7000ff"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      <Environment preset="city" />
    </>
  );
}
