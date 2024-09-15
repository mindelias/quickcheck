import {devInstance} from '../utils/axios/axiosInstance';
import {
  ADD_STORE_URL,
  GENERATE_OTP_URL,
  SIGN_UP_URL,
  VALIDATE_OTP_URL,
} from '../utils/constants';

export const login = async (payload: any) => {
  const response = await devInstance.post('/Account/SignIn', payload);
  return response;
};
export const signUp = async (payload: any) => {
  console.log('payloadSIGNUP', payload);
  const response = await devInstance.post(SIGN_UP_URL, payload);

  return response;
};

export const forgotPassword = async (payload: any) => {
  const response = await devInstance.get(
    `/Account/ForgotPassword?email=${payload.email}`,
  );
  return response;
};

export const changePassword = async (payload: any) => {
  const response = await devInstance.post('/Account/ChangePassword', payload);
  return response;
};

export const resetPassword = async (payload: any) => {
  const response = await devInstance.post('/Account/ResetPassword', payload);
  return response;
};

export const activateAccount = async (payload: any) => {
  const response = await devInstance.post('/Account/Confirm', payload);
  return response;
};

export const generateOtp = async (payload: any) => {
  const response = await devInstance.post(GENERATE_OTP_URL, payload);

  return response;
};

export const validateOtp = async (payload: any) => {
  const response = await devInstance.post(VALIDATE_OTP_URL, payload);

  return response;
};
export const addNewStore = async (payload: any) => {
  console.log('payloadAddStore', payload);
  const response = await devInstance.post(ADD_STORE_URL, payload);
  return response;
};
