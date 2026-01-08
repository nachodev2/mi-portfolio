import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, Text } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';

function Model() {
    const { scene } = useGLTF('/laptop.glb');
    return <primitive object={scene} scale={0.15} position-y={-1.5} rotation-x={0.5} />; 
}

function SceneReady({ onReady }) {
  const { gl } = useThree();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onReady) onReady();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [gl, onReady]);
  
  return null;
}

export default function Laptop() {
  const [showCanvas, setShowCanvas] = useState(false);
  const handleReady = () => {
    setShowCanvas(true);
  };

  return (
    <div 
      className="w-full h-[400px] md:h-[600px] relative"
      // 1. ¡IMPORTANTE! Quitamos el backgroundColor para que sea transparente
      // style={{ backgroundColor: '#121212' }} 
    >
      {!showCanvas && (
        <div 
          className="absolute inset-0 flex items-center justify-center z-20"
          // 2. También quitamos el fondo del preloader por si acaso
          // style={{ backgroundColor: '#121212' }}
        >
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div 
        className="cursor-grab active:cursor-grabbing w-full h-full"
        style={{ 
          visibility: showCanvas ? 'visible' : 'hidden',
          opacity: showCanvas ? 1 : 0,
          transition: 'opacity 0.3s ease-in'
        }}
      >
        <Canvas 
          camera={{ position: [0, 2, 10], fov: 40 }}
          gl={{ 
            alpha: true, // 3. ¡IMPORTANTE! alpha: true permite la transparencia en el Canvas
            antialias: true,
            powerPreference: "high-performance"
          }}
          // 4. Quitamos el background del estilo del Canvas
          // style={{ background: '#121212' }}
          dpr={[1, 2]}
        >
          {/* 5. Quitamos el color de fondo de la escena 3D */}
          {/* <color attach="background" args={['#121212']} /> */}
          
          <ambientLight intensity={1} />
          <directionalLight position={[5, 10, 5]} intensity={2} />
          
          <Suspense fallback={null}>
            <Model />
          </Suspense>

          <OrbitControls 
            enableZoom={false} 
            minPolarAngle={Math.PI / 2} 
            maxPolarAngle={Math.PI / 2}
            enableDamping={true}
            dampingFactor={0.05}
          />
          <Environment preset="city" />
          <SceneReady onReady={handleReady} />
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload('/laptop.glb');