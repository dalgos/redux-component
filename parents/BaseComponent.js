const Storage = require('Storage');

class BaseComponent {
  constructor({ initialStorage = new Storage({ reducers: {}, initialState: {} }), container = document.body } = {}) {
    this.__storage = initialStorage;
    this.__container = container;
    this.__storage.subscribe(() => this.render() );
    this.initialRender();
  }
  getState() {
    return this.__storage.getState();
  }
  dispatch(action) {
    return this.__storage.dispatch(action);
  }
  initialRender() {
    // InitialRender.
  }
  render() {
    // Render.
  }
}

module.exports = BaseComponent;