export type FetchedData = {
  meta: {
    currency: Currency;
    generatedAt: string;
    source: string;
  };
  orders: Order[];
};

export type Order = {
  orderId: string;
  timestamp: string;
  country: Country;
  city: string;
  lat: number;
  lon: number;
  category: Category;
  subcategory: Subcategory;
  product: string;
  quantity: number;
  unitPrice: number;
  paymentMethod: PaymentMethod;
  customerType: CustomerType;
  device: Device;
  deliveryDays: number;
};

export type Category = "Electronics" | "Home" | "Sports";

export type Currency = "EUR";

type Country = "PL" | "DE" | "FR" | "ES" | "IT" | "NL";

type Subcategory =
  | "Gaming"
  | "Mobile"
  | "Computers"
  | "Wearables"
  | "Audio"
  | "Cleaning"
  | "Lighting"
  | "Kichen"
  | "Fitness"
  | "Outdoor";

type PaymentMethod = "card" | "paypal" | "blik";

type CustomerType = "new" | "returning";

type Device = "mobile" | "tablet" | "desktop";

export type OrdersByCategory = Record<Category, Order[]>;

export type Series = {
  name: string;
  data: number[];
};
