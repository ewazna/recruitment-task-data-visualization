import dayjs from "dayjs";
import type { Order, OrdersByCategory, Series } from "../../types";
import type { YAxisData } from "../ChartSwitcher/types";
import { CATEGORIES } from "../../const";

export const getSeriesForByCategoryChart = (
  selectedData: YAxisData,
  xAxisCategories: string[],
  filteredOrders: Order[],
) => {
  const sortedOrders = sortOrdersByCategories(filteredOrders);

  switch (selectedData) {
    case "orders":
      return getSeriesForOrdersByCategoryChart(xAxisCategories, sortedOrders);
    case "revenue":
      return getSeriesForRevenueByCategoryChart(xAxisCategories, sortedOrders);
    default:
      return [];
  }
};

export const getSeriesForOrdersByCategoryChart = (
  xAxisCategories: string[],
  sortedOrders: OrdersByCategory,
): Series[] => {
  return CATEGORIES.map((category) => {
    const orders = sortedOrders[category] || [];
    const numberOfOrdersByDayMap: Record<string, number> = {};

    orders.forEach((order) => {
      const dateKey = dayjs(order.timestamp).format("DD/MM/YYYY");
      numberOfOrdersByDayMap[dateKey] =
        (numberOfOrdersByDayMap[dateKey] || 0) + 1;
    });
    const data = xAxisCategories.map((date) => {
      return numberOfOrdersByDayMap[date] || 0;
    });

    return { name: category, data };
  });
};

export const getSeriesForRevenueByCategoryChart = (
  xAxisCategories: string[],
  sortedOrders: OrdersByCategory,
): Series[] => {
  return CATEGORIES.map((category) => {
    const orders = sortedOrders[category] || [];
    const revenueByDayMap: Record<string, number> = {};

    orders.forEach((order) => {
      const dateKey = dayjs(order.timestamp).format("DD/MM/YYYY");
      revenueByDayMap[dateKey] =
        (revenueByDayMap[dateKey] || 0) + order.unitPrice * order.quantity;
    });
    const data = xAxisCategories.map((date) => {
      return revenueByDayMap[date] || 0;
    });

    return { name: category, data };
  });
};

export const sortOrdersByCategories = (filteredOrders: Order[]) => {
  const sortedOrders = CATEGORIES.reduce((orders, category) => {
    orders[category] = [];
    return orders;
  }, {} as OrdersByCategory);

  filteredOrders.forEach((order) => {
    if (sortedOrders[order.category]) {
      sortedOrders[order.category].push(order);
    }
  });
  return sortedOrders;
};
