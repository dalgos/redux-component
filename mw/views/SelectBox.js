let hbars = require('handlebars');
const tmpl = '<select>\
              {{#each options}}\
              <option value={{value}} {{#if selected}}selected="selected"{{/if}}>{{text}}</option>\
              {{/each}}\
             </select>';

class SelectBox {
  constructor(data) {
    console.log(hbars);
    this.hbar = hbars.compile(tmpl);
    return this.buildMarkup(data);
  }
  buildMarkup(data) {
    this.container = document.createElement('div');
    this.container.innerHTML = this.hbar({ options: data });
    return this.container;
  }
};

module.exports = SelectBox;