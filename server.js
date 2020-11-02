require('dotenv').config();
require('express-async-errors')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./controllers/user')
const postRouter = require('./controllers/posts')
const loginRouter = require('./controllers/login')
const searchRouter = require('./controllers/hashtags')
const likesRouter = require('./controllers/likes')
const singlePageRouter = require('./controllers/singlepost')
const commentsRouter = require('./controllers/comments')
const userPostsRouter = require('./controllers/userPosts')
const path = require('path');

const app = express()

// middleware
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

// connect
const connectMongo = async () => {
    const connected = await mongoose.connect(process.env.MONGO_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    if(connected){
        console.log('connected to MongoDB')
    } else {
        console.log('there was an issue connecting to MongoDB')
    }

}
connectMongo();
// routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.use("/api", userRouter)
app.use("/api", postRouter)
app.use("/api", loginRouter)
app.use("/api", searchRouter)
app.use("/api", likesRouter)
app.use("/api", singlePageRouter)
app.use("/api", commentsRouter)
app.use("/api", userPostsRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT,() => console.log('listening on port:', PORT));