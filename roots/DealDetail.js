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
const initialState = { 
  count: 0,
  images: [
    'https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67',
    'https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67',
  ]
 };

const dealDetailReducers = require('dealDetailReducer');
const store = createStore(combineReducers(dealDetailReducers), initialState);

const CounterM = require('CounterM');
const Images = require('Images');

dr(() => {
  let counter = new CounterM({ initialStore: store, container: document.querySelector('#counter') });
  let images = new Images({ initialStore: store, container: document.querySelector('#images') });
});
