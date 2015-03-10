'use strict';

var React = require('react'),
    ContestantList = require('./ContestantList'),
    ContestantForm = require('./ContestantForm');

var App = React.createClass({
      render() {
        return (
          <div>
            <h1>Winner Picker!!!</h1>
            <ContestantList />
            <ContestantForm />
          </div>
        );
      }
    });


module.exports = App;
