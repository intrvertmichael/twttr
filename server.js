require('dotenv').config();
require('express-async-errors')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoUserRouter = require('./controllers/mongo-user')
const mongoPostRouter = require('./controllers/mongo-post')
const loginRouter = require('./controllers/mongo-login')
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

app.use("/api", mongoUserRouter)
app.use("/api", mongoPostRouter)
app.use("/api", loginRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT,() => console.log('listening on port:', PORT));