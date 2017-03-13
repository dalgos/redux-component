class SandBox {
  constructor(data) {
    this.immutableData = {};
    this.flexibleData = {};
    this.cloneData(data);
  }
  cloneData(data) {
    Object.assign(this.immutableData, data);
    Object.assign(this.flexibleData, this.immutableData);
    return this.flexibleData;
  }
  get data() {
    return this.flexibleData;
  }
  set data(data) {
    Object.assign(this.flexibleData, data);
  }
}

class iModel {
  constructor(props, context) {
    this.selectedData = [];
    this.sandbox = (() => this.sandbox ? this.sandbox : new SandBox())();
    this.callbacks = [];
  }
  get selectData() {
    return this.selectedData;
  }
  set selectData(arr) {
    this.selectedData = arr;
  }
  extendCallback(callback) {
    this.callbacks.push(callback);
  }
  
}

module.exports = iModel;