import { useState, useEffect } from 'react'
import axios from 'axios'
import GenreCard from './GenreCard'

const Home = () => {
  const [genres, updateGenres] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/genres')
      updateGenres(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="genres">
      <h2>Genres</h2>
      <section className="container-grid">
        {genres.map((genre) => (
          <GenreCard name={genre.name} image={genre.image} />
        ))}
      </section>
    </div>
  )
}

export default Home
