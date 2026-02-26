import type { Currency, Order } from "../../types";

export type CategoryTrendsChartProps = {
  xAxisCategories: string[];
  currency: Currency;
  filteredOrders: Order[];
};
