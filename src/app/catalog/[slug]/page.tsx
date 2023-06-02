import CatalogTitle from './components/CatalogTitle';
import MasterFiltersToolbar from './components/MasterFiltersToolbar';
import VehiclesContainer from './components/VehiclesContainer';

export default function Page() {
  return (
    <div className="px-4 py-8 container">
      <CatalogTitle />
      <MasterFiltersToolbar />
      <div className="mt-8">
        <VehiclesContainer />
      </div>
    </div>
  );
}
