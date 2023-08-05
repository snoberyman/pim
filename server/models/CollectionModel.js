const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collectionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    //parent: {
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref: 'Collection',
    //    required: false
    //},
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
}, { timestamps: true })


module.exports = mongoose.model('Collection', collectionSchema)