import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Form= (props) => {
  let { id } = useParams()
  const [airplanes, updateAirplanes] = useState([])
  const [formState, setFormState] = useState({
    model: '',
    top_speed: '',
    unit_speed: '',
    image: '',
    contractor: '',
    stealth: '',
    range: '',
    date_deployed: ''
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newAirplane = await axios
      .post('http://localhost:3001/airplanes', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateProducts([...products, newProduct.data])
    setFormState({
      model: '',
      top_speed: '',
      unit_speed: ''
    })
  }

  return (
    <div>
      <h3>Create an Airplane</h3>
      <form onSubmit={handleSubmit}>
      <label htmlFor="model">Model:</label>
        <input id="model" value={formState.model} onChange={handleChange} />
        <label htmlFor="topSpeed">Top Speed:</label>
        <input
          id="topSpeed"
          value={formState.description}
          onChange={handleChange}
        />
        <label htmlFor="image">Image:</label>
        <input id="image" value={formState.image} onChange={handleChange} />
        <label htmlFor="contractor">Contractor:</label>
        <input id="contractor" value={formState.price} onChange={handleChange} />
        <label htmlFor="stealth">Stealth (y/n):</label>
        <input id="stealth" value={formState.price} onChange={handleChange} />
        <label htmlFor="range">Range:</label>
        <input id="price" value={formState.price} onChange={handleChange} />
        <label htmlFor="dateDeployed">Date Deployed:</label>
        <input id="dateDeployed" value={formState.price} onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default Form
