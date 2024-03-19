import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

const particles = 100;

export default function Rain() {
  const ref = useRef<any>(); // Reference to our InstancedMesh
  const { vec, transform, positions } = useMemo(() => {
    const vec = new THREE.Vector3();
    const transform = new THREE.Matrix4();
    // Precompute randomized initial positions (array of Vector3)
    const positions = [...Array(particles)].map((_) => {
      const position = new THREE.Vector3(
        Math.random() * 300,
        Math.random() * 400 - 250,
        Math.random() * 300
      );
      return position;
    });

    return { vec, transform, positions };
  }, []);
  useFrame(() => {
    for (let i = 0; i < particles; ++i) {
      positions[i].y =
        -((160 - positions[i].y) / 10 + 0.001) * Math.random() * 0.1 +
        positions[i].y;
      if (positions[i].y < -10) positions[i].y = 20;
      vec.set(positions[i].x, positions[i].y, positions[i].z);
      transform.setPosition(vec);
      ref.current.setMatrixAt(i, transform);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh
      ref={ref}
      args={[undefined, undefined, particles]}
      scale={[0.4, 0.8, 0.4]}
      position={[-100, 0, -100]}
    >
      <cylinderGeometry args={[0.001, 0.02]} />{' '}
      {/* Circle with radius of 0.15 */}
      <meshBasicMaterial color={'#FFFFFF'} side={THREE.DoubleSide} />
    </instancedMesh>
  );
}
