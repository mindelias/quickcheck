import {styles} from '../screens/payment/styles';
import {SALES_STATUS, SALES_STATUS_VALUE} from '../config/enums/Sales.enum';
import {
  PRODUCT_STATUS,
  PRODUCT_STATUS_VALUE,
} from '../config/enums/product.enum';

export const getPaymentStatusStyleName = (status: number) => {
  switch (status) {
    case SALES_STATUS_VALUE.PAID:
      return {styles: styles.active, label: SALES_STATUS.PAID};
    case SALES_STATUS_VALUE.ROLLBACK:
      return {styles: styles.rollback, label: SALES_STATUS.ROLLBACK};
    case SALES_STATUS_VALUE.VOIDED:
      return {styles: styles.cancel, label: SALES_STATUS.VOIDED};
    default:
      return {styles: styles.status, label: SALES_STATUS.PENDING};
  }
};

export const getProductStatusStyleName = (status: number) => {
  switch (status) {
    case PRODUCT_STATUS_VALUE.Archived:
      return {styles: styles.status, label: PRODUCT_STATUS.Archived};
    case PRODUCT_STATUS_VALUE.Inactive:
      return {styles: styles.cancel, label: PRODUCT_STATUS.Inactive};
    default:
      return {styles: styles.active, label: PRODUCT_STATUS.Active};
  }
};
