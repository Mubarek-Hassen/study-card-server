const express = require('express')
const router = express.Router()

const Card = require('../models/Card')

const { 
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard
} = require('../controllers/cards-controller')

router.get('/', getCards)
router.post('/new-card', createCard)
router.route('/:id').get(getCard).put(updateCard).delete(deleteCard)


module.exports = router