const mongoose = require('mongoose')


const cardSchema = new mongoose.Schema({
  card: {
    front: {
      Type: String,
      required: [true, "Please add description."]
    },
    back: {
      Type: String,
      required: [true, "Please add word."]
    },
  }
},{
  timestamps: true
})

module.exports = Card = mongoose.model('card', cardSchema)