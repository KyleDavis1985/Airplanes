const mongoose = require('mongoose')
const genreSchema = require('./genre')
const airplaneSchema = require('./airplane')

const Genre = mongoose.model('Genre', genreSchema)
const Airplane = mongoose.model('Airplane', airplaneSchema)

module.exports = {
  Genre,
  Airplane
}
