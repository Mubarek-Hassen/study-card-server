const Card = require('../models/Card')

const getCards = async(req,res)=>{
  try {
    const cards = await Card.find({})
    res.json(cards)
  } catch (error) {
    res.json(error)
  }
}