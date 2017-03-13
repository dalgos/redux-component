const { createStore } = require('redux');
const { combineReducers } = require('redux');

let store;
let initialState;
let reducers = {};
function reducer(state = initialState, action) {
  if (reducers.hasOwnProperty(action.type)) {
    return reducers[action.type](state, action);
  }
  return state;
}

class ReduxComponent {
  constructor(legacyStore = null, externalState = {}) {
    // initialState = externalState;
    store = legacyStore || createStore(reducer);
  }
  dispatch(action) {
    store.dispatch(action);
  }
  subscribe(render) {
    store.subscribe(render);
  }
  
  get store() {
    return store;
  }
  set store(newStore) {
    throw new Error('You can not overwritten store.');
  }
  
  getState() {
    return store.getState();
  }
  
  static extendReducer(nameSpace, reducer) {
    if (reducers.hasOwnProperty(nameSpace)) {
      throw new Error('reducers aleady have ', namespace, 'reducer. Please check nameSpace');
    } else {
      Object.assign(reducers, {[nameSpace]: reducer});
    }
  }
  static extendReducers(reducersMap) {
    for (let prop in reducersMap) {
      this.extendReducer(prop, reducersMap[prop]);
    }
  }
  static reduceReducer(nameSpace) {
    if (reducers.hasOwnProperty(nameSpace)) {
      delete reducers[nameSpace];
    }
  }
  static reduceReducers(reduceMap) {
    for (let prop in reduceMap) {
      this.reduceReducer(prop);
    }
  }
  static setState(state) {
    initialState = state;
  }
}

module.exports = ReduxComponent;