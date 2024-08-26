import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

const RotatingCube = () => {
  const meshRef = useRef();

  // Rotate the cube every frame
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <RotatingCube />
    </Canvas>
  );
};

export default ThreeScene;
