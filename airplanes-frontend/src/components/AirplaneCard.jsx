import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const AirplaneCard = (props) => {
  let { id } = useParams()
  const [genre, setSelectedGenre] = useState('')

  useEffect(() => {
    let selectedGenre = props.genres.find((genre) => genre._id === id
    )  

    setSelectedGenre(selectedGenre)

  }, [props.genres, id])


  return (
    <div className="airplane-card">
      <div className="info-wrapper flex-col">
        <h3>{genre.name}</h3>
      </div>
      <div className="img-wrapper">
      </div>
    </div>
  )
}

export default AirplaneCard