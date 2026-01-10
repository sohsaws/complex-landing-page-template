import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import TechBoxes from './TechBoxes'
import CursorInteraction from './CursorInteraction'
import './TechStackScene.css'



export default function TechStackScene() {
    return (
        <div id="stack-section" className="tech-stack-scene-container">
            <div className="tech-stack-title">
                <a href="https://git.io/typing-svg">
                    <img src="https://readme-typing-svg.demolab.com?font=Comic+Sans+MS&pause=950&color=000000&width=500&lines=МОЙ+СТЭК;МОЙ+АРСЕНАЛ;МОЙ+НАБОР+КОСТЫЛЕЙ;" 
                        alt="Typing SVG" />
                </a>
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
