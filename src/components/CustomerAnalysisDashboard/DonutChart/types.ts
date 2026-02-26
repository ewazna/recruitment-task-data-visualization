import type { CustomerType } from "../../../types";

export type DonutChartProps = {
  series: CustomerTypeSeries[];
};

type CustomerTypeSeries = {
  name: CustomerType;
  y: number;
};
