import { Plane } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';

export default function Floor() {
  const bumpMap = useLoader(
    THREE.TextureLoader,
    'assets/material/floor_bump.png'
  );
  const normals = useLoader(THREE.TextureLoader, 'assets/material/floor.png');

  return (
    <group>
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
        args={[30, 30, 1, 1]}
      >
        <meshStandardMaterial
          attach='material'
          color='white'
          map={normals}
          bumpScale={-0.2}
          metalness={0.1}
          roughness={0}
          bumpMap={bumpMap}
        />
      </Plane>
    </group>
  );
}
