// initial state
const logger = require("redux-logger").createLogger();
const {
  createAction,
  nanoid,
  createReducer,
  configureStore,
} = require("@reduxjs/toolkit");

const initialState = {
  count: 0,
};
//action creater
const increment = createAction("INCREAMENT");
const decrement = createAction("DECREAMENT");
const reset = createAction("RESET");
const incrementByAmount = createAction("INCREAMENT_BY_AMOUNT", (num) => {
  return {
    payload: { num, id: nanoid() },
  };
});

//reducer
// we can create reducer in two ways
// 1:builder call back notation =>recommended
// 2:map object notation

// 1:builder call back notation

const counterSlice = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.count += 1;
  });
  builder.addCase(decrement, (state) => {
    state.count -= 1;
  });
  builder.addCase(reset, (state) => {
    state.count = 0;
  });
  builder.addCase(incrementByAmount, (state, action) => {
    state.count = state.count + action.payload.num;
  });
});

// 2:map object notation
// const counterSlice1=createReducer(initialState, {
//   [increment]: (state) => {
//     state.count += 1;
//   },
//   [decrement]: (state) => {
//     state.count -= 1;
//   },
//   [reset]: (state) => {
//     state.count = 0;
//   },
//   [incrementByAmount]: (state, action) => {
//     state.count = state.count + action.payload.num;
//   },
// });

//store
const store = configureStore({
  reducer: counterSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByAmount(44));
console.log(store.getState());
