import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [genres, updateGenres] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/genres')
      updateGenres(response.data)
    }
    apiCall()
  }, [])

  return
}

export default Home
