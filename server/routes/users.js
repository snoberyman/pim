const express = require('express')

const {
	createUser,
	getUser,
	getUsers,
	deleteUser,
	updateUser
} = require('../controllers/userController')

const router = express.Router()

// GET all Users
router.get('/', getUsers)

// GET a single User
router.get('/:id', getUser)

// POST a single User
router.post('/', createUser)

// DELETE a single User
router.delete('/:id', deleteUser)

// UPDATE a single User
router.patch('/:id', updateUser)

module.exports = router