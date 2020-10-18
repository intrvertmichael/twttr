const mongoPostRouter = require('express').Router()
const jwt = require('jsonwebtoken')

const Post = require('../models/posts')
const Hashtags = require('../models/hashtags')


// get all posts
mongoPostRouter.get('/posts', async (request, response) => {
    const posts = await Post.find({})
    response.json(posts.map(post=>{
        return {
            _id: post._id,
            authorId: post.authorId,
            payload: post.payload,
            date: post.date,
            likes: post.likes
        }
    }))
})

// get all hashtags
mongoPostRouter.get('/hashtags', async (request, response) => {
    const hashtags = await Hashtags.find({})
    response.json(hashtags)
})


// create a post
mongoPostRouter.post('/posts', async (request, response) => {
    if(!request.body.token){
        response
        .status(401)
        .send("No token was found.")
    }

    const decodedToken = jwt.verify(request.body.token, process.env.JWT_KEY)

    // error handle decoded token so if token is not valid doesnt make post
    if(decodedToken.id){
        // create post
        const post = new Post({
            authorId: decodedToken.id,
            payload: request.body.payload,
            likes: [],
            date: new Date()
        })

        await post.save()



        // create hashtag
        const hashtag = request.body.payload.split(' ').find(word => {
            return word.startsWith('#')
        }).substring(1)
        const postID = post._id

        // check if hashtag exists.
        const hashtagPost = await Hashtags.find({name: hashtag}).exec()

        // if exists then
        // add the post id to the list of postsWith
        if(hashtagPost.length !== 0){
            await Hashtags.updateOne( {name:hashtag}, { $addToSet: { postsWith: postID }})

            response.sendStatus(200)
        }

        // if does not exist then
        // create hashtag with first post id
        else {
            const createdHashtag = new Hashtags({
                name: hashtag,
                postsWith:[postID]
            })
            await createdHashtag.save()

            response.sendStatus(200)
        }
    } else {
        response.status(401).send('token was not valid')
    }

})



// delete a post
mongoPostRouter.post('/delete', async (request, response)=>{
    const decodedToken = jwt.verify(request.body.token, process.env.JWT_KEY)
    if(decodedToken.id){
        const post = await Post.findById(request.body._id)
        const hashtag = post.payload.split(' ').find(word => {
            return word.startsWith('#')
        }).substring(1)

        const savedHashtag = await Hashtags.findOne({name:hashtag}).exec()

        savedHashtag.postsWith = savedHashtag.postsWith.filter(HashtagPost=>{
            return String(HashtagPost) !== request.body._id
        })

        if(savedHashtag.postsWith.length === 0){
            await Hashtags.findByIdAndDelete(savedHashtag._id);
        } else {
            await savedHashtag.save()
        }

        await Post.findByIdAndDelete(request.body._id);
        response.sendStatus(200)

    } else {
        response.status(401).send('token was not valid')
    }
})



// add a like
mongoPostRouter.post('/like', async (request, response)=>{
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
mongoPostRouter.post('/dislike', async (request, response)=>{
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




module.exports = mongoPostRouter;