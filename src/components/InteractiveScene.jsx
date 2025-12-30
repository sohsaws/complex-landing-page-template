import React, { useRef, useMemo, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import Cube from './Cube'


export default function InteractiveScene() {

    return (
        <Canvas>
            <Physics>
                <Suspense fallback={null}>
                    <Cube />
                </Suspense>
            </Physics>
            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 1]} intensity={1} />
        </Canvas>

    )
}



