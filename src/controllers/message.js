const Message = require('../models/').messages;

module.exports = {
  findMessages(userId) {
    return (
      Message.findAll({
        order: [['id', 'DESC']],
        where: {
          recipientId: userId,
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
      Message.create({ title, content, userId, recipientId })
    );
  },
};
