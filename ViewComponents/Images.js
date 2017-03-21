const BaseComponent = require('BaseComponent');
const tmpl = require('hbs/images');
const $ = require('jquery');

class Images extends BaseComponent {
  initialRender() {
    $(this.__container).append(tmpl(this.getState()));
  }
  render() {
    
  }
  /**
   * Reducers for Self Component
   * @return Function Reducer
   */
  static reducers(state = [], action) {
    return state;
  }
  /**
   * Return reducer's maps
   * @return Object Reducer's map
   */
  static getReducers() {
    
  }
}

module.exports = Images;