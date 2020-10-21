const searchRouter = require('express').Router()
const Hashtags = require('../models/hashtags')

// get all hashtags
searchRouter.get('/hashtags', async (request, response) => {
    const hashtags = await Hashtags.find({})
    response.json(hashtags)
})

// search hashtags
searchRouter.post('/search', async (request, response) => {
    const received = request.body.payload.split(' ');

    // map through received hashtags array
    const allHashtagsallPosts = await Promise.all(
        received.map( 
        async hashtag => {
        const postsWithHashtag = await Hashtags.find({name:hashtag})
        // returns array of objects
        // need to extract postsWith from each object
        if(postsWithHashtag.length>0){
            return postsWithHashtag.flatMap(hashtagPost=> {
                return hashtagPost.postsWith
            })
        }
        })
    )

    // flatten list and remove undefined results
    const flattened = allHashtagsallPosts.flat().filter(item=>item).sort()
    const includesAndSymbol = received.includes('&')

    // if & symbol is used and
    // posts exist flatten list
    if(includesAndSymbol && flattened.length>0){
        let duplicateFilter = []
        for(let i=0; i<flattened.length; i++){
            if(String(flattened[i])===String(flattened[i+1])) {
                duplicateFilter.push(flattened[i])
            }
        }
        if(duplicateFilter.length>0){
            response.json(duplicateFilter)
        } else {
            response.status(400).send('no posts match those hashtags together')
        }
    }
    // if posts exist flatten list
    else if(!includesAndSymbol && flattened.length>0){
        response.json(flattened)
    }
    else {
        response.status(400).send('no posts match that hashtag')
    }
})

module.exports = searchRouter;