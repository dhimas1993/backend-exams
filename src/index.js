const express = require('express')
const mysql = require('mysql')
const portconfig = require('./config/port')
const movies = require('./routers/movies')
const categories = require('./routers/categories')
const movcat = require('./routers/movcat')

const server = express()
const port = portconfig
server.use(express.json())
server.use(movies)
server.use(categories)
server.use(movcat)

server.get('/',(req,res) => {
    res.send('dah mulai deh')
})

server.listen(port, () => {
    console.log('sukses di port ' + port)
})