import Header from './components/Header'
import InteractiveScene from './components/InteractiveScene'
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
          <span className="plus">-</span>
          <span className="plus">-</span>
          <span className="hint-text">листайте, чтобы узнать меня лучше</span>
          <span className="plus">-</span>
          <span className="plus">-</span>
        </div>
      </main>
    </div>
  )
}


