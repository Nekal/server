const express = require('express');
const router = express.Router();
const messages = require('../controllers/message');
const jwt = require('jsonwebtoken');
const user = require('../controllers/user');

router.get('/message', (req, res) => {
  messages.findById(req.query.id)
    .then(result => res.send(result))
    .catch(error => res.send(error));
});

router.put('/message', (req, res) => {
  messages.update(req.body.id, req.body.status)
    .then(result => res.send(result))
    .catch(error => res.send(error));
});

router.get('/messages', (req, res) => {
  jwt.verify(req.query.token, 'secret', (err, decoded) => {
    user.checkUser(decoded.id, decoded.role, req.query.userId)
      .then(() => {
        messages.findMessages(req.query.userId)
          .then(result => {
            res.send(result)
          })
          .catch(error => res.send(error));
      })
      .catch(error => res.status(401).send(error));
  });
});

router.get('/new', (req, res) => {
  messages.findNewMessages(req.query.userId, req.query.status)
    .then(result => res.send(result))
    .catch(error => res.send(error));
});

router.post('/send', (req, res) => {
  jwt.verify(req.body.token, 'secret', (err, decoded) => {
    user.checkUser(decoded.id, decoded.role, req.body.userId)
      .then(() => {
        messages.create(req.body.title, req.body.content, req.body.userId, req.body.recipientId)
          .then(newMessage => res.send(newMessage))
          .catch(error => res.send(error));
      })
      .catch(error => res.status(401).send(error));
  });
});

module.exports = router;
