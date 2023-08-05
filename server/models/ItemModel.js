const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    properties: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: false
    }],
    collectionRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection',
        required: false
    }
}, { timestamps: true })


module.exports = mongoose.model('Item', itemSchema)