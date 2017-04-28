var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = new mongoose.Schema({
  username: String,
  repo: { type: String, unique: true },
  url: String
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;



