const {
  createSlice,
  createAsyncThunk,
  configureStore,
} = require("@reduxjs/toolkit");
const { default: axios } = require("axios");
const API = "https://jsonplaceholder.typicode.com/posts";
//initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// async thunk action
const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get(API);
  return res.data;
});
const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPosts.rejected, () => {
      state.error = "Error Fetching Posts";
      state.loading = false;
      state.posts = [];
    });
  },
});
//store
const store = configureStore({
  reducer: postSlice.reducer,
});
//dispatch
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchPosts());
