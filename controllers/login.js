const loginRouter = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/users')

loginRouter.post('/login', async (request, response) => {
    const savedUser = await User.find({ name:request.body.name });

    if(savedUser.length>0){
        const decrypted = await bcrypt.compare(request.body.password, savedUser[0].password)

        if(decrypted){
            const tokenInfo = { id: savedUser[0]._id }
            const newToken = jwt.sign(tokenInfo, process.env.JWT_KEY)

            await User.updateOne( {_id:savedUser[0]._id},{$set: { token: newToken }})

            response.json({
                token: savedUser[0].token,
                _id: savedUser[0]._id
            })
        } else {
            response.status(401).send('That is the incorrect password')
        }
    } else {
        response.status(401).send('That name does not match any user')
    }

})

module.exports = loginRouter;