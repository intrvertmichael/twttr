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
            likes: post.likes,
            comments: post.comments
        }
    }))
})



// - - - - - - - - - - - - - - - - - - - - - - -
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
        const allHashtags = request.body.payload.split(/\s+/).filter(word => {
            if(word.startsWith('#')){
                return word
            }
        })

        allHashtags.map( async hashtag =>{
            hashtag = hashtag.substring(1).toLowerCase()
            const postID = post._id

            // check if hashtag exists.
            const hashtagPost = await Hashtags.find({name: hashtag}).exec()

            // if exists then
            // add the post id to the list of postsWith
            if(hashtagPost.length !== 0){
                await Hashtags.updateOne( {name:hashtag}, { $addToSet: { postsWith: postID }})
            }

            // if does not exist then
            // create hashtag with first post id
            else {
                const createdHashtag = new Hashtags({
                    name: hashtag,
                    postsWith:[postID]
                })
                await createdHashtag.save()
            }
        })


        response.sendStatus(200)
    } else {
        response.status(401).send('token was not valid')
    }

})



// - - - - - - - - - - - - - - - - - - - - - - -
// delete a post
mongoPostRouter.post('/delete', async (request, response)=>{
    const decodedToken = jwt.verify(request.body.token, process.env.JWT_KEY)
    if(decodedToken.id){
        const post = await Post.findById(request.body._id)

        const allHashtags = post.payload.split(/\s+/).filter(word => {
            if(word.startsWith('#')){
                return word
            }
        })

        allHashtags.map( async hashtag => {
            hashtag = hashtag.substring(1)

            const savedHashtag = await Hashtags.findOne({name:hashtag}).exec()
            if(savedHashtag) {
                savedHashtag.postsWith = savedHashtag.postsWith.filter(HashtagPost=>{
                    return String(HashtagPost) !== request.body._id
                })

                if(savedHashtag.postsWith.length === 0){
                    await Hashtags.findByIdAndDelete(savedHashtag._id);
                } else {
                    await savedHashtag.save()
                }
            }
        })

        await Post.findByIdAndDelete(request.body._id);
        response.sendStatus(200)
    } else {
        response.status(401).send('token was not valid')
    }
})


module.exports = mongoPostRouter;