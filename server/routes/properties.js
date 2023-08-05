const express = require('express')

const {
	createProperty,
	getProperty,
	getProperties,
	deleteProperty,
	updateProperty
} = require('../controllers/propertyController')

const router = express.Router()

// GET all Propertys
router.get('/', getProperties)

// GET a single Property
router.get('/:id', getProperty)

// POST a single Property
router.post('/', createProperty)

// DELETE a single Property
router.delete('/:id', deleteProperty)

// UPDATE a single Property
router.patch('/:id', updateProperty)

module.exports = router