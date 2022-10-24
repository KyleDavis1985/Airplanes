import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { set } from 'mongoose'

const AirplaneCard = (props) => {
  let { id } = useParams()
  const [genre, setSelectedGenre] = useState(null)

  useEffect(() => {
    let selectedGenre = props.genres.find(
      (genre) => genre.id === parseInt(id)
    )  

    setSelectedGenre(selectedGenre)

  }, [props.genre, id])

  console.log(id)


  return (
    <div className="airplane-card">
      <div className="info-wrapper flex-col">
        <h3>test</h3>
      </div>
      <div className="img-wrapper">
      </div>
    </div>
  )
}

export default AirplaneCard