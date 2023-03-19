const Card = require('../models/Card')

const getCards = async(req,res)=>{
    const cards = await Card.find({})
    res.json(cards)
  }

module.exports = {
  getCards,
}