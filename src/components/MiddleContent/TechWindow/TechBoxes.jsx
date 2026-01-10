// Tech stack showcase with physics-enabled 3D cubes
import { useBox, usePlane } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

// Individual tech icon cube with physics
function TechBox({ position, icon, color }) {
    // Physics body - dynamic box that responds to forces
    const [ref] = useBox(() => ({
        mass: 1,
        position: position,
        args: [1.5, 1.5, 1.5],
        material: {
            friction: 0.5,
            restitution: 0.5,
        }
    }))

    // Load and configure texture with high-quality filtering
    const texture = useTexture(icon, (texture) => {
        texture.minFilter = THREE.LinearMipmapLinearFilter // Smooth when zoomed out
        texture.magFilter = THREE.LinearFilter // Smooth when zoomed in
        texture.anisotropy = 30 // Reduces blur at angles
        texture.generateMipmaps = true
    })

    // 6 materials for cube faces: sides have colored glow, front/back show icon
    const materials = [
        <meshStandardMaterial key="right" color="#1a1a1a" emissive={color} emissiveIntensity={0.15} />,
        <meshStandardMaterial key="left" color="#1a1a1a" emissive={color} emissiveIntensity={0.15} />,
        <meshStandardMaterial key="top" color="#1a1a1a" emissive={color} emissiveIntensity={0.15} />,
        <meshStandardMaterial key="bottom" color="#1a1a1a" emissive={color} emissiveIntensity={0.15} />,
        <meshStandardMaterial key="front" map={texture} />, // Icon texture
        <meshStandardMaterial key="back" map={texture} />,  // Icon texture
    ]

    return (
        <mesh ref={ref}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            {materials}
        </mesh>
    )
}

// Invisible physics boundaries to contain cubes within visible area
function Boundaries() {
    // Floor plane - cubes rest on this
    const [floor] = usePlane(() => ({
        position: [0, -3.4, 0],
        rotation: [-Math.PI / 2, 0, 0],
        type: 'Static'
    }))

    const [ceiling] = usePlane(() => ({
        position: [0, 3.4, 0],
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

    const [backWall] = usePlane(() => ({
        position: [0, 0, -10],
        rotation: [0, 0, 0],
        type: 'Static'
    }))

    const [frontWall] = usePlane(() => ({
        position: [0, 0, 9],
        rotation: [0, Math.PI, 0],
        type: 'Static'
    }))

    return (
        <>
            <mesh ref={floor} />
            <mesh ref={ceiling} />
            <mesh ref={leftWall} />
            <mesh ref={rightWall} />
            <mesh ref={backWall} />
            <mesh ref={frontWall} />
        </>
    )
}

// Main component - renders all tech cubes with their icons and colors
export default function TechBoxes() {
    // Tech stack data: icon path, glow color, initial position
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
