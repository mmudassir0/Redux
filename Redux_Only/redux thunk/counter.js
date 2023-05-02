const { createStore } = require("redux");

//initial state
const initialstate = {
  count: 0,
};

//action
const increment = () => {
  return {
    type: "ADD",
  };
};
const decrement = () => {
  return {
    type: "SUB",
  };
};

//reducer
const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD":
      return {
        count: state.count + 1,
      };
    default:
      state;
  }
};

//store
const store = createStore(Reducer);

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
