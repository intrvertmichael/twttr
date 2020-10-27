const commentsRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Post = require('../models/posts')
const mongoose = require('mongoose');


commentsRouter.post('/comments', async (request, response)=>{
    const decodedToken = jwt.verify(request.body.token, process.env.JWT_KEY)
    if(decodedToken.id){
        await Post.updateOne(
            {_id:request.body._id},
            { $addToSet: { comments: {
                _id: new mongoose.Types.ObjectId(),
                authorId: decodedToken.id,
                message: request.body.message,
                date: new Date()
            }}
        })

        response.sendStatus(200)
    }
    else{
        response.status(401).send('Could not add comment')
    }
})

commentsRouter.post('/deletecomment', async (request, response)=>{
    const decodedToken = jwt.verify(request.body.token, process.env.JWT_KEY)
    if(decodedToken.id){

        let deleteComment = await Post.findOne({_id: request.body.postId})
        deleteComment.comments = deleteComment.comments.filter(c => {
            return String(c._id) !== request.body.commentId
        })

        await deleteComment.save()
        response.sendStatus(200)
    }
    else{
        response.status(401).send('The token is invalid')
    }
})

module.exports = commentsRouter;