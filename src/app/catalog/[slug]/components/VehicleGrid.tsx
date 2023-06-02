import VehicleCard from './VehicleCard';

export default function VehicleGrid({ data }: { data: FilterResult[] }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((item) => (
        <VehicleCard data={item} key={item.VehicleId} />
      ))}
    </div>
  );
}
