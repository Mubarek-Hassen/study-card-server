const express = require('express')
const app = express()
const PORT = 8080

require('./src/config/db.connection')

const cardsRoutes = require('./src/routes/cards.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/cards', cardsRoutes )

app.get('/test', (req,res)=> res.send('Test route!'))
// app.get('/', (req,res)=> res.send('Landing page route!'))

app.listen(PORT, ()=>console.log(`Server ready on port ${PORT}.`))