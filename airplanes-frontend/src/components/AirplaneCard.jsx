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
    console.log(clicked)
  }

  if (clicked === false){
  return (
    <div className="airplane-preview" onClick={handleClick}>
      <h1>{props.model}</h1>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
      <button type="delete" value={props.id} onClick={props.delete}>Delete Airplane</button>
      <button type="update" value={props.id} onClick={props.update}>Update Airplane</button>
    </div>
  )
} else {
  return (
    <div className="airplane-details" onClick={handleClick}>
    <h1>{props.model}</h1>
    <h4>Stealth: {props.stealth}</h4>
    <h4>Top Speed: {props.topSpeed}</h4>
    <h4>Cost per Airplane: {props.unitCost}</h4>
    <h4>Contractor: {props.contractor}</h4>
    <h4>Inaguration Date: {props.dateDeployed}</h4>
  </div>
)
}
}


export default AirplaneCard