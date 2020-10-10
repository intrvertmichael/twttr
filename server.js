require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoUserRouter = require('./controllers/mongo-user')
const mongoPostRouter = require('./controllers/mongo-post')
const loginRouter = require('./controllers/login')
const path = require('path');

const app = express()

// middleware
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

// connect
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(result => console.log('connected to MongoDB'))
    .catch((error) => console.log('error connecting to MongoDB:', error.message))

// routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.use("/api", mongoUserRouter)
app.use("/api", mongoPostRouter)
app.use("/api", loginRouter)

const PORT = 3001;
app.listen(PORT,() => console.log('listening on port:', PORT));