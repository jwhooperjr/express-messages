const express = require('express');
const app = express();

// if you are using mongo/mongoose uncomment this line
// const Message = require('./db/Message');

// if you are using postgres, uncomment this line
const pool = require('./db/pgconfig');

app.use((req,res,next) => {
  res.status(404).send('That route does not exist');
});

const port = 3000;

app.post('/messages', (req, res, next) => {
  pool.postAMessage()
  .then(() => res.sendStatus(201))
});

app.get('/messages', (req, res, next) => {
  pool.getAllMessages()
  .then(results => res.send(results))
});

app.put('/messages/:id', (req, res, next) => {
  pool.updateMessage()
  .then()
});

app.delete('/messages/:id', (req, res, next) => {
  pool.deleteMessage()
  .then()
});

app.get('/messages/:id', (req, res, next) => {
  pgconfig.getAMessage()
  .then(results => res.send(results))
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;