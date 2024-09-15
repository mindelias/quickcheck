import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';

// Extend dayjs with the plugins
dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);

export const pluralizeText = (
  total: number,
  singularText: string,
  pluralText: string,
): string => (total === 1 ? `1 ${singularText}` : `${total} ${pluralText}`);

export const truncateText = (text: string, maxLength = 20) => {
  if (text?.length <= maxLength) {
    return text;
  } else {
    return text?.substring(0, maxLength) + '...';
  }
};

// Define the format function
export const formatLongerDate = (date: string) => {
  return dayjs(date).format('dddd, MMMM D, YYYY [at] h:mm a');
};

export const formatDate = (date: string) => {
  return dayjs(date).format('MMMM D, YYYY');
};

export const formatCurrency = (amount = 0) => {
  // Create Intl.NumberFormat object with Nigerian currency format
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  });

  // Format the currency
  return formatter.format(amount);
};
export function getFirstName(fullName: string) {
  return fullName ? fullName?.split(' ')[0] : '';
}
