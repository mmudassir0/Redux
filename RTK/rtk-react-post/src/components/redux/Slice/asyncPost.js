import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
};
const API = "https://jsonplaceholder.typicode.com/posts";
//action creater
export const fetchPost = createAsyncThunk("post", async () => {
  const data = await axios.get(API);
  return data;
});
//create Slice
const asyncPost = createSlice({
  name: "asyncPost",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      }),
      builder.addCase(fetchPost.rejected, (state) => {
        state.loading = false;
        state.posts = [];
      });
  },
});

export const asyncReducer = asyncPost.reducer;
