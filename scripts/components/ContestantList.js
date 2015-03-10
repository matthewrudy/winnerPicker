'use strict';

var React = require('react'),
    Contestant = require('./Contestant'),
    ContestantStore = require('../stores/ContestantStore');

function getContestantState() {
  return {
    allContestants: ContestantStore.getAll()
  };
}

var ContestantList = React.createClass({

  getInitialState: function() {
    return getContestantState();
  },

  componentDidMount: function() {
    ContestantStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ContestantStore.removeChangeListener(this._onChange);
  },

  render() {
    var contestants = this.state.allContestants;

    var contestantNodes = contestants.map(function (contestant) {
      return (
        <Contestant key={contestant.id} data={contestant} />
      );
    });

    return (
      <section>
        <p>{contestants.length} contestants</p>
        <ul>{contestantNodes}</ul>
      </section>
    );
  },

  _onChange() {
    this.setState(getContestantState());
  }
});

module.exports = ContestantList;
