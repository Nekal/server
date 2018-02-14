const News = require('../models/').news;
// import News from '../models/news';

module.exports = {
  findAll() {
    return (
      News.findAll({
        order: [['id', 'DESC']]
      })
    );
  },
  findById(id) {
    return (
      News.findById(id)
    );
  },
  create(title, description, userId) {
    return (
      News.create({ title, description, userId })
    );
  },
  destroy(id) {
    return (
      News.destroy({
        where: {
          id
        }
      })
    );
  },
  update(id, title, description) {
    return (
      News.update({ title, description }, {
        title,
        description,
        where: {
          id
        }
      })
    );
  }
};
