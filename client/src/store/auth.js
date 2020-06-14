import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
  },
  reducers: {
    USER_LOADED: (auth, action) => {
      auth.token = localStorage.getItem('token');
      auth.isAuthenticated = true;
      auth.loading = false;
      auth.user = action.payload;
    },
    AUTH_ERROR: (auth, action) => {
      auth.token = localStorage.removeItem('token', action.payload);
      auth.isAuthenticated = false;
      auth.loading = false;
    },
    REGISTER_SUCCESS: (auth, action) => {
      localStorage.setItem('token', action.payload);
      auth.token = localStorage.getItem('token');
      auth.isAuthenticated = true;
      auth.loading = false;
    },
    LOGIN_SUCCESS: (auth, action) => {
      localStorage.setItem('token', action.payload);
      auth.token = localStorage.getItem('token');
      auth.isAuthenticated = false;
      auth.loading = false;
    },
    REGISTER_FAIL: (auth, action) => {
      auth.token = localStorage.removeItem('token', action.payload);
      auth.isAuthenticated = false;
      auth.loading = false;
    },
    LOGIN_FAIL: (auth, action) => {
      auth.token = localStorage.removeItem('token', action.payload);
      auth.isAuthenticated = false;
      auth.loading = false;
    },
    LOGOUT: (auth, action) => {
      auth.token = localStorage.removeItem('token', action.payload);
      auth.isAuthenticated = false;
      auth.loading = false;
    },
    ACCOUNT_DELETED: (auth, action) => {
      auth.token = localStorage.removeItem('token', action.payload);
      auth.isAuthenticated = false;
      auth.loading = false;
    },
  },
});

export const {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
} = slice.actions;
export default slice.reducer;
