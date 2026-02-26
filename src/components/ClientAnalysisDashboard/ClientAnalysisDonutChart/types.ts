import type { CustomerType } from "../../../types";

export type ClientAnalysisDonutChartProps = {
  series: ClientTypeSeries[];
};

type ClientTypeSeries = {
  name: CustomerType;
  y: number;
};
