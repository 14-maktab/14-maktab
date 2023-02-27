const { Schema, model } = require('mongoose')

const formRegister = new Schema({
    name: {
        type: String
    }
})

module.exports = model("Register", formRegister)