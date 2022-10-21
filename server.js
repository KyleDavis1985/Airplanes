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

//get one Airplane --> GET
app.get('/airplanes/:id', async (req, res) => {
  let foundAirplane = await Airplane.findById(req.params.id).populate('genre')
  res.json(foundAirplane)
})

// update one Airplane --> PUT
app.put('/airplanes/:id', async (req, res) => {
  let updatedAirplane = await Airplane.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updatedAirplane)
})

// update one Genre --> PUT
app.put('/genres/:id', async (req, res) => {
  let updatedGenre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updatedGenre)
})

// delete one Airplane --> DELETE
app.delete('/airplanes/:id', async (req, res) => {
  let deletedAirplane = await Airplane.findByIdAndDelete(req.params.id)
  res.json(deletedAirplane)
})

// delete one Genre --> DELETE
app.delete('/genres/:id', async (req, res) => {
  let deletedGenre = await Genre.findByIdAndDelete(req.params.id)
  res.json(deletedGenre)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
