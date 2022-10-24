const { Schema } = require('mongoose')

const GenreSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    airplanes: [{ type: Schema.Types.ObjectId, ref: 'Airplane' }]
  },
  { timestamps: true }
)

module.exports = GenreSchema
