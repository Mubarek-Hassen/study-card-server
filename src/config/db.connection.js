const mongoose = require('mongoose')

require('dotenv').config()

// const connectionStr = process.env.MONGODB_URI

mongoose.set('strictQuery', true)

// mongoose.connect(connectionStr)

mongoose.connection.on('connected', ()=>console.log(`Connected!`))
mongoose.connection.on('error', ()=>console.log(`error ===>>> ${error}`))
mongoose.connection.on('disconnected', ()=>console.log(`Mongo Disconnected!`))