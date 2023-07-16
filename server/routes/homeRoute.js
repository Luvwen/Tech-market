const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.send({name: 'santiago', age: 35})
    console.log('im here');
})

module.exports = route