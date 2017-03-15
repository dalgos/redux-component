function count(state = 0, action) {
  switch (action.type) {
    case 'UP':
      return state + 1;
    case 'DOWN':
      return state - 1;
    default:
      return state;
  }
}

module.exports = count;