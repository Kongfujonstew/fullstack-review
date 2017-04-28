var Repo = require('../database/db.js');
var db = require('mongodb');

module.exports = {
  insertOne: function(result) { 

////////////////////////////////////////////

    var newRepo = new Repo(result);

    newRepo.save(function(err) {
      if (err) {
        console.log('db save error');
      }
    });

  },

  getAll: function(searchTerm) {
    db.repos.find(searchTerm, function(err) {
      if (err) {
        console.log('db find error');
      }
    })

  }

}
