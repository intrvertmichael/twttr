const loginRouter = require('express').Router()
const bcrypt = require('bcrypt');
const User = require('../models/users')

loginRouter.get('/login', async (request, response) => {
    const savedUser = await User.find({ name:request.body.name });
    const decrypted = await bcrypt.compare(request.body.password, savedUser[0].password)

    if(decrypted){
        response.json({
            token: savedUser[0].token,
            _id: savedUser[0]._id,
            name: savedUser[0].name,
            color: savedUser[0].color
        })
    }
    else {
        response.status(401).send('Those cridentials dont match any user')
    }
})

module.exports = loginRouter;