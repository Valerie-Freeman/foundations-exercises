const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/time', (req, res) => {
  let day = new Date();
  res.send(day);
})

let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening on ${port}`);
  
})