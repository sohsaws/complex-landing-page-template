import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import TechBoxes from './TechBoxes'
import CursorInteraction from './CursorInteraction'
import './TechStackScene.css'

export default function TechStackScene() {
    return (
        <div className="tech-stack-scene-container">
            <h2 className="tech-stack-title">Мой стэк</h2>
            <div className="tech-stack-canvas-wrapper">
                <Canvas
                    orthographic
                    camera={{ 
                        zoom: 60,
                        position: [0, 0, 10],
                        near: 0.1,
                        far: 1000
                    }}
                >
                    <color attach="background" args={['#0a0a0a']} />
                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 10, 10]} intensity={0.5} />
                    
                    <Physics gravity={[0, -9.8, 0]}>
                        <TechBoxes />
                        <CursorInteraction />
                    </Physics>
                </Canvas>
            </div>
        </div>
    )
}
