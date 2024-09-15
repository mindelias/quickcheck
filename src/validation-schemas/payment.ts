import * as yup from 'yup';

export const addDiscountValidationSchema = yup.object().shape({
  discountType: yup
    .object({
      label: yup.string().required('Discount Type label is required'),
      value: yup.string().required('Discount Type value is required'),
    })
    .required('Discount Type is required'),

  discountValue: yup
    .number()
    .typeError('Discount value is required and must be a number')
    .required('Discount value is required and must be a number')
    .when('discountType', ([discountType], schema) => {
      if (discountType && discountType.value === 'percentage') {
        return schema
          .min(1, 'Discount percentage must be at least 1')
          .max(100, 'Discount percentage must be at most 100')
          .required('Discount value is required');
      } else {
        return schema
          .moreThan(0, 'Discount amount must be greater than 0')
          .required('Discount value is required');
      }
    }),
  // discountValue: yup
  //   .number()
  //   .when('discountType', ([discountType], _schema) => {
  //     return discountType && discountType.value === 'percentage'
  //       ? yup
  //           .number()
  //           .typeError('Discount value must be a number ')
  //           .min(1, 'Discount percentage must be at least 1')
  //           .max(100, 'Discount percentage must be at most 100')
  //           .required('Discount value is required')
  //       : yup
  //           .number()
  //           .moreThan(0, 'Discount amount must be greater than 0')
  //           .required('Discount value is required');
  //   }),
  reason: yup.string().required('Reason is required'),
});

export const singlePaymentMethodSchema = yup.object().shape({
  amountPaid: yup.string().required('Amount Paid is required'),
  totalAmount: yup.string().notRequired(),
  change: yup.string().notRequired(),
  payments: yup.array().notRequired(),
});
export const defaultPaymentMethodSchema = yup.object().shape({
  totalAmount: yup.string().notRequired(),
  amountPaid: yup.string().notRequired(),
  change: yup.string().notRequired(),
  payments: yup.array().notRequired(),
});

export const multiplePaymentMethodSchema = yup.object().shape({
  totalAmount: yup.string().notRequired(),
  amountPaid: yup.string().notRequired(),
  change: yup.string().notRequired(),
  payments: yup
    .array()
    .of(
      yup.object().shape({
        paymentType: yup
          .object({
            label: yup.string().required('Payment Type label is required'),
            value: yup.string().required('Payment Type value is required'),
          })
          .required('Payment Type is required'),
        amount: yup
          .number()
          .positive('Amount must be positive')
          .required('Amount is required'),
      }),
    )
    .required('At least one payment method is required')
    .min(2, 'At least two payment methods are required'),
});
