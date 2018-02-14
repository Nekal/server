const express = require('express');

const router = express.Router();

const news = require('../controllers/news');

const jwt = require('jsonwebtoken');

const user = require('../controllers/user');

router.get('/news', (req, res) => {
  news.findById(req.query.id)
    .then(result => res.send(result))
    .catch(error => res.send(error));
});

router.delete('/news', (req, res) => {
  jwt.verify(req.query.token, 'secret', (err, decoded) => {
    user.checkUser(decoded.id, decoded.role, req.query.userId)
      .then(() => {
        news.destroy(req.query.id)
          .then(() => res.status(200).send({news_id: req.query.id}))
          .catch(error => res.send(error));
      })
      .catch(error => res.status(401).send(error));
  });
});

router.put('/news', (req, res) => {
  jwt.verify(req.body.token, 'secret', (err, decoded) => {
    user.checkUser(decoded.id, decoded.role, req.body.userId)
      .then(() => {
        news.update(req.body.id, req.body.title, req.body.description)
          .then(result => res.send(result))
          .catch(error => res.send(error));
      })
      .catch(error => res.status(401).send(error));
  });
});

router.get('/allnews', (req, res) => {
  news.findAll()
    .then(result => res.send(result))
    .catch(error => res.send(error));
});

router.post('/add', (req, res) => {
  console.log(req.body)
  jwt.verify(req.body.token, 'secret', (err, decoded) => {
    user.checkUser(decoded.id, decoded.role, req.body.userId)
      .then(() => {
        news.create(req.body.title, req.body.description, req.body.userId)
          .then(newNews => res.send(newNews))
          .catch(error => res.status(401).send(error));
      })
      .catch(error => res.status(401).send(error));
  });
});

module.exports = router;
