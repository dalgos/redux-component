const createStore = require('redux').createStore;
let originalState = 0;
let reducers = {};
let store;

class Store {
  
  constructor(basicState = 0) {
    originalState = basicState;
    store = createStore(this.reducer);
  }
  
  reducer(state = originalState, action) {
    if (reducers[action.type]) {
      return reducers[action.type](state, action);
    }
    return state;
  }
  
  appendReducer(updaters = {name: '', reducer: () => {}}) {
    if (updaters && updaters.name) {
      Object.assign(reducers, {[updaters.name]: updaters.reducer});
    }
  }
  
  subscribe(renderer) {
    store.subscribe(renderer);
  }
  
  dispatch(action) {
    store.dispatch(action);
  }
  
  getState() {
    return store.getState();
  }
}

module.exports = Store;