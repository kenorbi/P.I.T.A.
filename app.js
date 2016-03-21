var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about', function (req, res) {
  res.send('About P.I.T.A.');
});

app.listen(3000, function () {
  console.log('Listening on port 3000! Navigate to http://your-local-ip:3000 or http://your-local-ip:3000/about');
});