export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.count + 1;
      break;
    case "DECREMENT":
      return state.count - 1;
      break;
    default:
      return state;
  }
};
