const userPostsRouter = require('express').Router()
const Post = require('../models/posts')

userPostsRouter.post('/userPosts', async (request, response)=>{
    if(request.body.authorId){
        const posts = await Post.find({authorId: request.body.authorId})
        response.json(posts)
    }
    else{
        response.status(401).send('The token is invalid')
    }
})

module.exports = userPostsRouter;