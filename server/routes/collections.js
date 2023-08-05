const express = require('express')
const Collection = require('../models/CollectionModel')
const router = express.Router()

// GET all Collections
router.get('/', (req, res) => {
	res.json({ messg: 'GET all Collections' })
})

// GET a single Collection
router.get('/:id', (req, res) => {
	res.json({ messg: 'GET a single Collection' })
})

// POST a single Collection
router.post('/', async (req, res) => {
	const { title, description, createdBy } = req.body

	try {
		const collection = await Collection.create({ title, description, createdBy });
		res.status(200).json(collection)
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
})

// DELETE a single Collection
router.delete('/:id', (req, res) => {
	res.json({ messg: 'DELETE a single Collection' })
})

// UPDATE a single Collection
router.patch('/:id', (req, res) => {
	res.json({ messg: 'UPDATE a single Collection' })
})

module.exports = router