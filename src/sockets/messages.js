const message = require('../controllers/message');
const user = require('../controllers/user');

module.exports = MessagesSocket = (io) => {
  io.on('connection', (socket) => {
    socket.on('send-message', (content, userId, recipientId) => {
      console.log('content' + content);
      user.findById(userId)
        .then((User) => {
          message.create(content, userId, recipientId)
            .then((newMessage) => {
              console.log('senMessage')
              io.emit('message/' + recipientId, {
                id: newMessage.dataValues.id,
                content: newMessage.dataValues.content,
                status: newMessage.dataValues.status,
                userId: newMessage.dataValues.userId,
                recipientId: newMessage.dataValues.recipientId,
                createdAt: newMessage.dataValues.createdAt,
                User: User,
              })
            })
            .catch((error) => console.log(error))
        })
        .catch(error => console.log(error));

    });
    socket.on('view-message', (id, status) => {
      message.update(id, status)
        .then(() => io.emit('viewedMessage', id))
        .catch(error => console.log(error));
    });
  });
}
