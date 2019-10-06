const mongoose = require('mongoose')
const {Schema} = mongoose

const spotSchema = new Schema({
  thumbnail: String,
  price: Number,
  company: String,
  techs: [String],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Spot', spotSchema)