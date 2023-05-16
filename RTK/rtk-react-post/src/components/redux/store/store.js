import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../Slice/counterSlice";
import { notesReducer } from "../Slice/noteSLice";
import { asyncReducer } from "../Slice/asyncPost";

const rootReducer = combineReducers({
  counter: counterReducer,
  notes: notesReducer,
  asyncPost: asyncReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
