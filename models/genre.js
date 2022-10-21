const { Schema } = require('mongoose')

const genreSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = genreSchema
