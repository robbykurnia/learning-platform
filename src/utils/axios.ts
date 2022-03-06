import axios, { AxiosRequestConfig } from 'axios';

export default (config: AxiosRequestConfig) => axios.create({
  baseURL: config.baseURL,
  timeout: config.timeout || 60000,
  headers: {
    'Content-Type': 'application/json',
    ...(config.headers || {}),
  },
});
