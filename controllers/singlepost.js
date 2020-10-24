const singlePageRouter = require('express').Router()
const Post = require('../models/posts')


singlePageRouter.get('/post/:id', async (request, response) => {
    const postId = request.params.id;
    const post = await Post.find({_id:postId})
    response.json(post[0])
})

module.exports = singlePageRouter;