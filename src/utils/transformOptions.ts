import _sortBy from 'lodash/sortBy';
import getUniqueListBy from './getUniqueListBy';

export default function transformOptions(
  items: any[],
  uniqueKey: string,
  optionLabelKey: string,
  optionIdKey: string,
  isSorted?: boolean,
  filter?: (item: any) => any
) {
  if (!items) return [];
  const filtered = filter ? items.filter(filter) : items;
  const uniqueList: any[] = getUniqueListBy(filtered, uniqueKey);
  const sortedList = isSorted ? _sortBy(uniqueList, optionLabelKey) : uniqueList;
  return sortedList.map((item) => ({
    label: item[optionLabelKey].toUpperCase(),
    value: item[optionIdKey],
  }));
}
