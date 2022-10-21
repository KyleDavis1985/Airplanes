const db = require('../db')
const Airplane = require('../models/airplane')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airplanes = []

  await Airplane.insertMany(airplanes)
  console.log('Created some airplanes!')
}
const run = async () => {
  await main()
  db.close()
}

run()
