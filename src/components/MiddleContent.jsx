import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './MiddleContent.css'

gsap.registerPlugin(ScrollTrigger)


export default function MiddleContentHeader() {
    const pathRef = useRef(null)
    const containerRef = useRef(null)
    const textRef = useRef(null)
    const techPanelRef = useRef(null)

    const technologies = [
        { name: 'JavaScript', icon: 'assets/Images/icons8-js-48.png', color: '#ffe100' },
        { name: 'TypeScript', icon: 'assets/Images/icons8-typescript-96.png', color: '#003ad8' },
        { name: 'React', icon: 'assets/Images/icons8-react-48.png', color: '#2596be' },
        { name: 'CSS', icon: 'assets/Images/CSS3.png', color: '#215dff' },
        { name: 'HTML', icon: 'assets/Images/HTML5.png', color: '#ff8000' },
        { name: 'Next.js', icon: 'assets/Images/Next.js.png', color: '#ffffff' }
    ]

    useEffect(() => {
        const path = pathRef.current
        const container = containerRef.current
        const textElement = textRef.current

        if (!container || !path || !textElement) return

        const pathLength = path.getTotalLength()

        gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        })

        gsap.to(path, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top 50%',
                end: 'bottom 30%',
                scrub: 1.5
            }
        })

        gsap.fromTo(textElement,
            { opacity: 0, x: 100 },
            { 
                opacity: 1,
                x: 0, 
                duration: 1.5, 
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container,
                    start: 'top 60%',
                    once: true
                }
            }
        )

        // Tech panel animation
        if (techPanelRef.current) {
            gsap.fromTo(techPanelRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: techPanelRef.current,
                        start: 'top 80%',
                        once: true
                    }
                }
            )
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <>
        <div ref={containerRef} className="middle-content">
            <div className="left-content">
                <svg width="100%" height="100%" viewBox="-200 0 400 400" fill="none">
                    <path 
                        ref={pathRef} 
                        d="M0 0 C10.64572227 8.09029056 17.12022318 19.01493861 19.99780273 32.10107422 C25.03798582 69.23042292 6.05156007 105.14951791 -15.65844727 133.86669922 C-16.65853222 135.17362108 -17.65981463 136.47962758 -18.66235352 137.78466797 C-21.40108866 141.35243553 -24.00912858 145.0005114 -26.59594727 148.67919922 C-36.43979702 162.60079215 -47.39884518 175.70287392 -58.42553711 188.69433594 C-66.21707433 197.14682144 -66.21707433 197.14682144 -72.53344727 206.55419922 C-41.55925307 228.38990775 -6.60894834 236.30842308 31.1237793 230.02856445 C80.10549707 220.95475575 123.98402656 196.38161577 164.08764648 167.66748047 C172.7659871 161.4658216 181.62881469 155.5252079 190.46655273 149.55419922 C191.96774658 148.5390625 191.96774658 148.5390625 193.49926758 147.50341797 C235.31336477 119.27740735 278.77697049 93.18856469 329.46655273 85.55419922 C330.14572754 85.45179932 330.82490234 85.34939941 331.5246582 85.24389648 C369.68598863 80.26458104 408.55039086 88.24468999 443.46655273 103.55419922 C444.18713867 103.86437988 444.90772461 104.17456055 445.65014648 104.49414062 C469.0826933 114.65720164 490.90004628 129.01916535 509.46655273 146.55419922 C510.7331714 147.64245729 512.0039612 148.72588107 513.27905273 149.80419922 C522.92703687 158.24130275 531.54448765 167.48994306 539.46655273 177.55419922 C540.39647016 178.68506201 541.32890235 179.81386012 542.26342773 180.94091797 C550.0346037 190.37170964 556.90095754 200.25312967 563.46655273 210.55419922" 
                        stroke="#0746b3ff" 
                        strokeWidth="8" 
                        fill="none"
                    />
                </svg>
            </div>

            <div ref={textRef} className="right-content">
                <h1 className="right-content-title">V.ktr</h1>
                <p className="right-content-caption">Я — начинающий разработчик. Изучаю и применяю современные технологии для создания веб-сайтов, мобильных приложений и автоматизации задач.
                    <p>Работаю с React Native, Next.js, TypeScript, JavaScript, Python, HTML/CSS</p>
                    <p>Интересны реальные проекты, где можно получить опыт и расти как разработчик. Спасибо за внимание! Надеюсь, вам нравится мой сайт!</p>
                </p>
            </div>
        </div>

        <div ref={techPanelRef} className="tech-stack-panel">
            {technologies.map((tech, index) => (
                <div 
                    key={index} 
                    className="tech-box"
                    style={{'--glow-color': tech.color}}
                >
                    <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                    <span className="tech-name">{tech.name}</span>
                </div>
            ))}
        </div>
        </>
    )
}
