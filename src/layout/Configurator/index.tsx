/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { useContextBridge } from '@react-three/drei';
import Platform from 'componentsForThree/Platform';
import Style from './style.module.scss';
import { ControlContext } from 'provider/ControlProvider';
import SkyBox from 'componentsForThree/SkyBox';
import Floor from 'componentsForThree/Floor';
import RipplePlanes from 'componentsForThree/RipplePlane';
import Rain from 'componentsForThree/Rain';
import LoadModel from 'componentsForThree/LoadModel';
import Plasma from 'componentsForThree/Plasma';

export default function Configurator() {
  const ContextBridge = useContextBridge(ControlContext);
  return (
    <div className={Style.wrapper}>
      <Canvas
        id='scene'
        dpr={[1, 2]}
        camera={{ fov: 75, position: [0, 30, -17] }}
        style={{ background: '#000000' }}
      >
        <ContextBridge>
          <ambientLight intensity={0.2} />
          <pointLight intensity={1} position={[10, 10, 10]} />
          {/* <Platform /> */}
          <SkyBox />
          {/* <Floor /> */}
          {/* <OrbitControls /> */}
          {/* <RipplePlanes /> */}
          <Plasma />
          {/* <Rain /> */}
          {/* <LoadModel modelUrl='assets/model/model.glb' /> */}
        </ContextBridge>
      </Canvas>
    </div>
  );
}
