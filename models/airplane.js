const { Schema } = require('mongoose')
const GenreSchema = require('./genre')

const AirplaneSchema = new Schema(
  {
    model: { type: String, required: true },
    topSpeed: { type: String },
    unitCost: { type: String },
    image: { type: String },
    contractor: { type: String },
    stealth: { type: String },
    range: { type: String },
    dateDeployed: { type: String },
    genre: { type: Schema.Types.ObjectId, ref: 'genres' }
  },
  { timestamps: true }
)

module.exports = AirplaneSchema
