
const Form= (props) => {

  return (
    <div>
      <h3>Create an Airplane</h3>
      <form onSubmit={props.handleSubmit}>
      <label htmlFor="model">Model:</label>
        <input id="model" value={props.model} onChange={props.handleChange} />
        <label htmlFor="top_speed">Top Speed:</label>
        <input id="topSpeed" value={props.topSpeed} onChange={props.handleChange}/>
        <label htmlFor="image">Image:</label>
        <input id="unitCost" value={props.unitCost} onChange={props.handleChange}/>
        <label htmlFor="unitCost">Unit Cost:</label>
        <input id="image" value={props.image} onChange={props.handleChange} />
        <label htmlFor="contractor">Contractor:</label>
        <input id="contractor" value={props.contractor} onChange={props.handleChange} />
        <label htmlFor="stealth">Stealth (y/n):</label>
        <input id="stealth" value={props.stealth} onChange={props.handleChange} />
        <label htmlFor="range">Range:</label>
        <input id="range" value={props.range} onChange={props.handleChange} />
        <label htmlFor="dateDeployed">Date Deployed:</label>
        <input id="dateDeployed" value={props.dateDeployed} onChange={props.handleChange} />
        <button type="submit" value={props.id}>Add Airplane</button>
      </form>
    </div>
  )
}

export default Form
