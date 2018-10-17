const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser());


app.get('/', (req, res, next)=>{
  res.send('HELLO')
})

app.listen(port, () => {
  console.log(`You are on ${port}`)
})
