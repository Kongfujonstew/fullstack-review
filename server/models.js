var Repo = require('../database/db.js');

module.exports = {
  insertOne: function(result) { //turn this into createone model???

////////////////////////////////////////////

    var newRepo = new Repo(result);

    newRepo.save(function(err) {
      if (err) {
        console.log('db save error');
      }
    });

  }



}
