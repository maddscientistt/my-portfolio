// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;


import { ReactNebula } from "@flodlc/nebula";

export const Stars = () => {
   return (
       <>
           {/* <ReactNebula/> */}

           <ReactNebula config={
              {
                "starsCount": 1000,
                "starsColor": "#FFFFFF",
                "starsRotationSpeed": 12.4,
                "cometFrequence": 100,
                "nebulasIntensity": 15,
                "bgColor": "rgb(8,8,8)",
                "sunScale": 1.7,
                "planetsScale": 2.4,
                "solarSystemOrbite": 57,
                "solarSystemSpeedOrbit": 190
            }
           } />
       </>
   );
}