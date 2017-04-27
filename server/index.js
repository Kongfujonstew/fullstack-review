var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var routes = require('./routes');

var app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  routes.postRequest(req, res);
});

app.get('/repos', function (req, res) {
  routes.get(req, res);
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

