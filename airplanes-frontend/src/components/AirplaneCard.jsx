import axios from 'axios'
import { Link } from 'react-router-dom'

const AirplaneCard = (props) => {

const deleteItem = async (e) => { 
  await axios.delete(`http://localhost:3001/airplanes/${e.target.value}`);
}


const updateItem = async (e) => {
  await axios.put(`http://localhost:3001/airplanes/${e.target.value}`, {
    model: '',
    topSpeed: '',
    image: '',
    unitCost: '',
    contract: '',
    stealth: '', 
    range: '',
    dateDeployed: '' 
  })
  }

  return (
    <div className="Airplane">
      <h1>{props.model}</h1>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
      <button type="delete" value={props.id} onClick={deleteItem}>Delete Airplane</button>
      <button type="update" value={props.id} onClick={updateItem}>Update Airplane</button>
    </div>
  )
}

export default AirplaneCard