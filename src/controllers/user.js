const User = require('../models/').user;

module.exports = {
  findUser(username, password) {
    return (
      User.findOne({
        where: {
          username,
          password
        }
      })
    );
  },
  findById(id) {
    return (
      User.findById(id)
    );
  },
  create(username, email, password, role) {
    return (
      User.create({
        username, email, password, role
      })
    );
  },

  checkUser(id, role, userId) {
    if (Number(id) === Number(userId)) {
      return (
        User.findOne({
          where: { id }
        })
      );
    }
    return Promise.reject(new Error('...'));
  }
};
