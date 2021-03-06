import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/',
});

export const urls = {
  login: 'api/login',
  register: 'api/register',
};

export const setAuthToken = (token) => {
  api.defaults.headers.common['Auth'] = token;
};

export default api;
