import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import AirplaneCard from './components/AirplaneCard'
import axios from 'axios'

const App = () => {
  const [genres, updateGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/genres')
      updateGenres(response.data)
    }
    apiCall()
  }, [])

  const handleClick = (e) => {
    setSelectedGenre(e.target.value)
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={<Home genres={genres} handleClick={handleClick} />}
            selectedGenre={selectedGenre}
          />
          <Route path="/genre:id" element={<AirplaneCard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
