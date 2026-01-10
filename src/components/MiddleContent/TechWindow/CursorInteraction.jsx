import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { useState, useRef } from 'react'
import * as THREE from 'three'

export default function CursorInteraction() {
    const { camera, pointer } = useThree()
    const [isInside, setIsInside] = useState(false)
    const raycaster = useRef(new THREE.Raycaster())
    const plane = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0))
    const intersectPoint = useRef(new THREE.Vector3())

    const [ref, api] = useSphere(() => ({
        type: 'Kinematic',
        args: [0.5],
        position: [100, 100, 0],
    }))

    useFrame(() => {
        if (isInside) {
            raycaster.current.setFromCamera(pointer, camera)
            raycaster.current.ray.intersectPlane(plane.current, intersectPoint.current)
            
            if (intersectPoint.current) {
                api.position.set(intersectPoint.current.x, intersectPoint.current.y, 0)
            }
        } else {
            api.position.set(100, 100, 0)
        }
    })

    return (
        <>
            <mesh ref={ref}>
                <sphereGeometry args={[0.5, 16, 16]} />
                <meshStandardMaterial color={'#ff0000'} visible={false} />
            </mesh>
            
            <mesh
                position={[0, 0, 0]}
                onPointerEnter={() => setIsInside(true)}
                onPointerLeave={() => setIsInside(false)}
            >
                <planeGeometry args={[20, 8]} />
                <meshBasicMaterial visible={false}/>
            </mesh>
        </>
    )
}
