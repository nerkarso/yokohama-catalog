'use server';

export async function getVehicleDetails(
  vehicleId: string
): Promise<VehicleDetails[]> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/DisplayVehicleDetails?VehicleId=${vehicleId}`,
    {
      cache: 'default',
    }
  );
  if (!res.ok) throw new Error('Failed to fetch vehicles details');
  return res.json();
}
