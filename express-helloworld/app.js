var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.listen(0000, function () {
  console.log('Example app listening on port 0000!');
});

