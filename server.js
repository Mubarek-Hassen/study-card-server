const express = require('express')
const app = express()
const PORT = 8888
const cors = require('cors')

require('./src/config/db.connection')
const cardsRoutes = require('./src/routes/cards.js')
const userRoutes = require('./src/routes/user.js')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/grokker', cardsRoutes )
app.use('/user', userRoutes )

app.get('/test', (req,res)=> res.send('Test route!'))
// app.get('/', (req,res)=> res.send('Landing page route!'))

app.listen(PORT, ()=>console.log(`Server ready on port ${PORT}.`))