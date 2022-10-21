import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

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
    <div className="App">
      <h1>Genres</h1>
    </div>
  )
}

export default App
