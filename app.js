"use strict"

import express from "express"

const app = express()

app.get('/Kitty', function (req, res) {
  res.send('Hello, Kitty')
})
app.post('/Kitty', function (req, res) {
    res.send('Kitty got your message!')
})
app.use('/Kitty', express.static('static/kitty'))

app.use(express.static('static'))

app.listen(80, function () {
    console.log('Listening on port 80')
})

