import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import AirplaneCard from './components/AirplaneCard'
import axios from 'axios'

const App = () => {
  const [genres, updateGenres] = useState([])
  const [airplanes, selectedAirplanes] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const genreCall = async () => {
      let response = await axios.get('http://localhost:3001/genres')
      updateGenres(response.data)
    }
    genreCall()

    const airplaneCall = async () => {
      let response = await axios.get('http://localhost:3001/airplanes')
      selectedAirplanes(response.data)
    }
    airplaneCall()
  }, [])

  const handleClick = (e) => {
    navigate(`genre/${e.target.value}`)
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
          />
          <Route
            path="/genre/:id"
            element={<AirplaneCard genres={genres} airplanes={airplanes} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
