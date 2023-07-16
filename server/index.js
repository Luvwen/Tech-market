const express = require('express')
const app = express()
const cors = require('cors')
const homeRoute = require('./routes/homeRoute')

app.use(cors())
app.use(express.json())

app.use('/api', homeRoute)

const PORT = 3001

app.listen(PORT, (req, res) => {
    console.log(`Server on in port ${PORT}`);
})