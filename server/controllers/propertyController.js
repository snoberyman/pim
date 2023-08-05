const Property = require('../models/propertyModel')
const mongoose = require('mongoose')

// Get all Propertys
const getProperties = async (req, res) => {
    const properties = await Property.find().sort({ createdAt: -1 })
    res.status(200).json(properties)
}

// Get a single Property
const getProperty = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid PropertyId!' })
    }

    const property = await Property.findById(id)

    if (!property) {
        return res.status(400).json({ error: 'No such Property!' })
    }

    res.status(200).json(property)
}

// Create a new Property
const createProperty = async (req, res) => {
    const { title, description, createdBy } = req.body

    try {
        const property = await Property.create({ title, description, createdBy });
        res.status(200).json(property)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

// Delete a Property
const deleteProperty = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid PropertyId!' })
    }

    const property = await Property.findOneAndDelete({ _id: id })

    if (!property) {
        return res.status(400).json({ error: 'No such Property!' })
    }

    res.status(200).json(property)
}

// Update a Property
const updateProperty = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid PropertyId!' })
    }

    const property = await Property.findOneAndUpdate({ _id: id }, ...req.body)

    if (!property) {
        return res.status(400).json({ error: 'No such Property!' })
    }

    res.status(200).json(property)
}




module.exports = {
    createProperty,
    getProperties,
    getProperty,
    deleteProperty,
    updateProperty
}