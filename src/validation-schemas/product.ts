import * as yup from 'yup';

export const addProductValidationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  price: yup
    .number()
    .typeError('Price must be a number')
    .min(1, 'Price must be greater than 0')
    .required('Price is required')
    .positive('Price must be a positive number'),
  stock: yup
    .number()
    .nullable()
    .typeError('stock level must be a number')
    .when('trackQuantity', ([trackQuantity], schema) =>
      trackQuantity === true
        ? schema
            .min(1, 'Stock must be at least 1')
            .required('Stock is required when tracking quantity')
            .positive('Stock must be a positive number')
        : schema.optional(),
    ),
  category: yup
    .object({
      label: yup.string().required('Category  label is required'),
      value: yup.string().required('Category  value is required'),
    })
    .required('Category is required'),
  status: yup
    .object({
      label: yup.string().required('Status is required'),
      value: yup.string().required('Status is required'),
    })
    .required('Category is required'),

  description: yup.string().optional(),
  trackQuantity: yup.boolean(),
  sellWhileOutOfStock: yup.boolean(),
  isNotify: yup.boolean(),

  minRestockLevel: yup
    .number()
    .nullable()
    .typeError('Min restock level must be a number')
    .when('isNotify', ([isNotify], schema) =>
      isNotify === true
        ? schema
            .min(1, 'Min restock be at least 1')
            .required(
              'Min restock level is required when notifications are enabled',
            )
        : schema.optional(),
    ),
});
