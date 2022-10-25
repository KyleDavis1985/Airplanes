const AirplaneCard = (props) => {
  return (
    <div>
      <h1>{props.model}</h1>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
    </div>
  )
}

export default AirplaneCard