import { API_KEY } from './api-settings';
import axios from 'axios';

export const login = async credentials => {
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    { ...credentials, returnSecureToken: true },
  );
};
