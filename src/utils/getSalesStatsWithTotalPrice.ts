import {SalesItems, SalesTableBodyProps} from '../screens/sales/types';

export function getSalesStatsWithEachTotalPrice(items: any[]): SalesItems {
  const groups: SalesItems = {};

  items.forEach(item => {
    const status = item.paymentStatus;
    const amount = +item.totalPrice || 0;

    if (status in groups) {
      groups[status].items.push(item);
      groups[status].totalItems += 1;
      groups[status].totalAmount += amount;
    } else {
      groups[status] = {
        items: [item],
        totalItems: 1,
        totalAmount: amount,
      };
    }
  });

  return groups;
}
