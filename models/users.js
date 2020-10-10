const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String },
    password: { type: String },
    color: { type: String },
    token: { type: String },
    date: { type: Date },
})

module.exports = mongoose.model('User', userSchema)