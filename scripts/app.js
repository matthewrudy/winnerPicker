'use strict';

var React = require('react'),
    ContestantList = require('./contestant-list'),
    ContestantForm = require('./contestant-form');

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
