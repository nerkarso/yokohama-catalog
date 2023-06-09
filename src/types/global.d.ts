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

  interface GetFilterResultsParams {
    CarId: string;
    Range: string;
    TypeId: string;
    CarStatus: string;
    Make: string;
    Brand: string;
    Year: string;
    PageNo: string;
    PriceRange: string;
  }

  interface FilterResult {
    VehicleId: number;
    Make: string;
    Type: null;
    Year: string;
    SalePrice: string;
    PromoPrice: string;
    ImageUrl: null;
    OriginalSalePrice: string;
    WebPromoDiscount: string;
    WebSailingDiscount: string;
    Model: null;
    VehicleType: string;
    BrandId: number;
    Brand: string;
    CarStatus: number;
    ReservationID: number;
    CarStockStatus: string;
    Location: string;
    ShowOnline: boolean;
    ShowPromoPriceOnline: boolean;
    Search_String: null;
    SearchTypeId: number;
  }

  interface VehicleDetails {
    VehicleId: number;
    Year: string;
    Mileage: string;
    Color: string;
    Fuel: string;
    Seats: string;
    Doors: string;
    Steering: string;
    Transmission: string;
    Chassis: string;
    EngineCapacity: number;
    WheeleDrive: string;
    Status: string;
    ArrivalDate: string;
    Location: string;
    SalePrice: number;
    PromoPrice: number;
    Make: string;
    ReservationStatus: string;
    OriginalSalePrice: number;
    WebPromoDiscount: number;
    WebSailingDiscount: number;
    WheelChair: string;
    ShowOnline: boolean;
    ShowPromoPriceOnline: boolean;
  }
}
