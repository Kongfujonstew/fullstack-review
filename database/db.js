var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  username: String,
  repo: String,
  url: String,
  time: { type: Date, default: Date.now }
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;



