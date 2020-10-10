const mongoPostRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Post = require('../models/posts')

mongoPostRouter.get('/posts', (request, response) => {
    Post.find({}).then(posts => response.json(posts))
})


mongoPostRouter.post('/posts', async (request, response) => {
    if(!request.body.token){
        response
        .status(401)
        .send("There was an issue with the token.")
    }

    const decodedToken = jwt.verify(request.body.token, process.env.JWT_KEY)

    const post = new Post({
        name: decodedToken.name,
        color: decodedToken.color,
        authorId: decodedToken.id,
        payload: request.body.payload,
        likes: [],
        date: new Date()
    })

    post.save()
        .then(savedNote => response.send('post was created successfully'))
        .catch(error => console.log(error))
})

module.exports = mongoPostRouter;