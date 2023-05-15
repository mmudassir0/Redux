import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "../action/ActionConstant";

// initial state
const initialState = {
  loading: false,
  error: "",
  posts: [],
  post: {},
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        posts: [],
        error: action.payload,
        loading: false,
      };
    //fetch single post
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload],
        loading: false,
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        posts: [],
        post: {},
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
