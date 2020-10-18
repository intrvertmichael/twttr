const mongoose = require('mongoose')

const hashtagSchema = new mongoose.Schema({
    name: { type: String },
    postsWith: { type: Array }
})

module.exports = mongoose.model('Hashtags', hashtagSchema)