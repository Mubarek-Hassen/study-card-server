const express = require('express')
const router = express.Router()

const Card = require('../models/Card')

const { 
  getCards,
  createCard,
} = require('../controllers/cards-controller')

router.get('/', getCards)
router.post('/new-card', createCard)


module.exports = router