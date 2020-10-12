const mongoPostRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Post = require('../models/posts')

// get all posts
mongoPostRouter.get('/posts', async (request, response) => {
    const posts = await Post.find({})
    response.json(posts)
})

// create a post
mongoPostRouter.post('/posts', async (request, response) => {
    if(!request.body.token){
        response
        .status(401)
        .send("No token was found.")
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

    await post.save()
    response.send('post was created successfully')
})

// add a like
mongoPostRouter.post('/like', async (request, response)=>{

    // find existing liked post
    const likedPost = await Post.findById(request.body._id).exec()

    // if the person didn't like before add like
    if(!likedPost.likes.includes(request.body.authorID)){
        await Post.updateOne( {_id:request.body._id}, { $addToSet: { likes: request.body.authorID }})
        response.status(200).send('like was added')
    }
    // otherwise send message
    else{
        response.status(401).send('this person already liked this post')
    }
})

module.exports = mongoPostRouter;