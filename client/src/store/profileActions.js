import { setAlert } from './alert';
import { ACCOUNT_DELETED } from './auth';
import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
} from './profile';

// Get current user profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE.type,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR.type,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get all users profiles

export const getProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE.type });
  try {
    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILES.type,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR.type,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get all user by Id

export const getProfileById = (userId) => async (dispatch) => {
  // dispatch({ type: CLEAR_PROFILE.type });
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE.type,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR.type,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/profile/create', formData, config);

    dispatch({
      type: GET_PROFILE.type,
      payload: res.data,
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR.type,

      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put('/api/profile/education', formData, config);

    dispatch({
      type: UPDATE_PROFILE.type,
      payload: res.data,
    });

    dispatch(setAlert('Education Added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR.type,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete education
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE.type,
      payload: res.data,
    });

    dispatch(setAlert('Education Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR.type,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete account & profile
export const deleteAccount = () => async (dispatch) => {
  try {
    await axios.delete('/api/profile');

    dispatch({ type: CLEAR_PROFILE.type });
    dispatch({ type: ACCOUNT_DELETED.type });

    dispatch(setAlert('Your account has been permanently deleted'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR.type,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
