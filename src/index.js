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

const initState = {
  selectedIndexs: [0],
  selects: [
      [
        { val: '', text: '선택해주세요', id: 'item0' },
        { val: 0, text: 'item1', id: 'item1' },
        { val: 1, text: 'item2', id: 'item2' },
        { val: 2, text: 'item3', id: 'item3' },
      ]
    ]
  };
// 
const selectStore = createStore(sReducer, initState);
selectStore.subscribe(sRender);
// 
const datas = {
  item1: [
    { val: 10, text: 'item1-1', id: 'item1-1', selected: true },
    { val: 11, text: 'item1-2', id: 'item1-2' },
    { val: 12, text: 'item1-3', id: 'item1-3' },
  ],
  item2: [
    { val: 20, text: 'item2-1', id: 'item2-1', selected: true },
    { val: 21, text: 'item2-2', id: 'item2-2' },
    { val: 22, text: 'item2-2', id: 'item2-3' },
  ],
  'item2-2': [
    { val: 200, text: 'item2-1-1', id: 'item2-1-2', selected: true },
    { val: 201, text: 'item2-1-2', id: 'item2-1-2' },
    { val: 202, text: 'item2-1-2', id: 'item2-1-3' },
  ]
};
// 

function CHANGE(state = {}, action) {
  let temp = Object.assign({}, state);
  console.log('action.idx',action.idx);
  //initilaize;
  console.log((new Array(action.idx + 1)).length)
  
  temp.selectedIndexs = temp.selectedIndexs.map((item, idx) => {
    if (idx <= action.idx) {
      return item;
    } else if (idx === action.idx + 1) {
      return 0;
    }
  });
  
  console.log(temp.selectedIndexs, 'selectedIndex');
  
  temp.selectedIndexs[action.idx] = action.optionIndex;
  
  temp.selects = temp.selects.splice(0, action.idx + 1);
  
  if (action.arr.length) {
    temp.selects[action.idx + 1] = action.arr;
  } else {
    temp.selects = temp.selects.splice(0, action.idx + 1);
  }
  console.log(temp.selectedIndexs, 'selectedIndex foreach');
  temp.selectedIndexs.forEach((item, idx) => {
    temp.selects[idx].forEach((_item, _idx) => {
      console.log(_item, '_item')
      _item.selected = _idx === item ? true : false;
    });
    temp.selects[idx][item].selected = true;
  });
  return temp;
}

function sReducer(state, action = { type: 'CHANGE', id: 'item1' }) {
  if (action.type === 'CHANGE') {
    return CHANGE(state, action);
  }
  return state;
}

const tmpl = require('hbs/selectbox');

function initialSRender() {
  sRender();
  $('#selectWrapper').on('change', (evt) => {
    const $select = $(evt.target);
    const idx = $select.index();
    const optionIndex = $select.find('option:selected').index();
    const id = $select.find('option:selected').data('id');
    selectStore.dispatch({ type: 'CHANGE', idx, arr: [].concat(datas[id] || []), optionIndex });
  });
}

function sRender() {
  $('#selectWrapper').html('').append(tmpl(selectStore.getState()));
}

initialSRender();
