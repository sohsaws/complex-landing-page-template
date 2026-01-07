import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import TechBoxes from './TechBoxes'
import CursorInteraction from './CursorInteraction'
import './TechStackScene.css'



export default function TechStackScene() {
    return (
        <div className="tech-stack-scene-container">
            <div className="tech-stack-title">
                <img
                    src="https://readme-typing-svg.demolab.com/?font=Comic+Sans+MS&weight=700&size=30&duration=4500&pause=1200&color=ffffff&center=true&vCenter=true&width=900&lines=МОЙ+СТЭК;МОЙ+АРСЕНАЛ;МОИ+МОЛИТВЫ;МОЙ+НАБОР+КОСТЫЛЕЙ" 
                    alt="Typing SVG"/>
            </div>
            <div className="tech-stack-canvas-wrapper">
                <Canvas
                    orthographic
                    camera={{ 
                        zoom: 60,
                        position: [0, 0, 10],
                    }}
                >
                    <color attach="background" args={['#0b0b0b']} />
                    <ambientLight intensity={1.5} />
                    <pointLight position={[10, 10, 10]} intensity={1.2} />
                    <pointLight position={[-10, 10, 5]} intensity={1} />
                    <pointLight position={[0, -10, 8]} intensity={0.8} />
                    <pointLight position={[10, -10, 5]} intensity={0.8} />
                    <directionalLight position={[0, 5, 10]} intensity={0.6} />


                    <Physics gravity={[0, 0, 0]}>

                        <TechBoxes />
                        <CursorInteraction />
                    </Physics>
                </Canvas>
            </div>
        </div>
    )
}
