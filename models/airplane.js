const { Schema } = require('mongoose')

const airplaneSchema = new Schema(
  {
    model: { type: String, required: true },
    description: { type: String, required: true },
    top_speed: { type: String, required: true },
    unit_cost: { type: String, required: true },
    url: { type: String, required: true },
    contractor: { type: String },
    stealth: { type: String },
    range: { type: String },
    variants: { type: String },
    cargo_capactiy: { type: String },
    date_deployed: { type: String },
    genre: { type: Schema.Types.ObjectId, ref: 'Genre' }
  },
  { timestamps: true }
)

module.exports = airplaneSchema
