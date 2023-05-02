const { createStore } = require("redux");

//initial state
const initialState = {
  posts: [],
};
//action
const add_post = (post) => {
  return {
    type: "ADD",
    payload: post,
  };
};
const remove_post = (id) => {
  return {
    type: "REMOVE",
    id,
  };
};

//reducer
const Reducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    return {
      posts: [...state.posts, action.payload],
    };
  } else if (action.type === "REMOVE") {
    return {
      posts: state.posts.filter((post) => {
        return post.id !== action.id;
      }),
    };
  } else {
    return state;
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
store.dispatch(remove_post(1));
