import { useEffect, useRef } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './MiddleContent.css'

gsap.registerPlugin(ScrollTrigger)





export default function MiddleContentHeader() {
    const lottieRef = useRef(null)
    const containerRef = useRef(null)
    const textRef = useRef(null)
    const hasPlayed = useRef(false)
    
    useEffect(() => {
        const container = containerRef.current
        const textElement = textRef.current

        if (!container || !textElement) return

        ScrollTrigger.create({
            trigger: container,
            start: 'top 30%',
            once: true,
            onEnter: () => {
                if (!hasPlayed.current && lottieRef.current) {
                    lottieRef.current.play()
                    hasPlayed.current = true
                }

                gsap.fromTo(textElement,
                    { opacity: 0, x: 100 },
                    { 
                        opacity: 1, 
                        x: 0, 
                        duration: 1.5, 
                        ease: 'power3.out' 
                    }
                )
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className="middle-content">
            <div className="left-content">
                <DotLottieReact
                    ref={lottieRef}
                    src="assets/SVG/curve.lottie"
                    autoplay={false}
                    loop={false}
                    className="lottie-curve"
                />
            </div>

            <div ref={textRef} className="right-content">
                <h1 className="right-content-title">V.ktr</h1>
                <p className="right-content-caption">Я — начинающий разработчик. Изучаю и применяю современные технологии для создания веб-сайтов, мобильных приложений и автоматизации задач.
                    <p>Работаю с React Native, Next.js, TypeScript, JavaScript, Python, HTML/CSS, C#.</p>
                    <p>Интересны реальные проекты, где можно получить опыт и расти как разработчик. Спасибо за внимание! Надюесь, вам понравилася мой сайт!</p>
                </p>
            </div>
            <div className="middle-content-center">
            </div>
        </div>
    )
}
