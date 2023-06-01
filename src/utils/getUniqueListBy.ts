export default function getUniqueListBy(arr: any[], key: string) {
  // @ts-ignore
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}
