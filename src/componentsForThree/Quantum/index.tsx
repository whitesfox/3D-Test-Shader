import { Plane } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const fragmentShader = `

uniform vec3      iResolution;           // viewport resolution (in pixels)
uniform float     iTime;                 // shader playback time (in seconds)
uniform float     iTimeDelta;            // render time (in seconds)
uniform float     iFrameRate;            // shader frame rate
uniform int       iFrame;                // shader playback frame
uniform float     iChannelTime[4];       // channel playback time (in seconds)
uniform vec3      iChannelResolution[4]; // channel resolution (in pixels)
uniform vec4      pointer;                // mouse pixel coords. xy: current (if MLB down), zw: click

uniform sampler2D iChannel0;
uniform vec4      iDate;                 // (year, month, day, time in seconds)

void mainImage(out vec4 O, vec2 I)
{
vec3  p,q,r=iResolution;
float i=1.,j=i,z;
for(O *= z;  i>0.;  i-=.02 )
    z = p.z = sqrt( max( z = i - dot( p = (vec3(I+I,0)-r)/r.y, p ) , -z/1e5 )  ),
    p /= 2. + z,
    p.xz *= mat2(cos(iTime+vec4(0,11,33,0))),
    j = cos( j * dot( cos(q+=p), sin(q.yzx) ) /.3 ),
    O += i * pow(z,.4) 
           * pow( j+1. , 8. )
           * ( sin(i*3e1 +vec4(0,1,2,3) ) + 1. ) / 2e3;
O*=O;
}

varying vec2 vUv;
void main() {
  mainImage(gl_FragColor, vUv * iResolution.xy);
}

`;
const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 0.5 );
    }
  `;

export default function Quantum() {
  const meshMat = useRef<THREE.ShaderMaterial>(null!);
  useFrame((state, delta) => {
    if (meshMat.current) {
      meshMat.current.uniforms.iResolution.value.set(10, 10, 2);
      meshMat.current.uniforms.iTime.value = state.clock.getElapsedTime();
    }
  });

  const uniforms = useMemo(
    () => ({
      iTime: { value: 1.0 },
      iResolution: { value: new THREE.Vector3() },
    }),
    []
  );
  return (
    <Plane
      args={[25, 25, 1, 1]}
      position={[0, -2.9, 0]}
      rotation={[Math.PI / 3, 0, 0]}
      scale={0.6}
    >
      <shaderMaterial
        ref={meshMat}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        vertexShader={vertexShader}
        side={THREE.DoubleSide}
        transparent
        opacity={0.2}
      />
    </Plane>
  );
}
