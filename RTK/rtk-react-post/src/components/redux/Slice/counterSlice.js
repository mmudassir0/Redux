import { createSlice } from "@reduxjs/toolkit";
//initial state
const initialState = {
  count: 0,
};
//slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
//action
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
