const db = require('../db')
const { Airplane } = require('../models')

//Genre ID's
const fighters = '6356e5bc85b38ff43d759405'
const bomber = '6356e5bc85b38ff43d759406'
const attack = '6352e3a4ef2d7a275a9aa85c'
const uav = '6352e3a4ef2d7a275a9aa85d'
const isr = '6352e3a4ef2d7a275a9aa85e'
const experimental = '6352e3a4ef2d7a275a9aa85f'
const area51 = '6352e3a4ef2d7a275a9aa860'

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airplanes = [
    {
      model: 'F15 Eagle',
      top_speed: '1,875 mph (Mach 2.5 plus',
      unit_cost: '$43 million',
      image: 'http://lowflyingaviation.com/f15_files/vlb_images5/f150061.jpg',
      contractor: 'Boeing',
      stealth: 'No',
      range: '3400 Miles',
      // cargo_capactiy: { type: String },
      date_deployed: '1976',
      genre: fighters
    },
    {
      model: 'F18 Hornet',
      top_speed: '1,190 mph (Mach 1.7 plus',
      unit_cost: '$29 million',
      image: 'http://lowflyingaviation.com/f15_files/vlb_images5/f150061.jpg',
      contractor: 'Boeing',
      stealth: 'No',
      range: '1000 Miles',
      // cargo_capactiy: { type: String },
      date_deployed: '1978',
      genre: fighters
    },
    {
      model: 'B2',
      top_speed: '1,190 mph (Mach 1.7 plus',
      unit_cost: '$29 million',
      image: 'http://lowflyingaviation.com/f15_files/vlb_images5/f150061.jpg',
      contractor: 'Boeing',
      stealth: 'No',
      range: '1000 Miles',
      // cargo_capactiy: { type: String },
      date_deployed: '1978',
      genre: bomber
    }
  ]

  await Airplane.insertMany(airplanes)
  console.log('Created some airplanes!')
}
const run = async () => {
  await main()
  db.close()
}

run()

module.exports = { fighters, bomber, attack, uav, isr, experimental, area51 }
