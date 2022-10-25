import axios from 'axios'

const AirplaneCard = (props) => {

const deleteItem = async (e) => { 
  await axios.delete(`http://localhost:3001/airplanes/${e.target.value}`);
}

  return (
    <div className="Airplane">
      <h1>{props.model}</h1>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
      <button type="delete" value={props.id} onClick={deleteItem}>Delete Airplane</button>
      <button type="update">Update Airplane</button>
    </div>
  )
}

export default AirplaneCard