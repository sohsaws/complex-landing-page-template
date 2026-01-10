import { useState } from 'react'
import AnimatedLogo from '../Logo/AnimatedLogo'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 200); // Match animation duration
    } else {
      setIsMenuOpen(true);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 200);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <AnimatedLogo />
      </div>
      
      <nav className="header-right">
        <button className="btn btn-talk" onClick={() => scrollToSection('socials-section')}>
          <span className="btn-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          <span>Давайте поговорим</span>
          <span className="btn-dot">•</span>
        </button>
        
        <div className="menu-wrapper">
          <button className={`btn btn-menu ${isMenuOpen ? 'btn-menu--active' : ''}`} onClick={handleMenuToggle}>
            <span>меню</span>
            <span className="btn-dots">••</span>
          </button>
          
          {isMenuOpen && (
            <div className={`menu-dropdown ${isClosing ? 'menu-dropdown--closing' : ''}`}>
              <button className="menu-item" onClick={() => scrollToSection('about-section')}>
                Обо мне
              </button>
              <button className="menu-item" onClick={() => scrollToSection('stack-section')}>
                Стэк
              </button>
              <button className="menu-item" onClick={() => scrollToSection('portfolio-section')}>
                GitHub
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}


