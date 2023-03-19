const express = require('express')
const router = express.Router()

const Card = require('../models/Card')

const { 
  getCards,
} = require('../controllers/cards-controller')

router.get('/', getCards)


module.exports = router