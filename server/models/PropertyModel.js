const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertyModel = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: ["Color", "Text", "Image", "Link"],
        required: true
    },
    value: {
        type: Object,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('Property', propertyModel)