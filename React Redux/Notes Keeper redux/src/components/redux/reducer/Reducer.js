import { ADDPOST, DELETEPOST } from "../action/actionConstant";

//initial state
const initialState = {
  posts: [],
};
// reducer
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPOST:
      const newNotes = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };
      return {
        ...state,
        posts: [...state.posts, newNotes],
      };
    case DELETEPOST:
      const filterNotes = state.posts.filter(
        (post) => action.payload !== post.id
      );
      return { ...state, posts: filterNotes };
  }
};
export default Reducer;
