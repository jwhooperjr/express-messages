const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser());

// if you are using mongo/mongoose uncomment this line
// const Message = require('./db/Message');

// if you are using postgres, uncomment this line
const { postAMessage, getAllMessages, updateMessage, deleteMessage, getAMessage } = require('./db/pgconfig');

const port = 3000;

app.post('/messages', (req, res) => {
  postAMessage(req.body).then((results) => {
  res.send(results);
  })
  // console.log(JSON.stringify(req.body));
  // res.send('hello');
});

app.get('/messages', (req, res) => {
  getAllMessages().then((results) => {
    res.send(results);
  })
});

app.put('/messages/:id', (req, res) => {
  updateMessage(req.body).then((results) => {
    res.send(results)
  })
  // res.send(req.body);
  // console.log(req.body);
});

// app.delete('/messages/:id', (req, res) => {
//   pool.deleteMessage()
//   .then(results => res.send(results))
//   .catch(err => res.send(err))
// });

// app.get('/messages/:id', (req, res) => {
//   pool.getAMessage(req.params.id)
//   .then(results => res.send(results))
//   .catch(err => res.send(err))
// });

// app.use((req,res,next) => {
//   res.status(404).send('That route does not exist');
// });

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;