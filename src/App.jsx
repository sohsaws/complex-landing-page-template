import Header from './components/Header'
import InteractiveScene from './components/InteractiveScene'
import './App.css'
import MiddleContentHeader from './components/MiddleContent'

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
      </main>
    </div>
  )
}


