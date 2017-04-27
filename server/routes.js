var request = require('request');
var models = require('./models');

// var db = Promise.promisifyAll(require('.db'));

module.exports = {
  postRequest: function(req, res) {
    console.log('routes post fired, req.body: ', req.body)

    //only works for single name username; must parse if username is more than one word;

    var query = {
      headers: {
        "User-Agent": "kongfujonstew" 
      },
      url: `https://api.github.com/search/repositories?q=user:` + req.body.username
    }

    request.get(query, function(err, response, body) {
      var results = JSON.parse(body).items;
      // console.



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