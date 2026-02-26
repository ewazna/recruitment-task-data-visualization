import type { CustomerType, Order } from "../../types";

export type ClientAnalysisDashboardProps = {
  orders: Order[];
};

export type OrdersByCustomerType = Record<CustomerType, Order[]>;
