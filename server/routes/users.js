const express = require('express')

const router = express.Router()

// GET all Users
router.get('/', (req, res) => {
	res.json({ messg: 'GET all Users' })
})

// GET a single User
router.get('/:id', (req, res) => {
	res.json({ messg: 'GET a single User' })
})

// POST a single User
router.post('/', (req, res) => {
	res.json({ messg: 'POST a single User' })
})

// DELETE a single User
router.delete('/:id', (req, res) => {
	res.json({ messg: 'DELETE a single User' })
})

// UPDATE a single User
router.patch('/:id', (req, res) => {
	res.json({ messg: 'UPDATE a single User' })
})

module.exports = router