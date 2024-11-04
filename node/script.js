const express = require('express')
const connectDB = require('./config/Dbconnection')
const router = require('./routes/route')
const cors = require('cors')

require('dotenv').config()
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.use(router)

connectDB()
const PORT = process.env.PORT || 7000;
app.listen(process.env.PORT, ()=>{
    console.log(`server is runnig on port ${PORT}`)
})
