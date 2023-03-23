const Card = require('../models/Card')
const mongoose = require('mongoose')

const getCards = async(req,res)=>{
  try{
    const cards = await Card.find({})
    res.json(cards)
  } catch(error){
    console.log(error)
  }
}
  const createCard = async(req, res)=>{
    const {front, back} = req.body
    try {
      const createdCard = await Card.create({front, back})
      res.json({msg: "Card Created!"})
    } catch (error) {
      res.status(400).json({error: 'Unable to add card.'})
    }
  }

  const getCard = async (req,res)=>{
    try {
      const data = await Card.findById(req.params.id)
      const card = await res.json(data)
      return card
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }

  const updateCard = async(req, res)=>{
    try {
      const data = await Card.findById(req.params.id)
      
    } catch (error) {
      
    }
  }

module.exports = {
  getCards,
  getCard,
  createCard,
}