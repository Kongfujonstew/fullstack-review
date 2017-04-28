var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var routes = require('./routes');

var app = express();
var http = require('http').Server(app);
global.io = require('socket.io')(http);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


//search
app.get('/repos/import/*', function (req, res) {
  console.log('index get fired')
  routes.getRequest(req, res);

});


//socket io
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('test', function(){
    console.log('test received!');
  });  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(1128, function(){
  console.log('listening on *:1128');
});


module.exports = io;

// var port = 1128;

// app.listen(port, function() {
//   console.log(`listening on!`);
// });

