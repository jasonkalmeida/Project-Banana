var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/dogView', function (req, res) {
    res.render('dogView.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});