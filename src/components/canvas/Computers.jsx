import React, { Suspense, useState, useEffect } from 'react';
import { Preload, useGLTF,OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from "../Loader";

// Computers component to load and display the 3D model
const Computers = ({isMobile}) => {
  // Load the GLTF model. Ensure 'public/desktop_pc/scene.gltf' is the correct path in your project.
  const computer = useGLTF('/desktop_pc/scene.gltf');
  return (
    <mesh>
      {/* Hemisphere light provides soft ambient light from above and below */}
      <hemisphereLight intensity={2} groundColor={'gray'} />

      {/* Point light for a specific light source, casting light in all directions */}
      {/* Intensity is now dynamically controlled based on screen size */}
      <pointLight intensity={4} />

      {/* Spot light for more focused illumination and casting shadows */}
      <spotLight
        position={[-20, 50, 10]} // Position of the spotlight
        angle={0.12} // Angle of the spotlight's cone
        penumbra={1} // Blurring amount of the shadow's edge
        intensity={1} // Intensity of the light
        castShadow // Enable shadow casting for this light
        shadow-mapSize={1024} // Resolution of the shadow map for quality
      />

      {/* Primitive is used to render the loaded GLTF scene */}
      <primitive
        object={computer.scene}
        scale={ 0.65}
        position={[0, -2.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
        // position={isMobile ? [0, -2, -2.2] : [0, -2.25, -1.5]}
        // scale={isMobile ? 0.5 : 0.65}

// ComputersCanvas component which sets up the Three.js Canvas
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop='demand' // Render only when needed (e.g., camera moves, model loads)
      shadows // Enable shadow rendering for the entire scene
      camera={{ position: [20, 3, 5], fov: 25 }} // Set camera position and field of view
      gl={{ preserveDrawingBuffer: true }} // Preserve the drawing buffer for screenshots
    >
      {/* Suspense is used to show a fallback while the GLTF model is loading */}
      <Suspense fallback={<CanvasLoader/>}> {/* You can replace null with a Loader component or text */}
        {/* OrbitControls allow the user to rotate and zoom the camera around the scene */}
        <OrbitControls
          enableZoom={false} // Disable zooming
          maxPolarAngle={Math.PI / 2} // Limit vertical rotation to prevent going below the ground
          minPolarAngle={Math.PI / 2} // Limit vertical rotation to prevent going above the sky
        />
        {/* Render the Computers component inside the Canvas */}
        {/* <Computers isMobile={isMobile} /> */}
        {isMobile?'':<Computers/>}
      </Suspense>

      {/* Ambient light provides a general, non-directional illumination to the scene */}
      <ambientLight intensity={0.5} />

      {/* Preload all assets, useful for ensuring assets are ready before rendering */}
      <Preload all />
    </Canvas>
  );
};

// Crucial Fix: Export ComputersCanvas as the default component
// This ensures that the Canvas and its 3D context are rendered.
export default ComputersCanvas;

