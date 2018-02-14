const express = require('express');

const router = express.Router();

const user = require('../controllers/user');

const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
  user.create(req.body.username, req.body.email, req.body.password, req.body.role)
    .then((newUser) => {
      res.send(newUser);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get('/token', (req, res) => {
  user.findUser(req.query.username, req.query.password)
    .then((result) => {
      jwt.sign(
        {
          id: result.dataValues.id,
          role: result.dataValues.role
        },
        'secret',
        (err, token) => {
          res.json(token);
        }
      );
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get('/signin', (req, res) => {
  user.findUser(req.query.username, req.query.password)
    .then((result) => {
      res.send({
        id: result.dataValues.id,
        username: result.dataValues.username,
        email: result.dataValues.email,
        role: result.dataValues.role
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get('/profile', (req, res) => {
  user.findById(req.query.id)
    .then((result) => {
      res.send({
        id: result.id,
        username: result.username,
        email: result.email,
        role: result.role,
        createdAt: result.createdAt
      });
    })
    .catch((error) => {
      res.send(error);
    });
});
module.exports = router;
