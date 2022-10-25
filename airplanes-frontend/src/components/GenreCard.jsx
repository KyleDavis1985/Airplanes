
const GenreCard = (props) => {

  return (
    <div className="genre-card">
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
      </div>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
      <button onClick={props.handleClick} value={props.id}>Test</button>
    </div>
  )
}

export default GenreCard