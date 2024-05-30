import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import {Model} from '../../assets/3D-model/Scene'
import CameraHelper from '../../helpers/cameraHelper'
import { Md360 } from "react-icons/md";

const ProductView = () => {

    const [value, setvalue] = useState(70)
    useEffect(() => {
        
        window.scroll({
          top: 0,
        });
      }, []);

    useEffect(()=>{

        if(window.innerWidth < 540){
            setvalue(50)
        }



    },[])
    
  return (
    <div className='' style={{height: "100vh", width:"100%", background:"#f6f6f6", position:"relative"}}>

   <Canvas className='canvsas' shadows={true} pixelRatio={[1, 2]} camera={{zoom:value,  fov:50,   position: [-0.71,  -0.04, 8.51]}}>
        <ambientLight intensity={2}/>
        <directionalLight intensity={0.8} />
         <OrbitControls  dampingFactor={0.05}/>
         <CameraHelper event={'mousedown'} />
        <Environment preset='sunset' />
        <Suspense fallback={null}>
        <Model />
        </Suspense >
        
       
      </Canvas>

   <div className='instrution'>
    
    <p>Explore our products in detail in 360 degree</p>
   </div>


    </div>
  )
}

export default ProductView