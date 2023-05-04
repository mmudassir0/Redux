import { createStore } from "redux";
import Reducer from "./Reducer";

export const store = createStore(Reducer);

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});
