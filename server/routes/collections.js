const express = require('express')

const {
	createCollection,
	getCollection,
	getCollections,
	deleteCollection,
	updateCollection
} = require('../controllers/collectionController')

const router = express.Router()

// GET all Collections
router.get('/', getCollections)

// GET a single Collection
router.get('/:id', getCollection)

// POST a single Collection
router.post('/', createCollection)

// DELETE a single Collection
router.delete('/:id', deleteCollection)

// UPDATE a single Collection
router.patch('/:id', updateCollection)

module.exports = router