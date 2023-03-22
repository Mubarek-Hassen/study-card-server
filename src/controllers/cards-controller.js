const Card = require('../models/Card')
const mongoose = require('mongoose')

const getCards = async(req,res)=>{
    const cards = await Card.find({})
    res.json(cards)
  }

  const createCard = async(req, res)=>{
    const {front, back} = req.body
    try {
      const createdCard = await Card.create( front, back)
      res.json({msg: "Card Created!"})
    } catch (error) {
      res.status(400).json({error: 'Unable to add card.'})
    }
  }

module.exports = {
  getCards,
  createCard,
}