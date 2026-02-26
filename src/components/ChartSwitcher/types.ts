import type { MouseEvent } from "react";

export type YAxisData = "orders" | "revenue";

export type ChartSwitcherProps = {
  selectedData: YAxisData;
  handleChartDataChange: (
    e: MouseEvent<HTMLElement>,
    newValue: YAxisData,
  ) => void;
};
