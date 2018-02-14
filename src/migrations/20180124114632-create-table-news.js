module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('news', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    userId: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' }
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
  down: queryInterface => queryInterface.dropTable('news')
    .catch((err) => {
      console.log(err);
    })
};
