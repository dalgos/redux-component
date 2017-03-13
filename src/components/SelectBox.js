const Store = require('store/Store');
const ReduxComponent = require('components/ReduxComponent');

let hbarTmpl = require('hbs/select');

class SelectBox extends ReduxComponent {
  constructor(par = {legacyStore: null, container: document.body}) {
    // console.log(super);
    let { legacyStore, container } = par;
    super(legacyStore);
    
    this.subscribe(() => {
      this.render();
    });
    
    let reducers = {
      OPTION_UP(state, action) {
        return Object.assign({}, state, { optionCount: state.optionCount + 1, totalCount: state.totalCount + 1 });
      },
      OPTION_DOWN(state, action) {
        return Object.assign({}, state, { optionCount: state.optionCount - 1, totalCount: state.totalCount - 1 });
      }
    };
    ReduxComponent.extendReducers(reducers);
    
    this.container = container;
    this.render();
  }
  
  createAction(selector, elm) {
    elm.querySelectorAll(selector).forEach((item) => {
      item.addEventListener('click', (evt) => {
        this.dispatch({ type: evt.target.dataset.actionType });
      });
    });
  }
  
  render() {
    console.log('selectBox::Render')
    this.container.innerHTML = '';
    this.wrapper = document.createElement('div');
    this.wrapper.innerHTML = hbarTmpl(this.state);
    this.views = this.wrapper.children[0];
    this.createAction('._button', this.views);
    this.container.appendChild(this.views);
  }
}

module.exports = SelectBox;
