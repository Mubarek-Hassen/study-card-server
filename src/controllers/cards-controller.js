const Card = require('../models/Card')
const userModel = require("../models/User")

// GET ALL CARDS
const getCards = async(req,res)=>{
  try{
    req.user._id
    const cards = await Card.find({ user: req.user.id})
    res.json(cards)
  } catch(error){
    console.log(error)
  }
}

// CREATE A CARD
  const createCard = async(req, res)=>{
    const {front, back, } = req.body
    try {
      const createdCard = await Card.create({ front, back, user: req.user._id})
      res.json({msg: "Card Created!"})
      res.send(createdCard)
    } catch (error) {
      console.error(error)
      res.status(400).json({error: 'Unable to add card.'})
    }
  }

  // GET A SINGLE CARD
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

  // UPDATE A CARD
  const updateCard = async(req, res)=>{
    const { front, back } = req.body
    try {
      const data = await Card.findByIdAndUpdate(req.params.id, { front, back})
      const card = await res.json(data)
      return card
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }

  // DELETE A CARD
  const deleteCard = async(req, res)=>{
    const { id } = req.params;
    try {
      const deletedCard = await Card.findByIdAndRemove(id)
      res.json(id)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  }

  // EXPORT ALL THE CARD CONTROLLING METHODS
module.exports = {
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard
}