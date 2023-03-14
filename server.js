const express = require('express')
const app = express()
const PORT = 8080

require('./src/config/db.connection')

app.get('/test', (req,res)=> res.send('Test route!'))
app.get('/', (req,res)=> res.send('Landing page route!'))

app.listen(PORT, ()=>console.log(`Server ready on port ${PORT}.`))