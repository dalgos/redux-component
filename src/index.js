require('babel-polyfill');
const ReduxComponent = require('components/ReduxComponent');
const ViewSelectBox = require('components/SelectBox');

let countState = {
  optionCount: 0,
  totalCount: 0
};

// ReduxComponent.extendReducers(reducers);
ReduxComponent.setState(countState);

let rdux = new ReduxComponent();
rdux.subscribe(render);

let sbox1 = new ViewSelectBox(rdux.store, document.querySelector('#optionGroup1'));

function render() {
  document.querySelector('#result').innerHTML = rdux.store.getState().totalCount.toString();
}
render();

// const { createStore } = require('redux');
// const ViewSelectBox = require('components/SelectBox');
// 
// var countState = {
//   optionCount: 0,
//   totalCount: 0
// };
// let store = createStore(reducer(countState));
// store.subscribe(render);
// 
// function reducer(defaultState) {
//   var countState = defaultState;
//   return (state = countState, action) => {
//     switch (action.type) {
//       case 'OPTION_UP':
//         return Object.assign({}, state, { optionCount: state.optionCount + 1, totalCount: state.totalCount + 1 });
//       case 'OPTION_DOWN':
//         return Object.assign({}, state, { optionCount: state.optionCount - 1, totalCount: state.totalCount - 1 });
//       case 'PRODUCT_UP':
//         return Object.assign({}, state, { productCount: state.productCount + 1, totalCount: state.totalCount + 1 });
//       case 'PRODUCT_DOWN':
//         return Object.assign({}, state, { productCount: state.productCount - 1, totalCount: state.totalCount - 1 });
//       default:
//         return state;
//     }
//   }
// }
// 
// function render() {
//   console.log(store.getState());
//   fin();
// }
// 
// function render2() {
//   console.log(store2.getState());
//   fin();
// }
// 
// function fin() {
//   // document.querySelector('#result').innerHTML = store.getState().totalCount.toString();
// }
// 
// fin();
// 
// let sbox1 = new ViewSelectBox(store, document.querySelector('#optionGroup1'));
// let sbox2 = new ViewSelectBox(store, document.querySelector('#optionGroup2'));
// let sbox3 = new ViewSelectBox(store, document.querySelector('#optionGroup3'));

// const SelectBox = require('components/SelectBox');
// const defaultState = [
//   { value: 1, text: 'opt1', selected: true },
//   { value: 2, text: 'opt2', selected: false },
//   { value: 3, text: 'opt3', selected: false },
// ];
// 
// let sbox = new SelectBox({container: document.body, initSate: defaultState});
// let sbox2 = new SelectBox({ container: document.body, initState: defaultState });

// const { createStore } = require('redux');

//Reducer
// function counter(state, action) {
//   if (typeof state === 'undefined') {
//     return 0;
//   }
//   
//   switch(action.type) {
//     case 'INCREMENT': 
//       return state + 1;
//     case 'DECREMENT' :
//       return state -1;
//     default :
//       return state;
//   }
// }

// const defaultState = [
//   { id: 'opt1', value: 1, text: 'opt1', selected: true },
//   { id: 'opt2', value: 2, text: 'opt2', selected: false },
//   { id: 'opt3', value: 3, text: 'opt3', selected: false },
// ];
// 
// //Reducer
// function changer(state = defaultState, action) {
//   switch(action.type) {
//     case 'CHANGE' :
//       return state.map(option => {
//         return Object.assign({}, option, {selected: option.id === action.id});
//       });
//     default :
//       return state;
//   }
// }
// 
// let store = createStore(changer);
// 
// function render() {
//   selectbox.innerHTML = '';
//   let optionString = '';
//   store.getState().forEach(option => {
//     optionString += '<option value="' + option.value + '" id="' + option.id + '" ' + (option.selected ? 'selected="selected"' : '') + '>' + option.text + '</option>';
//     if (option.selected) {
//       selectboxValue.innerHTML = option.value.toString();
//     }
//   });
//   selectbox.innerHTML = optionString;
//   
// }
// store.subscribe(render);
// render();
// 
// selectbox.addEventListener('change', (evt) => {
//   console.log(evt.target.options[evt.target.selectedIndex].id.toString());
//   store.dispatch({ type: 'CHANGE', id: evt.target.options[evt.target.selectedIndex].id.toString() });
// });

// let store = createStore(counter);
// let valueEl = document.getElementById('value');
// 
// function render() {
//   valueEl.innerHTML = store.getState().toString();
// }
// 
// render();
// store.subscribe(render);
// 
// document.getElementById('increment').addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT' });
// });
// 
// document.getElementById('decrement').addEventListener('click', () => {
//   store.dispatch({ type: 'DECREMENT' });
// });
// 
// document.getElementById('incrementIfOdd').addEventListener('click', ()=>{
//   if (store.getState() %2 !== 0) {
//     store.dispatch({ type: 'INCREMENT' });
//   }
// });