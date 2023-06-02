import MainHeading from '@/components/MainHeading';
import { getVehicleDetails } from './actions';
import VehicleSpecs from './components/VehicleSpecs';

export default async function Page({ params }: { params: { id: string } }) {
  const vehicleDetailsData = await getVehicleDetails(params.id);
  const vehicleDetails = vehicleDetailsData[0];

  return (
    <>
      <header className="flex items-center gap-3">
        <MainHeading>{vehicleDetails.Make}</MainHeading>
      </header>
      <div className="flex mt-8">
        <div className="md:basis-1/4 w-full">
          <VehicleSpecs details={vehicleDetails} />
        </div>
      </div>
    </>
  );
}
