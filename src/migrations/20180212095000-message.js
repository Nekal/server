module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Messages', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    content: {
      type: Sequelize.TEXT
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'new'
    },
    userId: {
      type: Sequelize.INTEGER,
      references: { model: 'Users', key: 'id' }
    },
    recipientId: {
      type: Sequelize.INTEGER,
      references: { model: 'Users', key: 'id' }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  })
    .catch((err) => {
      console.log(err);
    }),
  down: queryInterface => queryInterface.dropTable('Messages')
    .catch((err) => {
      console.log(err);
    })
};
