import { useEffect, useRef } from 'react'
import './AnimatedLogo.css'

export default function AnimatedLogo() {
  const ringRef = useRef(null)
  
  useEffect(() => {
    let rotation = 0
    let animationId
    
    const animate = () => {
      rotation += 1
      if (ringRef.current) {
        ringRef.current.style.setProperty('--rotation', `${rotation}deg`)
      }
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  return (
    <div className="animated-logo">
      <div className="logo-ring" ref={ringRef}>
        <div className="gradient-ring"></div>
      </div>
      <div className="logo-center">
        <img src="/assets/logoPNG.png" alt="logotype" />
      </div>
    </div>
  )
}

