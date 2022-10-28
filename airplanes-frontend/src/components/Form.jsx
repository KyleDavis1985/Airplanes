import { useEffect, useState } from "react"

const Form= (props) => {
  const [count, setCount] = useState(0)

  useEffect (() => {

  },[count])

  const counter = () => {
    setCount(count + 1)
  }

  return (
    <div className='form-box'>
      <h3>Create or Update an Airplane</h3>
      <form className='form' onSubmit={props.handleSubmit}>
      <label htmlFor="model">Aircraft Model:</label>
        <input placeholder="Required" className="form-input" id="model" value={props.model} onChange={props.handleChange} />
        <label htmlFor="top_speed">Top Speed:</label>
        <input className="form-input" id="topSpeed" value={props.topSpeed} onChange={props.handleChange}/>
        <label htmlFor="unitCost">Price Per Unit:</label>
        <input className="form-input" id="unitCost" value={props.unitCost} onChange={props.handleChange} />
        <label htmlFor="contractor">Build Contractor:</label>
        <input className="form-input" id="contractor" value={props.contractor} onChange={props.handleChange} />
        <label htmlFor="stealth">Sealth Capable?:</label>
        <input placeholder="Yes/No" className="form-input" id="stealth" value={props.stealth} onChange={props.handleChange} />
        <label htmlFor="range">Flight Range:</label>
        <input className="form-input" id="range" value={props.range} onChange={props.handleChange} />
        <label htmlFor="dateDeployed">Year of First Flight:</label>
        <input className="form-input" id="dateDeployed" value={props.dateDeployed} onChange={props.handleChange} />
        <label htmlFor="image">Image:</label>
        <input placeholder=".png/.jpg" className="form-input" id="image" value={props.image} onChange={props.handleChange}/>
        <div className="form-btn-wrapper">
        <button className="form-btn" type="submit" onClick={counter} value={props.id}>Create Airplane</button>
        </div>
      </form>
    </div>
  )
}

export default Form
