const BaseComponent = require('BaseComponent');
const tmpl = require('hbs/images');
const $ = require('jquery');

class Images extends BaseComponent {
  initialRender() {
    $(this.__container).append(tmpl(this.getState()));
  }
  render() {
    
  }
}

module.exports = Images;