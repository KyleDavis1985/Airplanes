import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AirplaneCard from './AirplaneCard'
import Form from './Form'


const AirplaneList = (props) => {
  let { id } = useParams()
  const [genre, setSelectedGenre] = useState('')
  const [airplanes, setAirplanes] = useState([])
  const [newAirplane, setAirplane] = useState([])
  const [count, setCount] = useState(0)
  const [formState, setFormState] = useState({
    model: '',
    topSpeed: '',
    image: '',
    unitCost: '',
    contractor: '',
    stealth: '',
    range: '',
    dateDeployed: '',
    genre: id
  })


  useEffect(() => {
    const airplaneCall = async () => {
      let response = await axios.get(`http://localhost:3001/genres/${id}`)
      setAirplanes(response.data.airplanes)
    }
    airplaneCall()

    let selectedGenre = props.genres.find((genre) => genre._id === id
    )  
    setSelectedGenre(selectedGenre)

  }, [id, props.genres, count])

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let builtAirplane = await axios
      .post('http://localhost:3001/airplanes/', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    setCount(count + 1)
    setAirplane([...newAirplane, builtAirplane.data])
    setFormState({
      model: '',
      topSpeed: '',
      image: '',
      unitCost: '',
      contractor: '',
      stealth: '',
      range: '',
      dateDeployed: '',
      genre: id
    })
  }

  const deleteItem = async (e) => { 
    await axios.delete(`http://localhost:3001/airplanes/${e.target.value}`);
    setCount(count + 1)
  }
  
  
  const updateItem = async (e) => {
    e.preventDefault()
    console.log(formState)
    await axios.put(`http://localhost:3001/airplanes/${e.target.value}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
      setCount(count + 1)
    }
  

  return (
    <div className="airplane-list">
      <div className="airplane-card">
        {airplanes.map((airplane) => (<AirplaneCard key={airplane._id} model={airplane.model} id={airplane._id} topSpeed={airplane.top_speed} unitCost={airplane.unit_cost} image={airplane.image} contractor={props.contractor} stealth={airplane.stealth} range={airplane.range} dateDeployed={airplane.date_deployed} airplaneChange={airplanes} genreChange={genre} delete={deleteItem} update={updateItem}/>))}
      </div>
      <div className='form-container'>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} model={formState.model} topSpeed={formState.topSpeed} image={formState.image} unitCost={formState.unitCost} contractor={formState.contractor} stealth={formState.stealth} range={formState.range} dateDeployed={formState.dateDeployed}/>
      </div>
    </div>
  )
}

export default AirplaneList