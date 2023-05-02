const { createStore, combineReducers } = require("redux");
// initial state
const initialState = {
  posts: [],
};

const userinitialState = {
  users: [],
};
//action
const add_post = (post) => {
  return { type: "ADD", payload: post };
};
const remove_post = (id) => {
  return {
    type: "REMOVE",
    id,
  };
};
//user action
const add_user = (user) => {
  return { type: "ADD_USER", payload: user };
};
//reducer
const Post_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        posts: [...state.posts, action.payload],
      };
    case "REMOVE":
      return {
        posts: state.posts.filter((post) => {
          return post.id !== action.id;
        }),
      };
    default:
      return state;
  }
};
//user reducer
const user_Reducer = (state = userinitialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        posts: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  posts: Post_Reducer,
  users: user_Reducer,
});
//store
const store = createStore(rootReducer);
store.subscribe(() => {
  const stateData = store.getState();
  console.log(stateData.posts);
  console.log(stateData.users);
});
store.dispatch(
  add_post({
    id: 1,
    title: "one",
  })
);
store.dispatch(
  add_post({
    id: 2,
    title: "two",
  })
);
store.dispatch(
  add_user({
    uname: "ali",
    email: "ali@gmail.com",
  })
);
store.dispatch(remove_post(2));
