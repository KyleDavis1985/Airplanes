const db = require('../db')
const { Airplane } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airplanes = [
    {
      model: 'F15 Eagle',
      topSpeed: '1,875 mph (Mach 2.5 plus',
      unitCost: '$43 million',
      image: 'http://lowflyingaviation.com/f15_files/vlb_images5/f150061.jpg',
      contractor: 'Boeing',
      stealth: 'No',
      range: '3400 Miles',
      // cargo_capactiy: { type: String },
      dateDeployed: '1976',
      genre: fighters
    },
    {
      model: 'F18 Hornet',
      topSpeed: '1,190 mph (Mach 1.7 plus',
      unitCost: '$29 million',
      image: 'http://lowflyingaviation.com/f15_files/vlb_images5/f150061.jpg',
      contractor: 'Boeing',
      stealth: 'No',
      range: '1000 Miles',
      // cargo_capactiy: { type: String },
      dateDeployed: '1978',
      genre: fighters
    },
    {
      model: 'B2',
      topSpeed: '1,190 mph (Mach 1.7 plus',
      unitCost: '$29 million',
      image: 'http://lowflyingaviation.com/f15_files/vlb_images5/f150061.jpg',
      contractor: 'Boeing',
      stealth: 'No',
      range: '1000 Miles',
      // cargo_capactiy: { type: String },
      dateDeployed: '1978',
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
