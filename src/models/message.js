module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('Message', {
      title: Sequelize.STRING,
      content: Sequelize.TEXT,
      status: Sequelize.STRING,
      userId: { type: Sequelize.INTEGER, validate: { notEmpty: true }},
      recipientId: { type: Sequelize.INTEGER, validate: { notEmpty: true }},
    },
    // {
    //   classMethods: {
    //     associate(models) {
    //       console.log('safsda')
    //       models.Message.belongsTo(models.User, {
    //         foreignKey: 'userId',
    //         // allowNull: false,
    //         // onDelete: 'CASCADE'
    //       })
    //
    //       models.Message.belongsTo(models.User, {
    //         foreignKey: 'recipientId',
    //         // allowNull: false,
    //         // onDelete: 'CASCADE'
    //       })
    //     }
    //   },
    // }
  );
  Message.associate = function (models) {
    console.log('safsda')
    models.Message.belongsTo(models.User, {
      foreignKey: 'userId',
      allowNull: false,
      onDelete: 'CASCADE'
    })

    models.Message.belongsTo(models.User, {
      foreignKey: 'recipientId',
      allowNull: false,
      onDelete: 'CASCADE'
    })
  };
  return Message;
};
