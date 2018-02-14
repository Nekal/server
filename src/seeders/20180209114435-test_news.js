'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('news', [{
      title: 'What is Lorem Ipsum?',
      description: 'Lorem Ipsum is simply dummy text of the ' +
      ' and typesetting industry. Lorem Ipsum has been the industry\'' +
      ' standard dummy text ever since the 1500s, when an unknown printer' +
      ' took a galley of type and scrambled it to make a type specimen book.' +
      ' It has survived not only five centuries, but also the leap into' +
      ' electronic typesetting, remaining essentially unchanged. It ' +
      ' popularised in the 1960s with the release of Letraset sheets' +
      ' containing Lorem Ipsum passages, and more recently with desktop' +
      ' publishing software like Aldus PageMaker including versions of' +
      ' Lorem Ipsum.',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('news', null, {});
  }
};
