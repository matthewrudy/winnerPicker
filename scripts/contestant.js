'use strict';

var React = require('react'),
    ContestantActions = require('./actions/ContestantActions');

var Contestant = React.createClass({
  render() {
    return (
      <li>
        {this.props.data.name}

        <button className="destroy" onClick={this._onDestroyClick}>x</button>
      </li>
    );
  },

  _onDestroyClick() {
    ContestantActions.destroy(this.props.data.id);
  }
});

module.exports = Contestant;
