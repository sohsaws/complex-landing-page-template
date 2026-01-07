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
                threshold: 0.3
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
        <div ref={sectionRef} className="github-section">
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
