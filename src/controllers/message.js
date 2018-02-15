const Message = require('../models/').Message;
const User = require('../models/').User;

module.exports = {
  findMessages(userId) {
    console.log('hi');
    return (
      Message.findAll({
        order: [['id', 'DESC']],
        // include: [
        //   { model:  User}
        // ],
        where: {
          recipientId: userId,
        },
      })
    );
  },
  findNewMessages(recipientId, status) {
    return (
      Message.findAll({
        order: [['id', 'DESC']],
        where: {
          recipientId,
          status,
        }
      })
    );
  },
  findById(id) {
    return (
      Message.findById(id)
    );
  },
  create(title, content, userId, recipientId) {
    return (
      Message.create({ title, content, userId, status: 'new', recipientId })
    );
  },
  update(id, status) {
    return (
      Message.update({status}, {
        status,
        where: {
          id
        }
      })
    );
  }
};
