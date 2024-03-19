/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Platform() {
  const { scene: model } = useLoader(
    GLTFLoader,
    'assets/model/round_platform.glb'
  );
  return (
    <Suspense fallback={null}>
      <primitive object={model} position={[0, 0, 0]} scale={[1, 1, 1]} />
    </Suspense>
  );
}
