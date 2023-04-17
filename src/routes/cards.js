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
router.post('/new-card', protect, createCard)
router.route('/:id').get(protect, getCard).put(protect, updateCard).delete(protect, deleteCard)


module.exports = router