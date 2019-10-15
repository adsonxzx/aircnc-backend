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
}, 
 {
   toJSON: {virtuals: true}
 }
)

spotSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', spotSchema)