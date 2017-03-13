const SelectBoxView = require('views/SelectBox');
const SelectBoxModel = require('model/SelectBoxModel');

class SelectBox extends SelectBoxView {
  constructor(data) {
    super(data);
    this.model = new SelectBoxModel(data);
    this.model.extendCallback(this.initialize);
    console.log(this.model.data);
  }
  initialize(data) {
    
  }
}

module.exports = SelectBox;