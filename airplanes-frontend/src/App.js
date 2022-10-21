import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'

function App() {
  const [genres, updateGenres] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/genres')
      updateGenres(response.data)
    }
    apiCall()
  }, [])

  return (
    <div>
      <header>
        <Header />
      </header>
    </div>
  )
}

export default App
