function count(state = 0, action) {
  switch(action.type) {
    case 'UP':
      return state + 1;
    case 'DOWN':
      return state + 2;
    default:
      return state;
  }
}

function images(state = [], action) {
  if (action.type === 'ADD_IMAGE') {
    return Array.from(state).push(action.url);
  } else if (action.type === 'REMOVE_IMAGE') {
    return Array.from(state).splice(0, state.length - 1);
  } else {
    return state;
  }
}

module.exports = {
  count,
  images,
};