const mongoUserRouter = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/users')

// get all users
mongoUserRouter.get('/users', async (request, response) => {
    const users = await User.find({})
    response.json(users.map(user=>{
        return {_id:user._id, name:user.name, color:user.color}
    }))
})

// creating user
mongoUserRouter.post('/users', (request, response) => {

// check if user exists.
User.countDocuments({name: request.body.name},
async (err, count)=> {

    // if exists then respond with 401
    if(count>0){
        response.status(401).send('user already exists');
    }

    // check for empty spaces in username and password
    else if (
        request.body.name.split('').includes(' ') ||
        request.body.password.split('').includes(' ')
        ){
        response.status(401).send('usernames and passwords cannot include blank spaces');
    }

    // if does not exist then create user.
    else {
        const passwordHash = await bcrypt.hash(request.body.password, 10)

        const note = new User({
            ...request.body,
            password: passwordHash,
            date: new Date()
        })

        // save sensitive info into a token
        const tokenInfo = { id: note._id }

        note.token = jwt.sign(tokenInfo, process.env.JWT_KEY)

        // save on mongoDB
        const savedNote = await note.save()
        response.json({
            token: savedNote.token,
            _id: savedNote._id,
            name: savedNote.name,
            color: savedNote.color
        })
    }
})
})

module.exports = mongoUserRouter;