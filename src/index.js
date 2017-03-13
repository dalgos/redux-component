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

let sbox1 = new ViewSelectBox({legacyStore: rdux.store, container: document.querySelector('#optionGroup1')});

function render() {
  console.log('render');
  document.querySelector('#result').innerHTML = rdux.state.totalCount.toString();
}
render();