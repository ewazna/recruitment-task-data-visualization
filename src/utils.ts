import dayjs, { isDayjs } from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);

import type { Dayjs } from "dayjs";
import type { Order, OrdersByCategory, Series } from "./types";

export const findEarliestDate = (fetchedOrders: Order[]): Dayjs => {
  const orderwithEarliestDate = fetchedOrders.reduce(
    (prevOrder, currentOrder) => {
      return dayjs(prevOrder.timestamp).isBefore(dayjs(currentOrder.timestamp))
        ? prevOrder
        : currentOrder;
    },
    fetchedOrders[0],
  );

  return dayjs(orderwithEarliestDate.timestamp);
};

export const findLatestDate = (fetchedOrders: Order[]): Dayjs => {
  const orderwithLatestDate = fetchedOrders.reduce(
    (prevOrder, currentOrder) => {
      return dayjs(prevOrder.timestamp).isAfter(dayjs(currentOrder.timestamp))
        ? prevOrder
        : currentOrder;
    },
    fetchedOrders[0],
  );

  return dayjs(orderwithLatestDate.timestamp);
};

export const getFilteredOrdersByDateRange = (
  startDate: Dayjs | null,
  endDate: Dayjs | null,
  fetchedOrders: Order[] | null,
) => {
  if (isDayjs(startDate) && isDayjs(endDate) && fetchedOrders) {
    return fetchedOrders.filter(
      (order) =>
        dayjs(order.timestamp).isAfter(startDate) &&
        dayjs(order.timestamp).isBefore(endDate),
    );
  }
  return [];
};

export const sortOrdersByCategories = (filteredOrders: Order[]) => {
  const sortedOrders = {} as OrdersByCategory;

  filteredOrders.forEach((order) => {
    if (!Object.hasOwn(sortedOrders, order.category)) {
      sortedOrders[order.category] = [];
    }
    sortedOrders[order.category].push(order);
  });
  return sortedOrders;
};

export const getCategoriesForXAxis = (startDate: Dayjs, endDate: Dayjs) => {
  const xAxisCategories = [];

  for (
    let day = startDate.clone();
    day.isSameOrBefore(endDate, "day");
    day = day.add(1, "day")
  ) {
    xAxisCategories.push(day.format("DD/MM/YYYY"));
  }
  return xAxisCategories;
};

export const getSeriesForOrdersByCategoryChart = (
  xAxisCategories: string[],
  filteredOrders: Order[],
): Series[] => {
  const sortedOrders = sortOrdersByCategories(filteredOrders);

  const seriesData = Object.fromEntries(
    Object.keys(sortedOrders).map((key) => [
      key,
      Array(xAxisCategories.length).fill(0),
    ]),
  );
  xAxisCategories.forEach((date, idx) => {
    Object.entries(sortedOrders).forEach(([category, orders]) => {
      const ordersForSpecifiedDate = orders.filter((order) =>
        dayjs(order.timestamp).isSame(dayjs(date, "DD/MM/YYYY"), "day"),
      );
      const numberOfOrdersForSpecifiedDate = ordersForSpecifiedDate.length;

      seriesData[category][idx] = numberOfOrdersForSpecifiedDate;
    });
  });

  return Object.entries(seriesData).map(([name, data]) => ({
    name,
    data,
  }));
};
