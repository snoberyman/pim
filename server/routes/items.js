const express = require('express')
const Item = require('../models/ItemModel')

const router = express.Router()

// GET all Items
router.get('/', (req, res) => {
    res.json({ messg: 'GET all Items' })
})

// GET a single Item
router.get('/:id', (req, res) => {
    res.json({ messg: 'GET a single Item' })
})

// POST a single Item
router.post('/', async (req, res) => {

    const { name, collectionRef, properties } = req.body

    try {
        const item = await Item.create({ name, collectionRef, properties });
        res.status(200).json(item)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
})

// DELETE a single Item
router.delete('/:id', (req, res) => {
    res.json({ messg: 'DELETE a single Item' })
})

// UPDATE a single Item
router.patch('/:id', (req, res) => {
    res.json({ messg: 'UPDATE a single Item' })
})

module.exports = router