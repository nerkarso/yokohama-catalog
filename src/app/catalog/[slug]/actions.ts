'use server';

export async function getMasterFilters(
  stockLocationId: string
): Promise<MasterFiltersResponse> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/GetMasterFilters?CarStatusId=${stockLocationId}`
  );
  if (!res.ok) throw new Error('Failed to fetch master filters');
  return res.json();
}
