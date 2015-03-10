var AppDispatcher = require('../dispatcher/AppDispatcher'),
    ContestantConstants = require('../constants/ContestantConstants'),
    EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var id = 0;

var contestants = {
};

var emitter = new EventEmitter();

var ContestantStore = {

  getAll() {
    return Object.keys(contestants).map(key => contestants[key]);
  },

  emitChange() {
    emitter.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    emitter.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    emitter.removeListener(CHANGE_EVENT, callback);
  }
};

function createContestant(contestant) {
  contestant.id = ++id;
  contestants[contestant.id] = contestant;
}

function destroyContestant(contestantID) {
  delete contestants[contestantID];
}

AppDispatcher.register( function( action ) {
  switch( action.actionType ) {

    case ContestantConstants.CONTESTANT_CREATE:
      var contestantData = action.data;
      createContestant(contestantData);
      ContestantStore.emitChange();
      break;

    case ContestantConstants.CONTESTANT_DESTROY:
      var contestantID = action.contestantID;
      destroyContestant(contestantID);
      ContestantStore.emitChange();
      break;

    default:
      // no op
  }
});

// initial data
createContestant({name: "Rod"});
createContestant({name: "Jane"});
createContestant({name: "Freddy"});

module.exports = ContestantStore;
