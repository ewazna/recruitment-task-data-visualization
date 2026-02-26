import type { CustomerType, Device } from "../../../types";

export type ColumnChartProps = {
  series: DeviceSeries[];
  customerType: CustomerType;
};

type DeviceSeries = {
  name: Device;
  y: number;
};
