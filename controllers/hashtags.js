const searchRouter = require('express').Router()
const Hashtags = require('../models/hashtags')

// get all hashtags
searchRouter.get('/hashtags', async (request, response) => {
    const hashtags = await Hashtags.find({})
    response.json(hashtags)
})

// search hashtags
searchRouter.post('/search', async (request, response) => {
    let received = request.body.payload.split(/\s+/).map(hash => hash.startsWith('#')? hash.substring(1): hash);

    const includesAndSymbol = received.includes('&') || received.includes('and')

    let final
    if(!includesAndSymbol){
        const findPostsWithHashtag = await Hashtags.find(
            {name:received},
            {postsWith:1, _id:0},
        )

        final = findPostsWithHashtag.reduce((a, cV) => a.concat(cV.postsWith), [])
    }
    else if (includesAndSymbol) {
        const findPostsWithHashtag = await Hashtags.aggregate([
            { $match: { "name": { $in : received}} },
            { $unwind: "$postsWith"},
            { $group: {
                "_id": "$postsWith",
                "count": { $sum: 1 }
                }
            },
            { $match: { "count": { $gt: 1 } } }
        ])

        final = findPostsWithHashtag.reduce((a, cV) => a.concat(cV._id), [])
    }

    else {
        response.status(400).send('no posts match that hashtag')
    }

    response.json(final)

})

module.exports = searchRouter;