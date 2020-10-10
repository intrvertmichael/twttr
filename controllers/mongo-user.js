const mongoUserRouter = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/users')

mongoUserRouter.get('/users', (request, response) => {
    User.find({}).then(users => response.json(users))
})

mongoUserRouter.post('/users', async (request, response) => {
    const passwordHash = await bcrypt.hash(request.body.password, 10)

    const note = new User({
        ...request.body,
        password: passwordHash,
        date: new Date()
    })

    const tokenInfo = { 
        id: note._id, 
        name:note.name, 
        color: note.color 
    }

    note.token = jwt.sign(tokenInfo, process.env.JWT_KEY)


    // decoding token for id to post.
    const decodedToken = jwt.verify(note.token, process.env.JWT_KEY)
    console.log('decodedToken', decodedToken)


    note.save()
        .then(savedNote => response.json({
            token: savedNote.token,
            _id: savedNote._id,
            name: savedNote.name,
            color: savedNote.color
        }))
        .catch(error => console.log(error))
})

module.exports = mongoUserRouter; 