var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ContestantConstants  = require('../constants/ContestantConstants');

var ContestantActions = {
  create: function(contestant) {
    AppDispatcher.dispatch({
      actionType: ContestantConstants.CONTESTANT_CREATE,
      data: contestant
    });
  },
  destroy: function(contestantID) {
    AppDispatcher.dispatch({
      actionType: ContestantConstants.CONTESTANT_DESTROY,
      contestantID: contestantID
    })  
  }
};

module.exports = ContestantActions;
