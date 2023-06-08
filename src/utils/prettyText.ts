export default function prettyText(value: string) {
  if (typeof value !== 'string') return value;
  return value.replaceAll('_', ' ');
}
