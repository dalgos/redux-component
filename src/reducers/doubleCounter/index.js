function count(state = 0, action) {
  switch (action.type) {
    case 'UP':
      return state + 2;
    case 'DOWN':
      return state - 2;
    default:
      return state;
  }
}

module.exports = count;