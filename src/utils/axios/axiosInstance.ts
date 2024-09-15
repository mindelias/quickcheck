import axios from 'axios';
import {requestInteceptor} from './requestInterceptor';
import {responseErr, responseInterceptor} from './responseInterceptor';
import {BASE_API_URL} from '../constants';
// import {AxiosRequestConfig, AxiosRequestHeaders} from 'axios';

interface AxiosHeaders {
  [key: string]: string;
}

const baseURL = BASE_API_URL;
export const devInstance = axios.create({
  baseURL,
  headers: {} as AxiosHeaders, // Initialize headers as an empty object,
});

// devInstance.interceptors.response.use(
//   res => responseInterceptor(res),
//   async err => responseErr(err),
// );
// devInstance.interceptors.request.use(
//   (config: InternalAxiosRequestConfig<any>) => requestInteceptor(config),
//   (error: any) => {
//     return Promise.reject(error);
//   },
// );
devInstance.interceptors.request.use(requestInteceptor, error =>
  Promise.reject(error),
);
devInstance.interceptors.response.use(responseInterceptor, responseErr);

// devInstance.interceptors.request.use(
//   //@ts-ignore
//   (config: AxiosRequestConfig) => requestInteceptor(config),
//   (error: any) => {
//     return Promise.reject(error);
//   },
// );
