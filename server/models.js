var Repo = require('../database/db.js').Repo;

module.exports = {
  insertOne: function(result) {

    newRepo = {
      username: result.owner.login,
      repo: result.name,
      url: result.archive_url,
      time: new Date.now()
      
    }

    // Repo.save(newRepo)???

  }



}
