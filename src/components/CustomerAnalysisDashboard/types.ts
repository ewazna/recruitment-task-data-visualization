import type { CustomerType, Order } from "../../types";

export type CustomerAnalysisDashboardProps = {
  orders: Order[];
};

export type OrdersByCustomerType = Record<CustomerType, Order[]>;
