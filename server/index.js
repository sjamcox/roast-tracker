const express = require('express')

const app = express()
const path = require('path')
const port = 3000
const db = require('./database')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '/../client/dist')))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.post('/', (req, res) => {
  db.addRoast(req.body)
    .then(() => res.status(201).send('Roast successfully added'))
    .catch(() => res.status(500).send('Server error'))
})

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})