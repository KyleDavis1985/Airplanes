import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AirplaneCard from './AirplaneCard'
import Form from './Form'


const AirplaneList = (props) => {
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
        {airplanes.map((airplane) => (<AirplaneCard model={airplane.model} topSpeed={airplane.top_speed} unitCost={airplane.unit_cost} image={airplane.image} contractor={props.contractor} stealth={airplane.stealth} range={airplane.range} dateDeployed={airplane.date_deployed}/>))}
      </div>
      <Form />
    </div>
  )
}

export default AirplaneList