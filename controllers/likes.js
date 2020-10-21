const likesRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Post = require('../models/posts')


// add a like
likesRouter.post('/like', async (request, response)=>{
    const decodedToken = jwt.verify(request.body.token, process.env.JWT_KEY)
    if(decodedToken.id){
        // find existing liked post
        const likedPost = await Post.findById(request.body._id).exec()

        // if the person didn't like before add like
        if(!likedPost.likes.includes(decodedToken.id)){
            await Post.updateOne(
                {_id:request.body._id},
                { $addToSet: { likes: decodedToken.id }
            })
            response.sendStatus(200)
        }
        // otherwise send message
        else{
            response.status(401).send('this person already liked this post')
        }
    }else{
        response.status(401).send('the token is invalid')
    }
})



// remove a like
likesRouter.post('/dislike', async (request, response)=>{
    const decodedToken = jwt.verify(request.body.token, process.env.JWT_KEY)
    if(decodedToken.id){
        // find existing liked post
        const likedPost = await Post.findById(request.body._id).exec()

        if(likedPost.likes.includes(decodedToken.id)){
            await Post.updateOne(
                {_id:request.body._id},
                { $pull: { likes: decodedToken.id }}
            )
            response.sendStatus(200)
        }
        // otherwise send message
        else{
            response.status(401).send('Was not able to dislike')
        }
    }else{
        response.status(401).send('The token is invalid')
    }
})

module.exports = likesRouter;