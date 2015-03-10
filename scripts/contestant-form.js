'use strict';

var React = require('react'),
    ContestantActions = require('./actions/ContestantActions');

var ContestantForm = React.createClass({

  propTypes: {
    name: React.PropTypes.string
  },

  getInitialState() {
    return {
      name: ''
    };
  },

  createContestant(state) {
    ContestantActions.create(state);
  },

  render() {
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={this.state.name} onChange={this._onNameChange}/>
        <button onClick={this._onButtonClick}>Add</button>
      </div>
    );
  },

  _onButtonClick(event) {
    this.createContestant(this.state);
    this.setState({name: ''});
  },

  _onNameChange(event) {
    this.setState({
      name: event.target.value
    });
  },
});

module.exports = ContestantForm;
