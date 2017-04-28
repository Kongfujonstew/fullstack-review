import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

var ajax = require('./ajax');
//var io = require('socket.io');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [],
      saying: 'testSaying'
    }

  }

  componentDidMount () {
    var that = this;
    this.search('hackreactor');
    socket.on('testpush', function(msg) {
      console.log(msg);
      that.setState({
        saying: msg
      });//
    })

  }


  search (term) {

    //socket.emit('message', {hello: 'world'});
    //socket.on('messageSuccess', function (data) {
     //console.log('socket receive success');
    //});

    console.log('calling ajax.get')
    var url = `http://localhost:1128/repos/import/` + term;
    console.log('hello from ajax, searching username: ', term);

    var that = this;

    $.ajax({
      url: url,
      type: 'GET',
      contentType: 'application/json',
      dataType: 'json',
      success: function(results) {
        console.log('data received: ', results);
        that.setState({repos: results});
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <h1>{this.state.saying}</h1>
      <RepoList repos={this.state.repos}
      />

      <Search onSearch={this.search.bind(this)}/>
      <div id="results">

      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
