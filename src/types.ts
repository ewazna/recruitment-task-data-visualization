import type { CATEGORIES, CUSTOMER_TYPE, DEVICE_TYPE } from "./const";
import * as Highcharts from "highcharts";

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
  country: string;
  city: string;
  lat: number;
  lon: number;
  category: Category;
  subcategory: string;
  product: string;
  quantity: number;
  unitPrice: number;
  paymentMethod: string;
  customerType: CustomerType;
  device: Device;
  deliveryDays: number;
};

export type Category = (typeof CATEGORIES)[number];

export type Device = (typeof DEVICE_TYPE)[number];

export type CustomerType = (typeof CUSTOMER_TYPE)[number];

export type Currency = "EUR";

export type OrdersByCategory = Record<Category, Order[]>;

export type Series = {
  name: string;
  data: number[];
};

export type Options = Highcharts.Options & {
  chart: {
    customVariables?: Record<string, unknown>;
  };
};
