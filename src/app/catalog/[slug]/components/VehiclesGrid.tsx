import SkeletonVehicleCard from './SkeletonVehicleCard';
import VehicleCard from './VehicleCard';

export default function VehiclesGrid({
  data = [],
  isLoading,
}: {
  data?: FilterResult[];
  isLoading: boolean;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {(isLoading ? Array.from(new Array(8)) : data).map((item, index) => {
        if (isLoading) return <SkeletonVehicleCard key={index} />;
        return <VehicleCard data={item} key={item.VehicleId} />;
      })}
    </div>
  );
}
