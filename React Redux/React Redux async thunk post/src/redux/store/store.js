import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "../reducer/postReducer";

// const middlewares = [thunk];
// const middlewareEnhancers = applyMiddleware(...middlewares);
const store = createStore(
  postReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
