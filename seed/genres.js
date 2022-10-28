const db = require('../db')
const { Genre } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const genres = [
    {
      name: 'Fighters',
      image:
        'https://4.bp.blogspot.com/-l7_kdPaPzSg/TiX_fVPmZUI/AAAAAAAAAiE/mxUxsKoZcM8/s1600/f-22_raptor.jpg',
      airplanes: []
    },
    {
      name: 'Bombers',
      image:
        'https://nationalinterest.org/sites/default/files/main_images/tu95bomberflyingoverhead.jpg',
      airplanes: []
    },
    {
      name: 'Attack',
      image:
        'https://wallpapertag.com/wallpaper/middle/3/2/5/539788-a10-warthog-wallpaper-1920x1080-hd.jpg',
      airplanes: []
    },
    {
      name: 'UAV',
      image:
        'https://imagesvc.timeincapp.com/v3/foundry/image/?q=60&url=https:%2F%2Fs3.amazonaws.com%2Fthe-drive-staging%2Fmessage-editor%252F1516989499539-mq-9-er.jpg',
      airplanes: []
    },
    {
      name: 'Reconnaissance and surveillance',
      image:
        'https://www.warhistoryonline.com/wp-content/uploads/sites/64/2019/03/blackbirdsr71_1.jpg',
      airplanes: []
    },
    {
      name: 'Experimental',
      image:
        'https://i.pinimg.com/originals/82/cd/93/82cd93b709cab00f97963fc92c064f48.jpg',
      airplanes: []
    },
    {
      name: 'Cargo',
      image:
        'https://aeronavdata.com/wp-content/uploads/2013/03/C-17-032-Globemaster-032-III-032-Over-032-Alaska-1920x1080.jpg',
      airplanes: []
    },
    {
      name: 'Passenger',
      image: 'https://www.therichest.com/wp-content/uploads/1053.jpg',
      airplanes: []
    },
    {
      name: 'Area 51',
      image:
        'https://stormarea51basecamp.com/wp-content/uploads/2020/12/UFO-in-the-dark-sky-1024x576.jpg',
      airplanes: []
    }
  ]
  await Genre.insertMany(genres)
  console.log('Created some genres!')
}
const run = async () => {
  await main()
  db.close()
}

run()
