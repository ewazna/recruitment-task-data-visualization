import { CLIENT_TYPE } from "../../const";
import type { Order } from "../../types";

export const getSeriesForClientType = (orders: Order[]) => {
  const numberOfClients = orders.length;

  return CLIENT_TYPE.map((type) => {
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
