const db = require('../db')
const Genre = require('../models/genre')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const genres = [
    {
      name: 'Fighters',
      image:
        'https://4.bp.blogspot.com/-l7_kdPaPzSg/TiX_fVPmZUI/AAAAAAAAAiE/mxUxsKoZcM8/s1600/f-22_raptor.jpg'
    },
    {
      name: 'Bombers',
      image:
        'https://nationalinterest.org/sites/default/files/main_images/tu95bomberflyingoverhead.jpg'
    },
    {
      name: 'Attack',
      image:
        'http://www.aiirsource.com/wp/wp-content/uploads/2016/06/a-10-ground-attack-aircraft-in-a-1280x768.jpg'
    },
    {
      name: 'Unmanned Combat Aerial Vehicle (UAV)',
      image:
        'https://imagesvc.timeincapp.com/v3/foundry/image/?q=60&url=https:%2F%2Fs3.amazonaws.com%2Fthe-drive-staging%2Fmessage-editor%252F1516989499539-mq-9-er.jpg'
    },
    {
      name: 'Reconnaissance and surveillance',
      image:
        'https://tinnhanhtv.com/wp-content/uploads/2021/07/sr-71-blackbird-photo-from-lockheed-martin-scaled.jpg'
    },
    {
      name: 'Experimental',
      image:
        'https://i.pinimg.com/originals/82/cd/93/82cd93b709cab00f97963fc92c064f48.jpg'
    },
    {
      name: 'Area 51',
      image:
        'https://stormarea51basecamp.com/wp-content/uploads/2020/12/UFO-in-the-dark-sky-1024x576.jpg'
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
