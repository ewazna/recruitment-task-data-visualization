import dayjs, { isDayjs } from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);

import type { Dayjs } from "dayjs";
import type { Order } from "./types";

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

export const calculateGrossRevenue = (filteredOrders: Order[]) => {
  return filteredOrders.reduce(
    (total, currentOrder) =>
      total + currentOrder.quantity * currentOrder.unitPrice,
    0,
  );
};
