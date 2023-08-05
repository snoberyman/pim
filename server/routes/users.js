const express = require('express')
const User = require('../models/UserModel')

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
router.post('/', async (req, res) => {

    const { name } = req.body

    try {
        const user = await User.create({ name });
        res.status(200).json(user)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
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