const { Schema } = require('mongoose')

const airplaneSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    top_speed: { type: String, required: true },
    stealth: { type: Boolean, required: true },
    url: { type: String, required: true },
    genre: { type: Schema.Types.ObjectId, ref: 'Genre' }
  },
  { timestamps: true }
)

module.exports = airplaneSchema
