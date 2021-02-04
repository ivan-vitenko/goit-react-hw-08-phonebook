import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const setUser = (_, { payload }) => payload.user;

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: setUser,
  [authActions.loginSuccess]: setUser,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const setToken = (_, { payload }) => payload.token;

const token = createReducer(null, {
  [authActions.registerSuccess]: setToken,
  [authActions.loginSuccess]: setToken,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

export default combineReducers({
  user,
  token,
  error,
});
