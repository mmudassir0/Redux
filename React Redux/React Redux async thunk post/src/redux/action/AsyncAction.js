//for API we have three action request started,success,failer

import axios from "axios";
import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./ActionConstant";
import { apiURL } from "../utils/postApi";

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};
const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};
const fetchPostsError = (err) => {
  return {
    type: FETCH_POSTS_ERROR,
    payload: err,
  };
};
export const fetchPostsAction = () => {
  return async (dispatch) => {
    //request action
    dispatch(fetchPostsRequest());
    try {
      //success action
      const res = await axios.get(apiURL);
      dispatch(fetchPostsSuccess(res.data));
    } catch (error) {
      // action error
      dispatch(fetchPostsError(error));
    }
  };
};
// ---------------------------fetch single post---------------------------------
const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};
const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts,
  };
};
const fetchPostError = (err) => {
  return {
    type: FETCH_POST_ERROR,
    payload: err,
  };
};
export const fetchpostAction = (id) => {
  return async (dispatch) => {
    //request
    dispatch(fetchPostRequest());
    try {
      //success
      const res = await axios.get(`${apiURL}/${id}`);
      dispatch(fetchPostSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostError(error));
    }
  };
};
