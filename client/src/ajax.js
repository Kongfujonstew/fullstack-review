var $ = require('jquery');

// insert get request here
module.exports = {
  post: function(username) {
    var url = `http://localhost:1128/repos/import`
    console.log('hello from ajax, serching username: ', username);

    var searchTerm = {
      username: username
    }

    $.ajax({
      url: url,
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(searchTerm),
      success: function(data) {
        console.log(data);
      }
    });
  }



  // post: function this will need to be hooked up on front end


}

