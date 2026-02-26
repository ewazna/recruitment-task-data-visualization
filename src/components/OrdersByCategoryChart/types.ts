import type { Currency, Order } from "../../types";

export type OrdersByCategoryChartProps = {
  xAxisCategories: string[];
  currency: Currency;
  filteredOrders: Order[];
};
