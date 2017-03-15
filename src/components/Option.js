const Storage = require('components/Storage');
const hbs = require('handlebars');
const $ = require('jquery');
const tmpl = require('hbs/option.hbs');

class Option extends Storage {
  constructor(par = { initialStore: null, container: document.body }) {
    super(par.initialStore);
    this.container = $(par.container);
    this.initialRender();
  }
  initialRender() {
    this.markup = $(tmpl(this.getState()));
    this.$display = this.markup.find('[data-role=display]');
    this.$button = this.markup.find('[data-role=action]');
    this.$button.on('click', () => {
      this.dispatch({ type: 'OPTION_TOGGLE' });
    });
    this.container.append(this.markup);
    
    this.subscribe(() => {
      this.render();
    });
    
    this.render();
  }
  render() {
    this.$display.html(this.getState().option.mode);
  }
}

module.exports = Option;