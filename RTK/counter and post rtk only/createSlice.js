const { createSlice, configureStore } = require("@reduxjs/toolkit");

// initialstate
const initialState = {
  counter: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state, action) => {
      state.counter = state.counter - 1;
    },
    reset: (state, action) => {
      state.counter = 0;
    },
    incrementByAmount: (state, action) => {
      state.counter = state.counter + action.payload;
    },
  },
});
//action creater
const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
//reducer
const counterReducer = counterSlice.reducer;

//store
const store = configureStore({
  reducer: counterReducer,
});
//dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
// store.dispatch(reset());
store.dispatch(incrementByAmount(5));
console.log(store.getState());
