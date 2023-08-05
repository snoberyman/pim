const Item = require('../models/itemModel')
const mongoose = require('mongoose')

// Get all Items
const getItems = async (req, res) => {
    const items = await Item.find().sort({ createdAt: -1 })
    res.status(200).json(items)
}

// Get a single Item
const getItem = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ItemId!' })
    }

    const item = await Item.findById(id)

    if (!item) {
        return res.status(400).json({ error: 'No such Item!' })
    }

    res.status(200).json(item)
}

// Create a new Item
const createItem = async (req, res) => {
    const { title, description, createdBy } = req.body

    try {
        const item = await Item.create({ title, description, createdBy });
        res.status(200).json(item)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

// Delete a Item
const deleteItem = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ItemId!' })
    }

    const item = await Item.findOneAndDelete({ _id: id })

    if (!item) {
        return res.status(400).json({ error: 'No such Item!' })
    }

    res.status(200).json(item)
}

// Update a Item
const updateItem = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid ItemId!' })
    }

    const item = await Item.findOneAndUpdate({ _id: id }, ...req.body )

    if (!item) {
        return res.status(400).json({ error: 'No such Item!' })
    }

    res.status(200).json(item)
}




module.exports = {
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem
}