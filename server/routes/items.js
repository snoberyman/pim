const express = require('express')

const {
	createItem,
	getItem,
	getItems,
	deleteItem,
	updateItem
} = require('../controllers/itemController')

const router = express.Router()

// GET all Items
router.get('/', getItems)

// GET a single Item
router.get('/:id', getItem)

// POST a single Item
router.post('/', createItem)

// DELETE a single Item
router.delete('/:id', deleteItem)

// UPDATE a single Item
router.patch('/:id', updateItem)

module.exports = router