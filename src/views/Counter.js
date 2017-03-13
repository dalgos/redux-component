
const noState = 9;
const SelectStore = require('store/select');
let selectStore = new SelectStore(noState);
let selectStoreInstance = selectStore.getInstance();

class SelectBox {
  constructor(param = {container: document.body, initState: [{}]}) {
    
    selectStore.appendReducer({name: 'UP', reducer: this.UP});
    
    this.container = document.createElement('p');
    
    this.getButton = document.createElement('button');
    this.getButton.innerHTML = 'GET';
    this.getButton.addEventListener('click', () => {
      console.log(store.getState());
    });
    
    this.upButton = document.createElement('button');
    this.upButton.innerHTML = 'UP';
    this.upButton.addEventListener('click', () => {
      selectStoreInstance.dispatch({ type: 'UP' });
    });
    
    this.displayP = document.createElement('p');
    
    this.container.appendChild(this.getButton);
    this.container.appendChild(this.upButton);
    this.container.appendChild(this.displayP)
    
    param.container.appendChild(this.container);
    
    this.render = () => {
      this.displayP.innerHTML = selectStoreInstance.getState().toString();
    }
    
    selectStoreInstance.subscribe(this.render);
    this.render();
  }
  
  UP(state, action) {
    return state + 1;
  }
  
}

module.exports = SelectBox;