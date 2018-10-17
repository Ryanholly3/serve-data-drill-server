const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser')
const people = require('./people')
const error = require('./error')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));


app.get('/', (req, res, next)=>{
  res.json(people)
})

people.map((person, i)=>{
  return app.get(`/${person.id}`, (req, res, next)=>{
    res.json(people[i])
  })
})

app.get('/*', (req, res, next)=>{
  res.json(error)
})

app.listen(port, () => {
  console.log(`You are on ${port}`)
})
