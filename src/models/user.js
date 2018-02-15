const Message = require('../models/').messages;
// const Message = require('../models/message');

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
  // {
  // //   tableName: 'users',
  // //   underscored: true,
  // //   timestamps: true,
  //   classMethods: {
  //     associate: function(models) {
  //       User.hasMany(models.Message)
  //     }
  //   },
  // }
  );
  // User.hasMany (Message, { foreignKey: 'primaryMessagesId', as: 'primaryMessages'  });
  // User.hasMany (Message, { foreignKey: 'secondaryMessagesId', as: 'secondaryMessages'  });
  // User.hasMany(Message)
  // User.hasMany('messages')
  return User;
};
