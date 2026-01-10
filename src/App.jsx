import Header from './components/Header/Navigation/Header'
import InteractiveScene from './components/Header/RubicsWindow/InteractiveScene'
import MiddleContentHeader from './components/MiddleContent/TechWindow/MiddleContent'
import GitHubSection from './components/MiddleContent/GitHubContainer/GitHubSection'
import Socials from './components/Footer/Socials/Socials'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="interactive-window">
          <InteractiveScene />
        </div>
        <div className="scroll-hint">
          <span className="plus-edge">+</span>
          <span className="plus">+</span>
          <span className="plus">+</span>
          <span className="hint-text">листайте, чтобы узнать меня лучше</span>
          <span className="plus">+</span>
          <span className="plus">+</span>
          <span className="plus-edge">+</span>
        </div>
        <div>
          <MiddleContentHeader/>
        </div>
        <GitHubSection />
      </main>
      <footer>
        <Socials />
      </footer>
    </div>
  )
}


