import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AirplaneList from './AirplaneList'
import axios from 'axios'

const AirplaneCard = (props) => {
  let { id } = useParams()
  const [genre, setSelectedGenre] = useState('')
  const [airplanes, setAirplanes] = useState([])

  useEffect(() => {
    const airplaneCall = async () => {
      let response = await axios.get(`http://localhost:3001/genres/${id}`)
      setAirplanes(response.data.airplanes)
    }
    airplaneCall()


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
        {airplanes.map((airplane) => <h1>{airplane.model}</h1>)}
        
      </div>
    </div>
  )
}

export default AirplaneCard