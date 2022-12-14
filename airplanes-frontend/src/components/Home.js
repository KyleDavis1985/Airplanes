import GenreCard from './GenreCard'

const Home = (props) => {
  return (
    <div className="genres">
      <div className="title-wrap">
        <h2>Aircraft Types</h2>
      </div>
      <div className="container-grid">
        {props.genres.map((genre) => (
          <GenreCard
            name={genre.name}
            image={genre.image}
            id={genre._id}
            key={genre._id}
            genre={props.selectedGenre}
            handleClick={props.handleClick}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
