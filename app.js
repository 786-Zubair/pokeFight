const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
let pokedData = require('./pokedex.json')


app.get('/pokemon/:id', (req, res) => {
  const poked = pokedData.find(c => c.id === parseInt(req.params.id));
  if(!poked) return res.status(404).send('The given id is not matched!');
  res.send(poked);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})