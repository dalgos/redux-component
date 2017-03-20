// const Storage = require('Storage');

// const noop = () => {};
// const reducerEnhancer = () => {
//   
// }
// const _reducer = (state, action) => {
// };
// let storage;

class BaseComponent {
  constructor({ initialStore = null, container = document.body } = {}) {
    this.__store = null;
    this.__container = container;
    if (initialStore && this.render) {
      this.__store = initialStore;
      this.__store.subscribe(() => {
        this.render();
      });
    }
    this.initialRender && this.initialRender();
  }
  // constructor({ initialStore = null, initialState = {}, container = document.body } = {}) {
  //   if (initialStore && initialStore instanceof Storage) { 
  //     storage = initialStore;
  //   } else {
  //     if (initialState) { storage = new Storage({ initialState }); }
  //   }
  //   this.container = container;
  //   this.initialRender();
  //   storage.subscribe(this.render);
  // }
  // 
  // getState() {
  //   return storage.getState();
  // }
  // 
  // getStorage() {
  //   return storage;
  // }
  // 
  // render() {
  //   console.log('render', 'BaseComponent');
  // }
  // 
  // dispatch(action) {
  //   storage.dispatch(action);
  // }
  // 
  // replaceReducer(reducer) {
  //   storage.replaceReducer(reducer);
  // }
  
}

module.exports = BaseComponent;