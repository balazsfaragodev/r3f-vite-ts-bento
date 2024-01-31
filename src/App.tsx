import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { ACESFilmicToneMapping, sRGBEncoding } from "three";

function App() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMapping: ACESFilmicToneMapping,
        outputEncoding: sRGBEncoding,
      }}
      camera={{
        fov: 10,
        near: 0.1,
        far: 200,
        position: [0, 9, 9],
      }}
      shadows
    >
      <Scene />
    </Canvas>
  );
}

export default App;
