import axios, {AxiosError, AxiosResponse} from 'axios';
import {deleteLocalState, saveLocalState} from '../localstorage';
import { LOGIN_TOKEN } from '../constants';
// import qs from 'qs';
// import {deleteLocalState, saveLocalState} from '../localStorage';

export const responseInterceptor = (response: AxiosResponse<any, any>) => {
  return response;
};

export const responseErr = (err: AxiosError) => {
  console.log('erring', err);

  const originalConfig = err.config;
  if (err.response) {
    // Access Token was expired
    // @ts-ignore
    if (err.response.status === 401 && !originalConfig._retry) {
      deleteLocalState(LOGIN_TOKEN);
      //   window.location.href = '/';
    }
    if (err.response.status === 403 && err.response.data) {
      return Promise.reject(err.response.data);
    }
    return Promise.reject(err);
  }

  // return  err
  return Promise.reject(err);
};

// export const responseErr = (err: AxiosError) => {
//   console.error('Error in response', err);
//   // Handle 401 or other statuses as needed
//   if (err.response.status === 401 && !originalConfig._retry) {
//     deleteLocalState(');
//     //   window.location.href = '/';
//   }
//   if (err.response.status === 403 && err.response.data) {
//     return Promise.reject(err.response.data);
//   }
//   return Promise.reject(err);
// };

export async function getToken(refreshToken: string, url: string) {
  const config = {};
  const data = {
    refreshToken,
  };
  const result = await axios.post(`${url}` || '', JSON.stringify(data), config);
  await saveLocalState(LOGIN_TOKEN, result?.data?.token);
  return result?.data?.token;
}
