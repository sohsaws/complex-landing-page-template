import { useBox, usePlane } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

function TechBox({ position, icon, color }) {
    const [ref] = useBox(() => ({
        mass: 1,
        position: position,
        args: [1.5, 1.5, 0.2],
        material: {
            friction: 0.1,
            restitution: 0.5,
        }
    }))

    const texture = useTexture(icon)

    return (
        <mesh ref={ref} castShadow>
            <boxGeometry args={[1.5, 1.5, 0.2]} />
            <meshStandardMaterial 
                color="#1a1a1a" 
                emissive={color}
                emissiveIntensity={0.2}
            />
            <mesh position={[0, 0, 0.11]}>
                <planeGeometry args={[1.2, 1.2]} />
                <meshBasicMaterial 
                    map={texture} 
                    transparent 
                    side={THREE.DoubleSide}
                />
            </mesh>
        </mesh>
    )
}

function Boundaries() {
    const [floor] = usePlane(() => ({
        position: [0, -4, 0],
        rotation: [-Math.PI / 2, 0, 0],
        type: 'Static'
    }))

    const [ceiling] = usePlane(() => ({
        position: [0, 4, 0],
        rotation: [Math.PI / 2, 0, 0],
        type: 'Static'
    }))

    const [leftWall] = usePlane(() => ({
        position: [-10, 0, 0],
        rotation: [0, Math.PI / 2, 0],
        type: 'Static'
    }))

    const [rightWall] = usePlane(() => ({
        position: [10, 0, 0],
        rotation: [0, -Math.PI / 2, 0],
        type: 'Static'
    }))

    return (
        <>
            <mesh ref={floor} />
            <mesh ref={ceiling} />
            <mesh ref={leftWall} />
            <mesh ref={rightWall} />
        </>
    )
}

export default function TechBoxes() {
    const technologies = [
        { icon: 'assets/Images/JavaScript.png', color: '#ffe100', position: [-3, 2, 0] },
        { icon: 'assets/Images/TypeScript.png', color: '#003ad8', position: [0, 2, 0] },
        { icon: 'assets/Images/React.png', color: '#2596be', position: [3, 2, 0] },
        { icon: 'assets/Images/CSS3.png', color: '#215dff', position: [-3, -1, 0] },
        { icon: 'assets/Images/HTML5.png', color: '#ff8000', position: [0, -1, 0] },
        { icon: 'assets/Images/Next.js.png', color: '#ffffff', position: [3, -1, 0] }
    ]

    return (
        <>
            <Boundaries />
            {technologies.map((tech, index) => (
                <TechBox
                    key={index}
                    position={tech.position}
                    icon={tech.icon}
                    color={tech.color}
                />
            ))}
        </>
    )
}
