import Realm from 'realm';

export class PaymentType extends Realm.Object {
  label?: string;
  value?: string;

  static schema: Realm.ObjectSchema = {
    name: 'PaymentType',
    embedded: true,
    properties: {
      label: 'string?',
      value: 'string?',
    },
  };
}
export class Payment extends Realm.Object {
  paymentType?: {
    label?: string;
    value?: string;
  };
  amount?: number;

  static schema: Realm.ObjectSchema = {
    name: 'Payment',
    embedded: true,
    properties: {
      paymentType: 'PaymentType?', // Reference the PaymentType schema
      amount: 'double?',
    },
  };
}

export class PaymentChannelInfo extends Realm.Object {
  totalAmount!: string;
  amountPaid?: string;
  change?: string;
  payments?: Payment;
  static schema: Realm.ObjectSchema = {
    name: 'PaymentChannelInfo',
    embedded: true,
    properties: {
      totalAmount: 'string',
      amountPaid: 'string?',
      change: 'string?',
      payments: {type: 'list', objectType: 'Payment'},
    },
  };
}
