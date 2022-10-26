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
      <label htmlFor="model">Model:</label>
        <input id="model" value={props.model} onChange={props.handleChange} />
        <label htmlFor="top_speed">Top Speed:</label>
        <input id="topSpeed" value={props.topSpeed} onChange={props.handleChange}/>
        <label htmlFor="image">Image:</label>
        <input id="image" value={props.image} onChange={props.handleChange}/>
        <label htmlFor="unitCost">Unit Cost:</label>
        <input id="unitCost" value={props.unitCost} onChange={props.handleChange} />
        <label htmlFor="contractor">Contractor:</label>
        <input id="contractor" value={props.contractor} onChange={props.handleChange} />
        <label htmlFor="stealth">Stealth (y/n):</label>
        <input id="stealth" value={props.stealth} onChange={props.handleChange} />
        <label htmlFor="range">Range:</label>
        <input id="range" value={props.range} onChange={props.handleChange} />
        <label htmlFor="dateDeployed">Date Deployed:</label>
        <input id="dateDeployed" value={props.dateDeployed} onChange={props.handleChange} />
        <button type="submit" onClick={counter} value={props.id}>Create Airplane</button>
      </form>
    </div>
  )
}

export default Form
