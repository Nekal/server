const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/users'));
app.use('/api', require('./routes/news'));
app.use('/api', require('./routes/messages'));

app.use(express.static(path.resolve(__dirname, '../../angular-news/dist/')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../angular-news/dist/index.html'));
});
// app.use(express.static(path.resolve(__dirname, '../../react_redux/build/')));
// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../../react_redux/build/index.html'));
// });
app.set('port', 8000);
app.set('port', 8000);

const models = require('./models');

models.sequelize.sync()
  .then(() => {
    console.log('Nice! Database looks fine');
  })
  .catch((err) => {
    console.log(err, 'Something went wrong with the Database Update!');
  });

// require('./seeders/admin')();
require('./sockets/messages')(io);

http.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
