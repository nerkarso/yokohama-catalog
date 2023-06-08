import MainHeading from '@/components/MainHeading';
import prettyPrice from '@/utils/prettyPrice';
import { getVehicleDetails } from './actions';
import VehicleSpecs from './components/VehicleSpecs';

export default async function Page({ params }: { params: { id: string } }) {
  const vehicleDetailsData = await getVehicleDetails(params.id);
  const vehicleDetails = vehicleDetailsData[0];

  return (
    <>
      <header>
        <MainHeading>{vehicleDetails.Make}</MainHeading>
        <h5 className="mt-1 text-xl font-medium text-secondary-700">
          ${prettyPrice(vehicleDetails.OriginalSalePrice)}
        </h5>
      </header>
      <div className="flex mt-4">
        <div className="md:basis-1/4 w-full">
          <VehicleSpecs details={vehicleDetails} />
        </div>
      </div>
    </>
  );
}
