import type { CustomerType } from "../../../types";

export type DonutChartProps = {
  numberOfCustomers: number;
  series: CustomerTypeSeries[];
};

type CustomerTypeSeries = {
  name: CustomerType;
  y: number;
};
