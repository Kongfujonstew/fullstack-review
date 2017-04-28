
const url = require('url');
var request = require('request');
var models = require('./models');
var Promise = require('bluebird');




module.exports = {
  getRequest: function(req, res) {
    var searchTerm = req.url.slice(14);
    io.sockets.emit('testpush', searchTerm);

    // console.log('routes GET fired, userstring: ', userstring)
    //only works for single name username; must parse if username is more than one word;

    var query = {
      headers: {
        "User-Agent": "kongfujonstew" 
      },
      url: `https://api.github.com/search/repositories?q=user:` + searchTerm
    }
    ////////////////////////////////////////

    request.get(query, function(err, response, body) {
      var results = JSON.parse(body).items;

      results = results.map(function(result) {
        result = {
          username: result.owner.login,
          repo: result.name,
          url: result.html_url
        };
        return result;
      });
      
      results.forEach(function(result) {
        models.insertOne(result);
      })
      res.send(results);
    });

  },

  getRepos: function(req, res) {
  console.log('routes get fired;')
  


  }


}



//GET /search/repositories
//q users . . .
//https://developer.github.com/v3/search/#search-repositories