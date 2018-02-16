module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.STRING
      }
    },
  );
  User.associate = function (models) {
    models.User.hasMany(models.Message, {
      foreignKey: 'userId'
    });

    models.User.hasMany(models.Message, {
      foreignKey: 'recipientId'
    });
  };
  return User;
};
