import { useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type Props = {
  modelUrl: string;
};

export default function LoadModel({ modelUrl }: Props) {
  const { scene: model } = useLoader(GLTFLoader, modelUrl);
  return (
    <Suspense fallback={null}>
      <primitive object={model} position={[0, 0, 0]} scale={[1, 1, 1]} />
    </Suspense>
  );
}
