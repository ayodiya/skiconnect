import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const slice = createSlice({
  name: 'alert',
  initialState: [],

  reducers: {
    SET_ALERT: (alert, action) => {
      return [...alert, action.payload];
    },

    // [...alert, action.payload],
    REMOVE_ALERT: (alert, action) => {
      return alert.filter((alerts) => alerts.id !== action.payload);
    },
  },
});

export const { SET_ALERT, REMOVE_ALERT } = slice.actions;
export default slice.reducer;

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT.type,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT.type, payload: id }), 5000);
};

export const getupdatedStore = () => (store, getState) => {
  const alert = store.getState().entities.alert;
  return alert;
};
