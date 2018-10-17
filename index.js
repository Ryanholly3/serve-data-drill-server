const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser')
const people = require('./people')

app.use(cors());
app.use(bodyParser());


app.get('/', (req, res, next)=>{
  res.json(people)
})

app.listen(port, () => {
  console.log(`You are on ${port}`)
})
