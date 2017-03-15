const countReducer = require('reducers/counter');

const { combineReducers } = require('../../node_modules/redux/dist/redux');

//Contants
const ACTIONS = require('actions'); 

function mode(state = 'single', action) {
  return (state === 'single') ? 'double' : 'single'
}

function count(state = { count: 0, mode: 'single' }, action = { type: ACTIONS.UP}) {
  let vals = 0;
  if (state.mode === 'single') {
    vals = 1;
  } else {
    vals = 2;
  }
  if (action.type === ACTIONS.UP) {
    return { mode: state.mode, count: parseInt(state.count, 10) + vals }
  } else {
    return { mode: state.mode, count: parseInt(state.count, 10) + (vals * -1) };
  }
  return state;
}

function optionReducer(state = { option: { count:0, mode: 'double' } }, action) {
  switch(action.type) {
    case ACTIONS.OPTION_TOGGLE:
      return {
        count: state.count,
        mode: mode(state.mode, action)
      };
    case ACTIONS.UP:
    case ACTIONS.DOWN:
      return count(state, action);//countReducer(state.option.count, action);
    default: 
      return state;
  }
}

module.exports = optionReducer;