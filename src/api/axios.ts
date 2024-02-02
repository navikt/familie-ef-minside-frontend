import axios from 'axios';

axios.defaults.baseURL = window.location.origin;

export const prefferedAxios = axios;

export const axiosConfig = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
};
