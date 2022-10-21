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

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
