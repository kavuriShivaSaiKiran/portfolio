import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from "../Loader"

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize = {1024}
      />
      <primitive 
        object={computer.scene}
        scale = {0.75}
        position = {[0, -3.25, -1.5]}
        rotation = {[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {

  return (
    <Canvas
      frameloop='demand'
      shadows
      gl={{preserveDrawingBuffer: true}}
      camera={{position: [20, 4, 5], fov:30, near:0.1,
        far: 200,}}
      className='xl:top-9 sm:top-20 xs:top-44 md:top-18 left-auto'
    >
      <Suspense fallback = {<CanvasLoader/>}>
        <OrbitControls 
        
          enableZoom = {false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}
export default ComputerCanvas