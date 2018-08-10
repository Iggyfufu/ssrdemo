const express = require('express')
const volley = require('volleyball')
const data = require('./img').data

const app = express()

app.use(volley)
app.use('/public', express.static('public'))

// -------------CLIENT SIDE RENDERING-------------------//
app.get('/client', (req, res) => {
  res.sendFile(__dirname + '/components/index.html')
})

app.get('/', (req, res) => {
  res.send('Initial Page')
})

app.get('/api/images', function (req, res) {
  res.send(data)
})

app.listen(3000, () => {
  console.log('On the port 3000');
})
// -------------CLIENT SIDE RENDERING-------------------//
