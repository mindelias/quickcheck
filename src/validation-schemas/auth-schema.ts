import * as yup from 'yup';

export const forgotPasswordValidationSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email address is required'),
});

export const loginValidationSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email address is required'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8, 'Password should be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      'Password must contain at least one lowercase character, one uppercase character, and one number',
    ),
});
