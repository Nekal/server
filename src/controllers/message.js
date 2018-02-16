// import Sequlize from 'sequelize'
const models = require('../models');
const Message = models.Message;
const User = models.User;
const sequelize = require('sequelize')

module.exports  = {
  findMessages(userId) {
    return models.Message.findAll({
      // group: models.Message.userId,
      include: [
        { model:  models.User, attributes: ['username'] }
      ],
      where: {
        recipientId: userId,
        $and : {
          id: {
            $in : sequelize.literal('(SELECT MAX(id) FROM Messages WHERE recipientId = ' + userId + ' group by userId)')
          }
        }
      },
      order: [['id', 'DESC']],
    })
  },
  findChatMessages(userId, recipientId) {
    return models.Message.findAll({
      include: [
        { model:  models.User, attributes: ['username'] }
      ],
      where: {
        $or: [{
          userId: userId,
          recipientId: recipientId
        },
          {
            userId: recipientId,
            recipientId: userId
          }]
      }
    })
  },
  findNewMessages(recipientId, status) {
    return (
      Message.findAll({
        order: [['id', 'DESC']],
        include: [
          { model:  models.User, attributes: ['username'] }
        ],
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
  create(content, userId, recipientId) {
    return (
      Message.create({content, status: 'new', userId, recipientId })
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
