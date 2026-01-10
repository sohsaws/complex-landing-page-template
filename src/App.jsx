// Main application component - Entry point for the portfolio website
import Header from './components/Header/Navigation/Header'
import InteractiveScene from './components/Header/RubicsWindow/InteractiveScene'
import MiddleContentHeader from './components/MiddleContent/TechWindow/MiddleContent'
import GitHubSection from './components/MiddleContent/GitHubContainer/GitHubSection'
import Socials from './components/Footer/Socials/Socials'
import './App.css'

export default function App() {
  return (
    <div className="app">
      {/* Navigation header with logo and menu */}
      <Header />
      <main className="main-content">
        {/* 3D Rubik's cube physics scene */}
        <div className="interactive-window">
          <InteractiveScene />
        </div>
        {/* Scroll indicator prompting user to explore */}
        <div className="scroll-hint">
          <span className="plus-edge">+</span>
          <span className="plus">+</span>
          <span className="plus">+</span>
          <span className="hint-text">листайте, чтобы узнать меня лучше</span>
          <span className="plus">+</span>
          <span className="plus">+</span>
          <span className="plus-edge">+</span>
        </div>
        {/* About section with animated SVG curves and tech stack */}
        <div>
          <MiddleContentHeader/>
        </div>
        {/* GitHub portfolio section with Lottie animation */}
        <GitHubSection />
      </main>
      {/* Contact footer with social links */}
      <footer>
        <Socials />
      </footer>
    </div>
  )
}


