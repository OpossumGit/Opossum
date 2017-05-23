var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello Worlda!');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
