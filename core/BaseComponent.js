const Storage = require('Storage');

class BaseComponent {
  constructor({ initialStorage = null, container = document.body } = {}) {
    if (!(initialStorage && initialStorage instanceof Storage)) {
      this.__storage = new Storage({ reducers: {}, initialState: {} });
    } else {
      this.__storage = initialStorage;
    }
    this.__container = container;
    this.__storage.subscribe(() => this.render() );
    this.initialRender();
  }
  /**
   * Get store's state data.
   * @return Object state data.
   */
  getState() {
    return this.__storage.getState();
  }
  /**
   * Dispatcher for store.
   * @param {Object} action Action Object
   * @return Undefined
   */
  dispatch(action) {
    this.__storage.dispatch(action);
  }
  /**
   * Initialize Render
   * @return Undefined
   */
  initialRender() {
    // InitialRender.
  }
  /**
   * Render for store.
   * @return Undefined
   */
  render() {
    // Render.
  }
}

module.exports = BaseComponent;