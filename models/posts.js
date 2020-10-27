const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: { type: String },
    authorId: {type: String },
    color: {type: String },
    payload: { type: String },
    likes: { type: Array },
    comments: { type: Array },
    date: { type: Date }
})

module.exports = mongoose.model('Post', postSchema)