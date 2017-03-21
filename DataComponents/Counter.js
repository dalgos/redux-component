const BaseComponent = require('BaseComponent');

class Counter extends BaseComponent {
  static reducers(state = 0, action) {
    let ownReducer = Counter.getReducers();
    switch(action.type) {
      case 'UP':
      case 'DOWN':
        return ownReducer[action.type](state, action);
      default:
        return state;
    }
  }
  static getReducers() {
    function UP(state = 0, action) {
      return state + 1;
    }
    function DOWN(state = 0, action) {
      return state - 1;
    }
    return {
      UP,
      DOWN,
    };
  }
}

module.exports = Counter;