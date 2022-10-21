const GenreCard = (props) => {

  return (
    <div className="card" onClick={props.onClick}>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
      </div>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
    </div>
  )
}

export default GenreCard