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
    <div className="airplane-preview">
    <div className='details-clicker'onClick={handleClick}>
      <h4 className="detail">Top Speed: {props.topSpeed}</h4>
      <h4 className="detail">Price per Airplane: {props.unitCost}</h4>
      <h4 className="detail">Contractor: {props.contractor}</h4>
      <h4 className="detail">Stealth: {props.stealth}</h4>
      <h4 className="detail">Flight Range: {props.range}</h4>
      <h4 className="detail">First Flight: {props.dateDeployed}</h4>  
      <h4 className="detail">Image Link: <a className="link" href={props.image}>Link</a></h4>   
    </div>
      <button className="deleteButton" type="delete" value={props.id} onClick={props.delete}>Delete Airplane</button>
      <button className="updateButton" type="update" value={props.id} onClick={props.update}>Update Airplane</button>
  </div>
    ) 
  }
}


export default AirplaneCard