import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'post',
  initialState: { posts: [], post: null, loading: true, error: {} },
  reducers: {
    GET_POSTS: (post, action) => {
      post.posts = action.payload;
      post.loading = false;
    },

    GET_POST: (post, action) => {
      post.post = action.payload;
      post.loading = false;
    },
    ADD_POST: (post, action) => {
      post.posts = [action.payload, ...post.posts];
      post.loading = false;
    },
    DELETE_POST: (post, action) => {
      post.posts = post.posts.filter((post) => post._id !== action.payload);
      post.loading = false;
    },
    POST_ERROR: (post, action) => {
      post.error = action.payload;
      post.loading = false;
    },
    UPDATE_LIKES: (post, action) => {
      post.posts = post.posts.map((post) =>
        post._id === action.payload.id
          ? { ...post, likes: action.payload.likes }
          : post
      );
      post.loading = false;
    },
    ADD_COMMENT: (post, action) => {
      post.post = { ...post.post, comments: action.payload };
      post.loading = false;
    },
    REMOVE_COMMENT: (post, action) => {
      post.post = {
        ...post.post,
        comments: post.post.comments.filter(
          (comment) => comment._id !== action.payload
        ),
      };
      post.loading = false;
    },
  },
});

export const {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  DELETE_POST,
  POST_ERROR,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} = slice.actions;

export default slice.reducer;
