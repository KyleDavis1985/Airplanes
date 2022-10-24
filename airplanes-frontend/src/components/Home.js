import GenreCard from './GenreCard'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = (props) => {
  let navigate = useNavigate()

  const [selectedGenre, setSelectedGenre] = useState()

  const handleClick = (genre) => {
    navigate(`${genre.id}`)
  }

  return (
    <div className="genres">
      <h2>Genres</h2>
      <div className="container-grid">
        {props.genres.map((genre) => (
          <GenreCard
            name={genre.name}
            image={genre.image}
            id={genre._id}
            key={genre._id}
            genre={genre}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
