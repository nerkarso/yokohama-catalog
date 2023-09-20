export default function prettyPrice(value: any) {
  let amount = value;
  if (!amount) return 'Not available';
  if (amount === '$0.00') return 'Price unavailable';
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
