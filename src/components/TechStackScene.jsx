import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import TechBoxes from './TechBoxes'
import CursorInteraction from './CursorInteraction'
import './TechStackScene.css'



export default function TechStackScene() {
    return (
        <div className="tech-stack-scene-container">
            <text className="tech-stack-title">Мой стэк</text>
            <div className="tech-stack-canvas-wrapper">
                <Canvas
                    orthographic
                    camera={{ 
                        zoom: 60,
                        position: [0, 0, 10],
                    }}
                >
                    <color attach="background" args={['#0b0b0b']} />
                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} intensity={0.5} />


                    <Physics gravity={[0, 0, 0]}>

                        <TechBoxes />
                        <CursorInteraction />
                    </Physics>
                </Canvas>
            </div>
        </div>
    )
}
