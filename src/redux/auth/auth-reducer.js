import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './auth-actions';

const initialValue = '';

const user = createReducer(initialValue, {
  [actions.loginSuccess]: (_, { payload }) => payload.localId,
  [actions.logoutSuccess]: () => initialValue,
});

const token = createReducer(null, {
  // [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.idToken,
  [actions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  // [actions.registerError]: setError,
  [actions.loginError]: setError,
  [actions.logoutError]: setError,
  // [actions.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  // [actions.registerSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  // [actions.getCurrentUserSuccess]: () => true,
  // [actions.registerError]: () => false,
  [actions.loginError]: () => false,
  // [actions.getCurrentUserError]: () => false,
  [actions.logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  isAuthenticated,
  error,
});
