const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('../client'))

app.get('/', (req, res, next) => {
  res.sendFile('/client/index.html')
})

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})