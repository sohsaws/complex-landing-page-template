import './Socials.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import instagramIcon from '/assets/Images/instagram.png';
import vkIcon from '/assets/Images/vk.png';
import telegramIcon from '/assets/Images/telegram.png';

export default function Socials() {
    const socials = [
        { 
            name: 'Telegram', 
            color: '#2596be',
            icon: <img src={telegramIcon} alt="Telegram" className="social-icon" />,
            link: '#'
        },
        { 
            name: 'VK', 
            color: '#004c9c',
            icon: <img src={vkIcon} alt="VK" className="social-icon" />,
            link: '#'
        },
        { 
            name: 'Instagram', 
            color: '#F77737',
            icon: <img src={instagramIcon} alt="Instagram" className="social-icon" />,
            link: '#'
        }
    ]

    return (
        <div className="socials-container">
            <h2 className="socials-title">Связаться со мной</h2>
            <div className="socials-content">
                <div className="left-lottie-animation">
                    <DotLottieReact 
                        src="assets/SVG/work-from-home.lottie"
                        loop={true}
                        autoplay={true}
                    />
                </div>

                <div className="socials-panel-container">
                    {socials.map((social, index) => (
                        <a 
                            key={index}
                            href={social.link}
                            className="social-panel"
                            style={{'--social-color': social.color}}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}