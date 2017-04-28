var $ = require('jquery');
var index = require('./index.jsx');

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
      success: function(results) {
        console.log('data received: ', results);
        this.state.setState({repos: results});
      }
    });
  }



  // post: function this will need to be hooked up on front end


}

