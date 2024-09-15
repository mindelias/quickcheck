import * as yup from 'yup';

export const getStartedValidationSchema = yup.object().shape({
  fullName: yup.string().required('Please enter your name'),
  emailAddress: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email address is required'),
  phoneNumber: yup
    .string()
    .matches(/^080\d{8}$/, 'Phone number must be in the format 080X XXX XXXX')
    .required('Phone number is required'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8, 'Password should be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      'Password must contain at least one lowercase character, one uppercase character, and one number',
    ),
});

// export const almostDoneValidationSchema = yup.object().shape({
//   storeName: yup.string().required('Please enter your store name'),
//   ain: yup.string().required('Please enter ain'),
//   address: yup.string().required('Please enter your store address'),
//   country: yup.object().required('Please select country'),
//   state: yup.object().when('country', country => {
//     return country && country.length > 0
//       ? yup.object().required('Please select state')
//       : yup.object().notRequired();
//   }),
// });

export const almostDoneValidationSchema = yup.object().shape({
  storeName: yup.string().required('Please enter your store name'),
  ain: yup.string().required('Please enter ain'),
  address: yup.string().required('Please enter your store address'),
  country: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .required('Please select country'),
  state: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .when('country', ([country], schema) => {
      return country && country.value
        ? schema.required('Please select state')
        : schema.notRequired();
    }),
});

export const addNewStoreValidationSchema = yup.object().shape({
  storeName: yup.string().required('Please enter your store name'),
  address: yup.string().required('Please enter your store address'),
  country: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .required('Please select country'),
  state: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .when('country', ([country], schema) => {
      return country && country.value
        ? schema.required('Please select state')
        : schema.notRequired();
    }),
});

export const createPinValidationSchema = yup.object().shape({
  pin: yup.string().required('Please enter pin').min(6, 'Pin must be 6 digits'),
});
export const createOtpValidationSchema = yup.object().shape({
  otp: yup.string().required('Please enter otp').min(6, 'Pin must be 6 digits'),
});

export const confirmPinValidationSchema = yup.object({
  confirmPin: yup
    .string()
    .required('Please enter pin')
    .min(6, 'Pin must be 6 digits'),
});
// export const confirmPinValidationSchema = yup.object({
//   pin: yup.string().required('Please enter pin').min(6, 'Pin must be 6 digits'),

//   confirmPin: yup.string().when('pin', ([pin], schema) => {
//     return pin && pin.length === 6
//       ? schema
//           .required('Please confirm pin')
//           .oneOf([yup.ref('pin')], 'Pins do not match')
//       : schema.notRequired();
//   }),
// });
