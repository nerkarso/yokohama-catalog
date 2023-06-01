export {};

declare global {
  interface Props<T = {}> extends React.PropsWithChildren {}

  interface MasterFiltersResponse {
    Item1: MasterFiltersItem[];
    Item2: MasterFiltersItem[];
    Item3: MasterFiltersItem[];
    Item4: MasterFiltersItem[];
    Item5: MasterFiltersItem[];
  }

  interface MasterFiltersItem {
    Make: string;
    MakewithCount: string;
    MakeCount: number;
    MakeId: number;
    VehicleTypeId: number;
    StockStatusId: number;
  }
}
