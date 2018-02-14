module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('messages', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT,
    userId: Sequelize.INTEGER,
    recipientId: Sequelize.INTEGER
  });
  return Message;
};
