module.exports = (sequelize, Sequelize) => {
  const News = sequelize.define('news', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    userId: Sequelize.INTEGER
  });
  return News;
};
