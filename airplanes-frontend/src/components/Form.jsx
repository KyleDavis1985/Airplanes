import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Form= (props) => {
  let { id } = useParams()
  const [airplanes, updateAirplanes] = useState([])
  const [formState, setFormState] = useState({
    model: '',
    topSpeed: '',
    unitCost: '',
    image: '',
    contractor: '',
    stealth: '',
    range: '',
    dateDeployed: '',
    genre: id
  })


  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newAirplane = await axios
      .post('http://localhost:3001/airplanes/', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateAirplanes([...airplanes, newAirplane.data])
    setFormState({
      model: '',
      topSpeed: '',
      unitCost: '',
      image: '',
      contractor: '',
      stealth: '',
      range: '',
      dateDeployed: '',
    })

  }

  return (
    <div>
      <h3>Create an Airplane</h3>
      <form onSubmit={handleSubmit}>
      <label htmlFor="model">Model:</label>
        <input id="model" value={formState.model} onChange={handleChange} />
        <label htmlFor="top_speed">Top Speed:</label>
        <input id="topSpeed" value={formState.topSpeed} onChange={handleChange}/>
        <label htmlFor="image">Image:</label>
        <input id="unitCost" value={formState.unitCost} onChange={handleChange}/>
        <label htmlFor="unitCost">Unit Cost:</label>
        <input id="image" value={formState.image} onChange={handleChange} />
        <label htmlFor="contractor">Contractor:</label>
        <input id="contractor" value={formState.contractor} onChange={handleChange} />
        <label htmlFor="stealth">Stealth (y/n):</label>
        <input id="stealth" value={formState.stealth} onChange={handleChange} />
        <label htmlFor="range">Range:</label>
        <input id="range" value={formState.range} onChange={handleChange} />
        <label htmlFor="dateDeployed">Date Deployed:</label>
        <input id="dateDeployed" value={formState.dateDeployed} onChange={handleChange} />
        <button type="submit" value={formState.id}>Add Airplane</button>
      </form>
    </div>
  )
}

export default Form
