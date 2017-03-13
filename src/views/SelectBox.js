const Store = require('store/Store');
let hbar = require('handlebars');
let hbsSelect = '<div>\
  <div>{{ prompt }}</div>\
  <button class="_button" data-action-type="UP">UP</button>\
  <button class="_button" data-action-type="DOWN">DOWN</button>\
</div>';

let hbarTmpl = hbar.compile(hbsSelect);
let defaultParam = { prompt: 0 };

class SelectBox {
  constructor(store, container = document.body) {
    this.store = store || new Store();
    this.store.subscribe(() => {
      this.render();
    });
    this.container = container;
    this.render();
  }
  createAction(selector, elm) {
    elm.querySelectorAll(selector).forEach((item) => {
      item.addEventListener('click', (evt) => {
        this.store.dispatch({ type: evt.target.dataset.actionType });
      });
    });
  }
  render() {
    this.container.innerHTML = '';
    this.wrapper = document.createElement('div');
    this.wrapper.innerHTML = hbarTmpl(this.store.getState().optionCount);
    this.views = this.wrapper.children[0];
    this.createAction('._button', this.views);
    this.container.appendChild(this.views);
  }
}

module.exports = SelectBox;
