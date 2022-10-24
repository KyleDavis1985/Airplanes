import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AirplaneList from './AirplaneList'

const AirplaneCard = (props) => {
  let { id } = useParams()
  const [genre, setSelectedGenre] = useState('')
  let airplaneHit = false

  useEffect(() => {
    let selectedGenre = props.genres.find((genre) => genre._id === id
    )  
    setSelectedGenre(selectedGenre)

    const airplanesArray = props.airplanes.map((airplane) => {if (airplane.genre === id) airplaneHit = true})
    return airplaneHit
  }, [props.genres, id])

  console.log(airplaneHit)

  // (<AirplaneList model={airplane.model}/>)

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