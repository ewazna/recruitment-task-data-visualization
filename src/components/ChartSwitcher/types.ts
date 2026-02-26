export type YAxisData = "orders" | "revenue";

export type ChartSwitcherProps = {
  selectedData: YAxisData;
  handleChartDataChange: (newValue: YAxisData) => void;
};
