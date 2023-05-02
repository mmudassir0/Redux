const { createStore } = require("redux");

//initial state
const initialState = {
  count: 0,
};
//action
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
const reset = () => {
  return {
    type: "RESET",
  };
};
const increment_By_Amount = (num) => {
  return {
    type: "INCREASE_BY_AMOUNT",
    payload: num,
  };
};
//reducer
const Reducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case "INCREMENT":
  //     return state.count + 1;
  //   case "DECREMENT":
  //     return state.count - 1;
  //   case "RESET":
  //     return 0;
  //   case "INCREASE_BY_AMOUNT":
  //     return state.count + action.payload;
  // }
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: 0,
    };
  } else if (action.type === "INCREASE_BY_AMOUNT") {
    return {
      count: state.count + action.payload,
    };
  }
};

//store

const store = createStore(Reducer);
//get state
store.subscribe(() => {
  const stateData = store.getState();
  console.log(stateData);
});
// store.const dispatch = useDispatch();
store.dispatch(increment());
store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment_By_Amount(5));
