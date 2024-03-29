import VehicleStatusChip from '@/app/catalog/[slug]/components/VehicleStatusChip';
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
      <header className="flex flex-wrap items-center gap-2">
        <div className="mr-auto">
          <MainHeading>{vehicleDetails.Make}</MainHeading>
          <h5 className="mt-1 sm:text-lg lg:text-xl font-medium text-secondary-700">
            {prettyPrice(vehicleDetails.OriginalSalePrice)}
          </h5>
        </div>
        <VehicleStatusChip value={vehicleDetails.ReservationStatus} />
      </header>
      <div className="flex mt-4 flex-col gap-y-6 gap-x-8 lg:flex-row">
        <div className="flex-1">
          <PhotoCarousel vehicleId={String(vehicleDetails.VehicleId)} />
        </div>
        <div className="lg:max-w-sm xl:max-w-md flex-1">
          <VehicleSpecs details={vehicleDetails} />
        </div>
      </div>
    </>
  );
}
