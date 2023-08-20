const express = require('express')
require('dotenv').config();
const app = express()

app.use('/spacees', require('./controllers/places'))

app.get('*', (req, res) => {
    res.status(404).send('<h1>404</h1>')
})
app.listen(process.env.PORT)

