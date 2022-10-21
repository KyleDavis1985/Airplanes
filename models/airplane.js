const { Schema } = require('mongoose')
const GenreSchema = require('./genre')

const AirplaneSchema = new Schema(
  {
    model: { type: String, required: true },
    top_speed: { type: String, required: true },
    unit_cost: { type: String, required: true },
    image: { type: String, required: true },
    contractor: { type: String },
    stealth: { type: String },
    range: { type: String },
    cargo_capactiy: { type: String },
    date_deployed: { type: String },
    genre: { type: Schema.Types.ObjectId, ref: 'GenreSchema' }
  },
  { timestamps: true }
)

module.exports = AirplaneSchema
