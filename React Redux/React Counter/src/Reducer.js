//initial state
const initialState = 0;

const Reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
};
export default Reducer;
