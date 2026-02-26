import { CUSTOMER_TYPE, DEVICE_TYPE } from "../../const";
import type { CustomerType, Order } from "../../types";
import type { OrdersByCustomerType } from "./types";

export const getCustomerTypeSeries = (orders: Order[]) => {
  const numberOfClients = orders.length;

  return CUSTOMER_TYPE.map((type) => {
    const counter = orders.filter(
      (order) => order.customerType === type,
    ).length;
    const percentage = Math.round((counter / numberOfClients) * 100);

    return {
      name: type,
      y: percentage,
    };
  });
};

export const getDeviceTypeSeries = (
  orders: Order[],
  customerType: CustomerType,
) => {
  const sortedOrders = getSortedOrdersByCustomerType(orders);
  const numberOfClients = sortedOrders[customerType].length;

  return DEVICE_TYPE.map((type) => {
    const counter = sortedOrders[customerType].filter(
      (order) => order.device === type,
    ).length;
    const percentage = Math.round((counter / numberOfClients) * 100);

    return {
      name: type,
      y: percentage,
    };
  });
};

export const getSortedOrdersByCustomerType = (filteredOrders: Order[]) => {
  const sortedOrders = CUSTOMER_TYPE.reduce((orders, type) => {
    orders[type] = [];
    return orders;
  }, {} as OrdersByCustomerType);

  filteredOrders.forEach((order) => {
    if (sortedOrders[order.customerType]) {
      sortedOrders[order.customerType].push(order);
    }
  });
  return sortedOrders;
};
