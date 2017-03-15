// require('babel-polyfill');
const { createStore } = require('../node_modules/redux/dist/redux');
const { combineReducers } = require('../node_modules/redux/dist/redux');

const option = require('reducers/option');

const $ = require('jquery');
const Counter = require('components/Counter');
const Option = require('components/Option');

const initialState = {
  option: {
    count: 0,
    mode: 'single'
  }
}

const combines = combineReducers({ option });

const store = createStore(combines, initialState);
store.subscribe(render);


function initRender() {
  const counter = new Counter({initialStore: store, container: $('#optionGroup1')});
  const option = new Option({ initialStore: store, container: $('#optionGroup1') });
  render();
}

function render() {
  document.getElementById('result').innerHTML = store.getState().option.count.toString();
}

$(()  => {
  initRender();
});