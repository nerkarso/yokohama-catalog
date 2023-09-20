import { NOT_AVAILABLE, PRICE_UNAVAIABLE } from '@/config/constants';

export default function prettyPrice(value: any) {
  let amount = value;
  if (amount === null || amount === undefined) return NOT_AVAILABLE;
  if (amount === '$0.00' || amount == 0) return PRICE_UNAVAIABLE;
  if (typeof amount === 'string') {
    amount = amount.replace('$', '').replace(',', '');
    amount = parseFloat(amount);
  }
  if (typeof amount === 'number') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  }
  return amount;
}
