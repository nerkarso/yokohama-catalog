import MainHeading from '@/components/MainHeading';
import prettyPrice from '@/utils/prettyPrice';
import { getVehicleDetails } from './actions';
import PhotoCarousel from './components/PhotoCarousel';
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
      <div className="flex mt-4 flex-col gap-y-6 gap-x-8 lg:flex-row">
        <div className="flex-1">
          <PhotoCarousel vehicleId={String(vehicleDetails.VehicleId)} />
        </div>
        <div className="lg:max-w-sm flex-1">
          <VehicleSpecs details={vehicleDetails} />
        </div>
      </div>
    </>
  );
}
