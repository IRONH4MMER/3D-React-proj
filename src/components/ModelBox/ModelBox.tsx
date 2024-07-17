import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Model from '../../../public/Scene.tsx';

export default function ModelBox() {
  return (
    <Canvas
      camera={{ position: [15, 20, 15] }}
      style={{ height: '100%', width: '100%', zIndex: 0, position: 'absolute' }}
      shadows
    >
      <directionalLight castShadow position={[10, 10, 5]} />
      <Environment preset="sunset" />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
