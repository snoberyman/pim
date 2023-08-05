const express = require('express')

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
router.post('/', (req, res) => {
	res.json({ messg: 'POST a single Collection' })
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