import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import Axios from './axios';

const baseURL = 'https://baee0c5d-15e7-45e2-ae1b-392ba74406a9.mock.pstmn.io';

function execute<T>(config: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    Axios(config)(config).then((res: AxiosResponse) => {
      resolve(res.data);
    }).catch((err: AxiosError) => {
      reject(err.response?.data);
    });
  });
}

const ApiCaller = {
  get: <T>(url: string): Promise<T> => execute({
    method: 'GET', url, baseURL,
  }),
  post: <T, D>(url: string, data?: D): Promise<T> => execute({
    method: 'POST', data, url, baseURL,
  }),
};

export default ApiCaller;
