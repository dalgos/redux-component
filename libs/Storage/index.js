const { createStore, combineReducers } = require('redux');

let __store;

class Storage {
  constructor({ reducers = {}, initialState = {} } = {}) {
    __store = createStore(combineReducers(reducers), initialState);
  }
  subscribe(render) {
    __store.subscribe(render);
  }
  getState() {
    return __store.getState();
  }
  dispatch(action) {
    console.log(action);
    __store.dispatch(action);
  }
}

module.exports = Storage;