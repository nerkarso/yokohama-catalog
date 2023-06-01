import CatalogTitle from './components/CatalogTitle';
import MasterFiltersToolbar from './components/MasterFiltersToolbar';

export default function Layout({ children }: Props) {
  return (
    <div className="px-4 py-8 container">
      <header>
        <CatalogTitle />
        <MasterFiltersToolbar />
      </header>
      {children}
    </div>
  );
}
