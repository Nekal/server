const User = require('../models/user').user;

module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('Message', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT,
    recipientId: Sequelize.INTEGER,
    status: Sequelize.STRING,
    userId: Sequelize.INTEGER,
  },
  // {
  //   classMethods: {
  //     associate: function(models) {
  //       console.log(models)
  //       Message.belongsTo(models.User, { foreignKey: 'userId' })
  //     }
  //   },
  // }
  );
  // Message.hasOne('users');
  return Message;
};
