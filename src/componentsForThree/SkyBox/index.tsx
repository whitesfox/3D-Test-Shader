import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

export default function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    'assets/env/TropicalSunnyDay_px.jpg',
    'assets/env/TropicalSunnyDay_nx.jpg',
    'assets/env/TropicalSunnyDay_py.jpg',
    'assets/env/TropicalSunnyDay_ny.jpg',
    'assets/env/TropicalSunnyDay_pz.jpg',
    'assets/env/TropicalSunnyDay_nz.jpg',
  ]);
  // Set the scene background property to the resulting texture.
  // scene.background = texture;
  return null;
}
