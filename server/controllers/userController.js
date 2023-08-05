const User = require('../models/userModel')

// Get all Users
const getUsers = async (req, res) => {
    const users = await User.find().sort({ createdAt: -1 })
    res.status(200).json(users)
}

// Get a single User
const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid UserId!' })
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(400).json({ error: 'No such User!' })
    }

    res.status(200).json(user)
}

// Create a new User
const createUser = async (req, res) => {
    const { title, description, createdBy } = req.body

    try {
        const user = await User.create({ title, description, createdBy });
        res.status(200).json(user)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

// Delete a User
const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid UserId!' })
    }

    const user = await User.findOneAndDelete({ _id: id })

    if (!user) {
        return res.status(400).json({ error: 'No such User!' })
    }

    res.status(200).json(user)
}

// Update a User
const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid UserId!' })
    }

    const user = await User.findOneAndUpdate({ _id: id }, ...req.body)

    if (!user) {
        return res.status(400).json({ error: 'No such User!' })
    }

    res.status(200).json(user)
}




module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}