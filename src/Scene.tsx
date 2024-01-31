import { OrbitControls, PivotControls } from "@react-three/drei";
import { Plane } from "./components/Plane";
import { SubtractBox } from "./components/SubtractBox";
import { Base, CSGGeometryRef, Geometry } from "@react-three/csg";
import * as THREE from "three";
import { useRef } from "react";
const box = new THREE.BoxGeometry();

function Scene() {
  const csg = useRef<CSGGeometryRef>(null);

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight
        position={[-2, 2, 3]}
        intensity={0.8}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <ambientLight intensity={0.2} />
      <mesh receiveShadow castShadow>
        <Geometry ref={csg}>
          <Base name="base" geometry={box} scale={[1.4, 0.2, 2]}></Base>
          <SubtractBox position={[0, 0.2, -0.4]} scale={[1.2, 0.4, 1]} />
          <SubtractBox position={[0.325, 0.2, 0.55]} scale={[0.55, 0.4, 0.7]} />
          <PivotControls
            activeAxes={[true, true, true]}
            scale={0.2}
            anchor={[0, 0, 0]}
            onDrag={() => {
              if (csg.current) {
                csg.current.update();
              }
            }}
          >
            <SubtractBox
              position={[-0.325, 0.2, 0.55]}
              scale={[0.55, 0.4, 0.7]}
            />
          </PivotControls>
        </Geometry>
        <meshStandardMaterial color="#A1662F" envMapIntensity={0.05} />
      </mesh>

      <Plane />
    </>
  );
}

export { Scene };
