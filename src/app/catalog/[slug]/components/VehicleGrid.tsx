import SkeletonVehicleCard from './SkeletonVehicleCard';
import VehicleCard from './VehicleCard';

export default function VehicleGrid({
  data = [],
  isLoading,
}: {
  data?: FilterResult[];
  isLoading: boolean;
}) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {(isLoading ? Array.from(new Array(6)) : data).map((item, index) => {
        if (isLoading) return <SkeletonVehicleCard key={index} />;
        return <VehicleCard data={item} key={item.VehicleId} />;
      })}
    </div>
  );
}
