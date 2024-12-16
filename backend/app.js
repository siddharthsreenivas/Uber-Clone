const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const connectToDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

connectToDb()

app.get('/',(req,res)=>{
    res.send('Helo')
})
app.use('/users', userRoutes)
app.use('/captains', captainRoutes)

module.exports = app