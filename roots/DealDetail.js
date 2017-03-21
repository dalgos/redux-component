// load components
const CounterM = require('CounterM');
const Images = require('Images');

// initialize default reducer & state.
const initialState = { 
  count: 0,
  images: [
    'https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67',
    'https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67',
  ]
 };
const dealDetailReducers = require('dealDetailReducer');

// load libs.
const dr = require('domready');
const Storage = require('Storage');
const storage = new Storage({ reducers: dealDetailReducers, initialState });

// initialize.
dr(() => {
  let counter = new CounterM({ initialStorage: storage, container: document.querySelector('#counter') });
  let images = new Images({ initialStorage: storage, container: document.querySelector('#images') });
});
