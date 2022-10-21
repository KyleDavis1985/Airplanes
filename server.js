const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Genre, Airplane } = require('./models')
const cors = require('cors')

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//routes

// create genre - POST ROUTE
app.post('/genres', async (req, res) => {
  let createdGenre = await Genre.create(req.body)
  res.json(createdGenre)
})

// pull all genres - GET ROUTE
app.get('/genres', async (req, res) => {
  let allGenres = await Genre.find({})
  res.json(allGenres)
})

// create an airplane --> POST
app.post('/airplanes', async (req, res) => {
  let exampleGenreId = '6352acfb81fc0d82a06ae986'
  const requestBody = { ...req.body, genre: exampleGenreId }
  let createdAirplane = await Airplane.create(requestBody)
  res.json(createdAirplane)
})

// pull all airplanes - GET
app.get('/airplanes', async (req, res) => {
  const allAirplanes = await Airplane.find({})
  res.json(allAirplanes)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
