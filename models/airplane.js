const { Schema } = require('mongoose')

const airplaneSchema = new Schema(
  {
    model: { type: String, required: true },
    description: { type: String, required: true },
    top_speed: { type: String, required: true },
    stealth: { type: String },
    date_deployed: { type: String },
    unit_cost: { type: String, required: true },
    url: { type: String, required: true },
    genre: { type: Schema.Types.ObjectId, ref: 'Genre' }
  },
  { timestamps: true }
)

module.exports = airplaneSchema
