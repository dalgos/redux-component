const { crateStore } = require('../../node_modules/redux/dist/redux');
let _store;
let _state;
const externalReducers = {};
const reducer = (state, action) => {
  return state;
};

function addReducer(nameSpace, reducer) {
  if (externalReducers.hasOwnProperty(nameSpace)) {
    throw new Error('reducers own same reducer. please check.');
  } else {
    Object.assign(externalReducers, { [nameSpace]: reducer });
  }
}

function removeReducer(nameSpace) {
  if (externalReducers.hasOwnProperty(nameSpace)) {
    delete externalReducers[nameSpace];
  }
}

class Storage {
  constructor(initialStore = null, initialState = {}) {
    _store = initialStore || createStore(reducer, initialState);
  }
  subscribe(render) {
    _store.subscribe(render);
  }
  getState() {
    return _store.getState();
  }
  dispatch(action) {
    _store.dispatch(action);
  }
}

module.exports = Storage;