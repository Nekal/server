const message = require('../controllers/message');
const user = require('../controllers/user');

module.exports = MessagesSocket = (io) => {
  io.on('connection', (socket) => {
    socket.on('send-message', (title, content, userId, recipientId) => {
      message.create(title, content, userId, recipientId)
        .then((newMessage) => io.emit('message/' + recipientId, newMessage))
        .catch((error) => console.log(error))
    });
  });
}
