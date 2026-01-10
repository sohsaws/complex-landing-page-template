import { useRef, useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import githubIcon from '/assets/Images/GitHub.png';
import './GitHubSection.css';

export default function GitHubSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                rootMargin: "0px 0px -210px 0px",
                threshold: 0.5
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div id='portfolio-section' ref={sectionRef} className="github-section">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1500 50">
                <defs>
                    <linearGradient id="textGradient">
                        <stop offset="1%" stopColor="#0758edff" />
                        <stop offset="80%" stopColor="#000000" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feColorMatrix
                            in="blur"
                            type="matrix"
                            values="1 0 0 0 0  
                                    0 1 0 0 0  
                                    0 0 1 0 0  
                                    0 0 0 1 0"
                        />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontFamily="Courier New, monospace"
                    fontSize="43"
                    fill="url(#textGradient)"
                    stroke="#000"
                    strokeWidth="30"
                    paintOrder="stroke fill"
                    filter="url(#glow)"
                    style={{
                    strokeDasharray: 500,
                    strokeDashoffset: 500
                    }}
                >Мой github
                </text>
            </svg>

            <div className="github-content">
                <div className="github-left">
                    <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-button"
                    >
                        <img src={githubIcon} alt="GitHub" className="github-icon" />
                    </a>
                </div>
                <div className="github-right">
                    {isVisible && (
                        <DotLottieReact
                            src="assets/SVG/curve.lottie"
                            loop={false}
                            autoplay={true}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
