import {Discount} from '../components/Payment/AddDiscount/type';
import {Product} from '../store/product/type';

export function calculateTotalAmount(products: Product[]) {
  return products && products.length > 0
    ? products?.reduce((total, item: Product) => {
        return (
          total + (item?.quantity as number) * parseFloat(item?.price as string)
        );
      }, 0)
    : 0; // Initial total is 0
}

export function calculateTotalItems(products: Product[]): number {
  return products && products.length > 0
    ? products.reduce(
        (total, product) => total + (product.quantity as number),
        0,
      )
    : 0;
}
export function applyDiscount(totalPrice: number, discount: Discount) {
  let updatedPrice = totalPrice;
  let discountAmount;
  const {discountType, discountValue} = discount;

  if (discountType.value === 'amount') {
    // Apply discount as amount
    discountAmount = discountValue;
    updatedPrice -= discountAmount as number;
  } else if (discountType.value === 'percentage') {
    // Apply discount as percentage
    discountAmount = ((discountValue as number) / 100) * totalPrice;
    updatedPrice -= discountAmount;
  } else {
    // Handle invalid discount type (optional)
    throw new Error('Invalid discount type provided.');
  }

  // Ensure updatedPrice doesn't go below zero
  updatedPrice = Math.max(updatedPrice, 0);

  return {totalPrice: updatedPrice, discountAmount};
}

export const calculateTotalAmountFromMultiplePayments = (payments: any[]) => {
  return payments.reduce((total: number, payment: {amount: string}) => {
    const amount = parseFloat(payment.amount);
    return total + (isNaN(amount) ? 0 : amount);
  }, 0);
};
