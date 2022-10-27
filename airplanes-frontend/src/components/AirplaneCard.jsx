import { useState } from 'react'
const AirplaneCard = (props) => {
  const [clicked, toggleClicked] = useState(false)

  const handleClick = (e) => {
    if (e.target) {
      if (clicked === false) {
        toggleClicked(true)
      } else if (clicked === true) {
        toggleClicked(false)
      }
    }
 
  }

  if (clicked === false){
  return (
    <div className="airplane-preview">
      <div className='clicker'onClick={handleClick}>
        <div className='airplane-card-title'>
          <h1>{props.model}</h1>
        </div>
      <div className="airplane-card-img-wrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
        <h4>Click for more information</h4>
      </div>
        <button className="deleteButton" type="delete" value={props.id} onClick={props.delete}>Delete Airplane</button>
        <button className="updateButton" type="update" value={props.id} onClick={props.update}>Update Airplane</button>
    </div>
  )
} else {
  return (
    <div className="airplane-details" onClick={handleClick}>
    <div className='airplane-details-title'>
    <h1>{props.model}</h1>
    </div>
    <h4>Stealth: {props.stealth}</h4>
    <h4>Top Speed: {props.topSpeed}</h4>
    <h4>Cost per Airplane: {props.unitCost}</h4>
    <h4>Contractor: {props.contractor}</h4>
    <h4>Inauguration Date: {props.dateDeployed}</h4>
  </div>
)
}
}


export default AirplaneCard