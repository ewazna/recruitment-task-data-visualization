import type { CLIENT_TYPE } from "../../../const";

export type ClientAnalysisDonutChartProps = {
  clientTypeSeries: ClientTypeSeries[];
};

type ClientTypeSeries = {
  name: ClienType;
  y: number;
};

type ClienType = (typeof CLIENT_TYPE)[number];
