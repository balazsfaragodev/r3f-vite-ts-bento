import { Geometry, Subtraction } from "@react-three/csg";
import * as THREE from "three";

const box = new THREE.BoxGeometry();

type SubtractBoxProps = {
  position?: [number, number, number];
  scale?: [number, number, number];
};

const SubtractBox: React.FC<SubtractBoxProps> = (props) => (
  <Subtraction {...props}>
    <Geometry>
      <Subtraction geometry={box} />
    </Geometry>
  </Subtraction>
);
export { SubtractBox };
