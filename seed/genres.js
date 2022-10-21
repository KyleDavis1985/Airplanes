const db = require('../db')
const Genre = require('../models/genre')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const genres = []

  await Genre.insertMany(genres)
  console.log('Created some plants!')
}
const run = async () => {
  await main()
  db.close()
}

run()
