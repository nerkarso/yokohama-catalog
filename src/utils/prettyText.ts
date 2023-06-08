export default function prettyText(value: any) {
  if (!value) return '';
  if (typeof value !== 'string') return value;
  return value.replaceAll('_', ' ');
}
