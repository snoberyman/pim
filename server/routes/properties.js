const express = require('express')
const Property = require('../models/PropertyModel')

const router = express.Router()

// GET all Properties
router.get('/', (req, res) => {
    res.json({ messg: 'GET all Properties' })
})

// GET a single Property
router.get('/:id', (req, res) => {
    res.json({ messg: 'GET a single Property' })
})

// POST a single Property
router.post('/', async (req, res) => {

    const { name, type, value } = req.body

    try {
        const Property = await Property.create({ name, type, value });
        res.status(200).json(Property)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
})

// DELETE a single Property
router.delete('/:id', (req, res) => {
    res.json({ messg: 'DELETE a single Property' })
})

// UPDATE a single Property
router.patch('/:id', (req, res) => {
    res.json({ messg: 'UPDATE a single Property' })
})

module.exports = router