import AnimatedLogo from './AnimatedLogo'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <AnimatedLogo />
      </div>
      
      <nav className="header-right">
        <button className="btn btn-talk">
          <span className="btn-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          <span>Давайте поговорим</span>
          <span className="btn-dot">•</span>
        </button>
        
        <button className="btn btn-menu">
          <span>меню</span>
          <span className="btn-dots">••</span>
        </button>
      </nav>
    </header>
  )
}


