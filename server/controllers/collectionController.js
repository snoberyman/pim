const Collection = require('../models/collectionModel')

// Get all Collections
const getCollections = async (req, res) => {
    const collections = await Collection.find().sort({ createdAt: -1 })
    res.status(200).json(collections)
}

// Get a single Collection
const getCollection = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid CollectionId!' })
    }

    const collection = await Collection.findById(id)

    if (!collection) {
        return res.status(400).json({ error: 'No such Collection!' })
    }

    res.status(200).json(collection)
}

// Create a new Collection
const createCollection = async (req, res) => {
    const { title, description, createdBy } = req.body

    try {
        const collection = await Collection.create({ title, description, createdBy });
        res.status(200).json(collection)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

// Delete a Collection
const deleteCollection = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid CollectionId!' })
    }

    const collection = await Collection.findOneAndDelete({ _id: id })

    if (!collection) {
        return res.status(400).json({ error: 'No such Collection!' })
    }

    res.status(200).json(collection)
}

// Update a Collection
const updateCollection = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid CollectionId!' })
    }

    const collection = await Collection.findOneAndUpdate({ _id: id }, ...req.body )

    if (!collection) {
        return res.status(400).json({ error: 'No such Collection!' })
    }

    res.status(200).json(collection)
}




module.exports = {
    createCollection,
    getCollections,
    getCollection,
    deleteCollection,
    updateCollection
}