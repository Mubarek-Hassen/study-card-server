const express = require('express')
const app = express()
const PORT = 8080

require('./src/config/db.connection')
import { userRoutes } from './src/routes/user'
const cardsRoutes = require('./src/routes/cards.js')
// const userRoutes = require('./src/routes/user.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/cards', cardsRoutes )
app.use('/user', userRoutes )

app.get('/test', (req,res)=> res.send('Test route!'))
// app.get('/', (req,res)=> res.send('Landing page route!'))

app.listen(PORT, ()=>console.log(`Server ready on port ${PORT}.`))