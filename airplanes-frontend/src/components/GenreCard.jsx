
const GenreCard = (props) => {

  return (
    <div className="genre-card">
      <div className="genre-button-wrapper">
        <button className="genre-button" onClick={props.handleClick} value={props.id}>{props.name}</button>
      </div>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name}></img>
      </div>
    </div>
  )
}

export default GenreCard