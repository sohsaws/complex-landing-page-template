// Interactive 3D scene with physics-enabled Rubik's cubes
import { useRef, useMemo, useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import Cube from './Cube'
import Walls from './InteractiveWindow'
import CursorSphere from './CursorShere'

export default function InteractiveScene() {
    // Generate cube positions once using useMemo to prevent re-renders
    const cubes = useMemo (() => {
        const count = 25 // Number of cubes in the scene

        // Create array of cubes with random positions
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            position: [
                (Math.random() - 0.5) * 24,
                Math.random() * 10 + 5,
                (Math.random() - 0.5) * 4,
            ],
        }))
    }, [])

    return (
        // Three.js Canvas with custom camera position and narrow FOV for isometric look
        <Canvas camera={{ position: [0, 20, -10], fov: 17 }}>
            {/* Physics world with downward gravity */}
            <Physics gravity={[0, -10, 0]}>
                {/* Invisible boundary walls to contain cubes */}
                <Walls />
                {/* Invisible sphere that follows cursor and pushes cubes */}
                <CursorSphere />
                <Suspense fallback={null}>
                    {cubes.map((cube) => (
                        <Cube 
                            key={cube.id} 
                            position={cube.position} 
                        />
                    ))}
                </Suspense>
            </Physics>
            {/* Scene lighting - ambient for base, directional for shadows */}
            <ambientLight intensity={1} />
            <directionalLight position={[0, 20, -10]} intensity={1} />
            <directionalLight position={[20, 10, -20]} intensity={1} />
        </Canvas>
    )
}



