import { useRef, useMemo, useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import Cube from './Cube'
import Walls from './InteractiveWindow'
import CursorSphere from './CursorShere'

export default function InteractiveScene() {

    const cubes = useMemo (() => {
        const count = 22

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
        <Canvas camera={{ position: [0, 20, -10], fov: 17 }}>
            <Physics gravity={[0, -10, 0]}>
                <Walls />
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
            <ambientLight intensity={1} />
            <directionalLight position={[0, 20, -10]} intensity={1} />
            <directionalLight position={[20, 10, -20]} intensity={1} />
        </Canvas>
    )
}



