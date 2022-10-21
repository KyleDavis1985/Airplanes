import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
