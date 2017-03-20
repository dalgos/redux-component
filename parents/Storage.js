//pkgs
const { createStore, applyMiddleware } = require('redux');

let instance = null;

function logger({ getState }) {
  return (next) => (action) => {
    console.log(action);
    let returnValue = next(action);
    return returnValue;
  };
}

function __reducer(state, action) {
  return state;
}

let __store;

class Storage {
  
  constructor({ initialState = null } = {}) {
    __store = createStore(__reducer, initialState, applyMiddleware(logger));
  }
  
  getState() {
    return __store.getState();
  }
  
  replaceStore(replacedStore = null) {
    if (replacedStore) { __store = replacedStore; }
  }
  
  replaceState(replacedState = null) {
    
  }
  
  subscribe(render) {
    __store.subscribe(render);
  }
  
  dispatch(action) {
    __store.dispatch(action);
  }
  
  replaceReducer(reducer) {
    __store.replaceReducer(reducer);
  }
  
}



module.exports = Storage;