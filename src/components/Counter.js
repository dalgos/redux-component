//external libs
const $ = require('jquery');
//Class
const Storage = require('components/Storage');

//Contants
const ACTIONS = require('actions'); 

const _initialState = {
  count: 0
};

//View
const tmpl = require('hbs/counter');

class Counter extends Storage {
  constructor(par = { initialStore: null, container: document.body }) {
    super(par.initialStore, par.initialState, _initialState);
    this.container = $(par.container);
    this.subscribe(() => {
      this.render();
    });
    this.initialRender();
  }
  initialRender() {
    const makedDom = $(tmpl(this.getState()));
    const dispatcher = this.dispatch;
    makedDom.find('[data-role="action"]').each(function () {
      let action = { type: ACTIONS[$(this).data('actionType')] };
      $(this).on('click', () => {
        dispatcher(action);
      });
    });
    this.container.append(makedDom);
    this.render();
  }
  render() {
    $('#disp').html(this.getState().option.count.toString());
  }
}

module.exports = Counter;