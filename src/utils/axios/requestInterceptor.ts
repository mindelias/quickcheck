import {InternalAxiosRequestConfig} from 'axios';
// import {getSavedState} from '../localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const requestInteceptor = (config: InternalAxiosRequestConfig<any>) => {
//   //   const savedState = getSavedState('accesstoken');
//   //   const savedState = getSavedState('accesstoken');
//   // const token = AsyncStorage.getItem('accesstoken');

//   config.headers = {
//     ...config.headers,
//     // Authorization: `Bearer ${token}`,
//   } as unknown as AxiosHeaders; // Add type assertion to AxiosHeaders

//   console.log('Config', config);

//   return config;
// };

export const requestInteceptor = async (
  config: InternalAxiosRequestConfig<any>,
) => {
  try {
    const token = await AsyncStorage.getItem('accesstoken'); // Correctly await the token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error('Failed to load token', error);
  }
  return config;
};
