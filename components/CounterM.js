//hbs
//dispatch

const tmpl = require('hbs/counter.hbs');
const Counter = require('Counter');
const $ = require('jquery');

class CounterM extends Counter {
  initialRender() {
    
    this.dom = $(tmpl(this.__store.getState()));
    this.disp = this.dom.find('[data-role=disp]');
    this.dispatcher = this.dom.find('[data-role=action]');
    this.dispatcher.on('click', (evt) => {
      this.__store.dispatch({ type: evt.target.dataset.actionType });
    });
    
    $(this.__container).append(this.dom);
  }
  render() {
    console.log(this.disp.html);
    this.disp.html(this.__store.getState().count);
  }
}

module.exports = CounterM;