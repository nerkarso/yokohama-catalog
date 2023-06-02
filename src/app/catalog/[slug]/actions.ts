'use server';

import queryString from 'query-string';

export async function getMasterFilters(
  stockLocationId: string
): Promise<MasterFiltersResponse> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/GetMasterFilters?CarStatusId=${stockLocationId}`,
    {
      cache: 'no-cache',
    }
  );
  if (!res.ok) throw new Error('Failed to fetch master filters');
  return res.json();
}

export async function getFilterResults(
  filterParams: GetFilterResultsParams
): Promise<FilterResult[]> {
  const qs = queryString.stringify(filterParams);
  const res = await fetch(
    `${process.env.API_BASE_URL}/BindFilteredResult?${qs}`,
    {
      cache: 'no-cache',
    }
  );
  if (!res.ok) throw new Error('Failed to fetch filter results');
  return res.json();
}
