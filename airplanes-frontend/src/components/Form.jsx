import { useState, useEffect } from 'react'
import axios from 'axios'

const Form= (props) => {
  const [products, updateProducts] = useState([])
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    price: ''
  })
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newProduct = await axios
      .post('http://localhost:3001/products/', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    updateProducts([...products, newProduct.data])
    setFormState({
      title: '',
      description: '',
      price: ''
    })
  }

  return (
    <div>
      <h3>Create an Airplane</h3>
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
        <input id="title" value={formState.title} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={formState.description}
          onChange={handleChange}
        />
        <label htmlFor="price">Price:</label>
        <input id="price" value={formState.price} onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default Form
