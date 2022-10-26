
const AirplaneCard = (props) => {


  return (
    <div className="Airplane">
      <h1>{props.model}</h1>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
      <button type="delete" value={props.id} onClick={props.delete}>Delete Airplane</button>
      <button type="update" value={props.id} onClick={props.update}>Update Airplane</button>
    </div>
  )
}

export default AirplaneCard