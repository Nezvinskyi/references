import * as actions from './auth-actions';
import * as api from '../../services/auth-api';

export const login = credentials => async dispatch => {
  dispatch(actions.loginRequest());

  try {
    const { data } = await api.login(credentials);
    dispatch(actions.loginSuccess(data));
  } catch (error) {
    dispatch(actions.loginError(error.message));
  }
};
