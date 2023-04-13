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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    }
},{
  timestamps: true
})

module.exports = mongoose.model('Card', cardSchema)