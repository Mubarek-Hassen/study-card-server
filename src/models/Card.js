const mongoose = require("mongoose")
const { Schema } = mongoose;


const cardSchema = new Schema({
    front: {
      type: String,
      required: [true, "Please add description."]
    },
    back: {
      type: String,
      required: [true, "Please add word."]
    },
},{
  timestamps: true
})

module.exports = mongoose.model('Card', cardSchema)