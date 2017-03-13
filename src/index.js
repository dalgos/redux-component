// require('babel-polyfill');
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