var express = require('express');
var app = express();

app.get('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] != 'https') {
      
      res.redirect("https://" + req.headers.host + req.url);

  } else {
      next();

  }
});

app.get('/', function (req, res) {
  res.send('Hello World! ' + new Date().toLocaleTimeString());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



