const { Schema, model } = require('mongoose')

const yutuqSchema = new Schema({
    yutuqTitle: {
        type: String,
        required: true
    },
    yutuqText: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
})

module.exports = model('yutuq', yutuqSchema)