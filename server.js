const express = require('express');
const app = express();

// if you are using mongo/mongoose uncomment this line
// const Message = require('./db/Message');

// if you are using postgres, uncomment this line
const pool = require('./db/pgconfig');

const port = 3000;

app.post('/messages', (req, res) => {
  pool.postAMessage(req.body)
  .then(results => res.send(results))
  .catch(err => res.send(err))
});

app.get('/messages', (req, res) => {
  pool.getAllMessages()
  .then(results => res.send(results))
  .catch(err => res.send(err))
});

app.put('/messages/:id', (req, res) => {
  pool.updateMessage(req.body)
  .then(results => res.send(results))
  .catch(err => res.send(err))
});

app.delete('/messages/:id', (req, res) => {
  pool.deleteMessage()
  .then(results => res.send(results))
  .catch(err => res.send(err))
});

app.get('/messages/:id', (req, res) => {
  pool.getAMessage(req.params.id)
  .then(results => res.send(results))
  .catch(err => res.send(err))
});

app.use((req,res,next) => {
  res.status(404).send('That route does not exist');
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;