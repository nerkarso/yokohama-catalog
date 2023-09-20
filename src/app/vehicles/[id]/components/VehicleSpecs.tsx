import prettyText from '@/utils/prettyText';

export default function VehicleSpecs({ details }: { details: VehicleDetails }) {
  return (
    <div className="space-y-4 p-4 lg:p-6 rounded-xl border bg-base-50 dark:bg-base-900 dark:border-base-800">
      {Object.entries(vehicleSpecLabels).map(([key, label]) => {
        // @ts-ignore
        const value = details[key];
        if (!value) return;
        return (
          <div className="flex flex-col lg:flex-row lg:gap-2 lg:justify-between" key={key}>
            <p className="text-base-500">{label}</p>
            <p className="lg:text-right">{prettyText(value)}</p>
          </div>
        );
      })}
    </div>
  );
}

const vehicleSpecLabels = {
  VehicleId: 'Auto Id',
  ArrivalDate: 'Arrival Date',
  Location: 'Location',
  Year: 'Year',
  Mileage: 'Mileage (x 1000 km)',
  Color: 'Color',
  Fuel: 'Fuel',
  Seats: 'Seats',
  WheelChair: 'Seat for wheelchair passenger',
  Doors: 'Doors',
  Steering: 'Steering',
  Transmission: 'Transmission',
  Chassis: 'Chassis',
  EngineCapacity: 'Engine Capacity',
  WheeleDrive: 'Wheel Drive',
  Cylinders: 'Cylinders',
  Status: 'Status',
};
