import _ from 'lodash';
import getUniqueListBy from './getUniqueListBy';

export default function transformOptions(
  items: any[],
  uniqueKey: string,
  optionLabelKey: string,
  optionIdKey: string,
  isSorted?: boolean
) {
  if (!items) return [];
  const uniqueList: any[] = getUniqueListBy(items, uniqueKey);
  const sortedList = isSorted
    ? _.sortBy(uniqueList, optionLabelKey)
    : uniqueList;
  return sortedList.map((item) => ({
    label: item[optionLabelKey].toUpperCase(),
    id: item[optionIdKey],
  }));
}
