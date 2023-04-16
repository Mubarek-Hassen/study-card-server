const express = require('express')

const router = express.Router()

const { protect } = require("../middleware/authMiddleware.js")

const { 
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard
} = require('../controllers/cards-controller')

router.get('/', protect, getCards)
router.post('/new-card', createCard)
router.route('/:id').get(getCard).put(updateCard).delete(deleteCard)


module.exports = router