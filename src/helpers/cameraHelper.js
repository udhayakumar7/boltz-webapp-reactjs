import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

function CameraHelper ({event}){


    const {camera} = useThree ()
    const cameraRef = useRef(camera)

    useEffect(()=>{

        const logPosition = () =>{
            const {x, y, z} = cameraRef.current.position;
            const roundedX = Math.round(x * 100)/100;
            const roundedy = Math.round(y * 100)/100;
            const roundedz = Math.round(z * 100)/100;

            console.log(` Camera position x:${roundedX} , y : ${roundedy} z: ${roundedz}`, )
        }

        cameraRef.current = camera

        window.addEventListener(event, logPosition)

        return () =>{

            window.removeEventListener(event, logPosition)

        }

    },[])

    return null

}

export default CameraHelper