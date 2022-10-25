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

  }, [id, props.genres])

  return (
    <div className="airplane-list">
      <div className="airplane-card">
        {airplanes.map((airplane) => (<AirplaneCard key={airplane._id} model={airplane.model} id={airplane._id} topSpeed={airplane.top_speed} unitCost={airplane.unit_cost} image={airplane.image} contractor={props.contractor} stealth={airplane.stealth} range={airplane.range} dateDeployed={airplane.date_deployed} airplaneChange={airplanes} genreChange={genre}/>))}
      </div>
      <Form />
    </div>
  )
}

export default AirplaneList