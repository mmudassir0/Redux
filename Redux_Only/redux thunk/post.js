const { createStore } = require("redux");

// initialstate
const initialState = {
  posts: [],
};

//action
const addPost = (post) => {
  return {
    type: "Added",
    payload: post,
  };
};

//reducer
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Added":
      return {
        posts: [...state.posts, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

//store
const store = createStore(Reducer);

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

store.dispatch(
  addPost({
    id: 1,
    message: "hello",
  })
);
store.dispatch(
  addPost({
    id: 2,
    message: "good morning",
  })
);
