// // Interface.
// const BaseComponent = require('BaseComponent');
// const { combineReducer } = require('redux');
// const countReducer = requier('countReducer');
// 
// const Slide = require('slide');
// const Counter = require('CounterM');
// 
// const initialState = { count: 0, items: [], images: [] };
// let combinedReducers;
// 
// class DealDetail extends BaseComponent {
//   initialRender() {
//     console.log(this.getState(), 'this.getState()')
//     // combinedReducers = {
//     //   count: countReducer
//     // };
//     // this.replaceReducer(combineReducer(combinedReducers));
//     let counter = new Counter({ initialStore: this.getStorage(), container: document.querySelector('#counter') }).reducer;
//     this.replaceReducer({
//       count: counter.reducer
//     })
//   }
// }
// 
// const dealDetail = new DealDetail({ initialState });
// 
const { createStore, combineReducers } = require('redux');
const dr = require('domready');

const store = createStore(combineReducers({
  count: count
}), {count: 0});

const CounterM = require('CounterM');

let counter = new CounterM({ initialStore: store, container: document.querySelector('#counter') });

function count(state = 0, action) {
  switch(action.type) {
    case 'UP':
      return state + 1;
    case 'DOWN':
      return state + 2;
    default:
      return state;
  }
}
