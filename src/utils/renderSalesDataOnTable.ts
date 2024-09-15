import moment from 'moment';
import {SalesTableBodyPropsN} from '../screens/sales/types';
import {getPaymentStatusStyleName} from './getPaymentStatsuStyleName';

export const renderSalesDataOnTable = (
  salesData: Array<SalesTableBodyPropsN>,
) => {
  return salesData.map(item => ({
    ...item,
    id: item.id.substring(0, 4),
    totalPrice: `N ${item.totalPrice.toLocaleString()}`,
    totalItems:
      +item.totalItems <= 1
        ? `${item.totalItems} item`
        : `${item.totalItems} items`,
    createdOn: moment(item.createdOn).calendar(),
    paymentStatus: getPaymentStatusStyleName(item.paymentStatus).label,
  }));
};
