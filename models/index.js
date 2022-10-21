const mongoose = require('mongoose')
const GenreSchema = require('./genre')
const AirplaneSchema = require('./airplane')

const Genre = mongoose.model('Genre', GenreSchema)
const Airplane = mongoose.model('Airplane', AirplaneSchema)

module.exports = {
  Genre,
  Airplane
}
