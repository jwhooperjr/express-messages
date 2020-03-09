const { Pool } = require('pg');
const pool = new Pool({
  database: 'messages'
});
// pool.query('select * from messages').then(res => {console.log(res.rows)});
const postAMessage = (message) => {
  let values = [message.message_id, message.user_name, message.message_body]
  return pool.query('INSERT INTO messages(message_id, user_name, message_body) VALUES($1, $2, $3)', values)
  .then(() => true)
}

const getAllMessages = () => {
  return pool.query('select * from messages')
  .then((response) => {
    return response.rows;
  }).catch((err) => {
    return err;
  })
}

const updateMessage = (message) => {
  return pool.query('update messages set message_body = \'blah\' where message_id = 1')
  .then(() => true)
}

const deleteMessage = (message) => {

}

const getAMessage = (message) => {

}
module.exports = {
  postAMessage,
  getAllMessages,
  updateMessage,
  deleteMessage,
  getAMessage
};