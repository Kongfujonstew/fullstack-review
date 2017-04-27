var $ = require('jquery');

// insert get request here
module.exports = {
  get: function(username) {
    var url = `http://localhost:1128/repos/import/` + username;
    console.log('hello from ajax, searching username: ', username);

    $.ajax({
      url: url,
      type: 'GET',
      contentType: 'application/json',
      dataType: 'json',
      success: function(data) {
        console.log('data ?received? ', data);
      }
    });
  }



  // post: function this will need to be hooked up on front end


}

