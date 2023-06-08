export default function prettyPrice(value: any) {
  if (!value) return '';
  if (typeof value !== 'string') return value;
  return value.replace('$0.00', 'Price unavailable');
}
