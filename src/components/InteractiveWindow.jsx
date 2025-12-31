import { usePlane, useBox } from '@react-three/cannon'

function Floor() {
    const [ref] = usePlane(() => ({
        position: [0, 0, 0],
        rotation: [-Math.PI / 2, 0, 0],
        type: 'Static'
    }))

    return (
        <mesh ref={ref}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    )
}

function Wall({position, rotation}) {
    const [ref] = usePlane(() => ({
        position: position,
        rotation: rotation,
        type: 'Static'
    }))

    return (
        <mesh ref={ref}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial visible={false} />
        </mesh>
    )
}

export default function Walls() {

    return (
        <>
            <Floor />
            <Wall position={[0, 0, -5]} rotation={[0, 0, 0]} />
            <Wall position={[-10, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
            <Wall position={[10, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
            <Wall position={[0, 0, 5]} rotation={[0, Math.PI, 0]} />
        </>
    )
}
