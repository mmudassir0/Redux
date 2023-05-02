const { createStore, applyMiddleware } = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk").default;

//action variable
const Request_Started = "Request_Started";
const Success = "Success";
const Failed = "Failed";

// initial state
const initialState = {
  posts: [],
  error: "",
  loading: false,
};

//action creater
const postRequest = () => {
  return {
    type: Request_Started,
  };
};
const postSuccess = (posts) => {
  return {
    type: Success,
    payload: posts,
  };
};
const postFailed = (err) => {
  return {
    type: Failed,
  };
};

//action to make request
//it is function that return a function
const fetchPosts = () => {
  return async (dispatch) => {
    try {
      //dispatch
      dispatch(postRequest());
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //success
      dispatch(postSuccess(data));
    } catch (error) {
      //failed
      dispatch(postFailed(error.message));
    }
  };
};

//reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case Request_Started:
      return {
        ...state,
        loading: true,
      };
    case Success:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
  }
};

//store
const store = createStore(postReducer, applyMiddleware(thunk));

//subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

//dispatch
store.dispatch(fetchPosts());
// store.dispatch(postSuccess({ name: "hello" }));
