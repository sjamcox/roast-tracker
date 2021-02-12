const express = require('express')

const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const db = require('./database')
const bodyParser = require('body-parser')
var history = require('connect-history-api-fallback');

app.use(history({ verbose: true, index: '/' }))
app.use(express.static('./dist'))
app.use(bodyParser.json())

app.get('/roasts', (req, res) => {
  db.getAllRoasts()
    .then((data) => res.status(200).send(data))
    .catch(() => res.status(500).send('Server error'))
})

app.post('/roasts', (req, res) => {
  db.addRoast(req.body)
    .then(() => res.status(201).send('Roast successfully added'))
    .catch(() => res.status(500).send('Server error'))
})

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})