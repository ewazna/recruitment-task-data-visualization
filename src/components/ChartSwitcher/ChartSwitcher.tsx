import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import type { ChartSwitcherProps } from "./types";

const ChartSwitcher = ({
  selectedData,
  handleChartDataChange,
}: ChartSwitcherProps) => {
  return (
    <ToggleButtonGroup
      color="primary"
      size="small"
      value={selectedData}
      exclusive
      onChange={(e, value) => handleChartDataChange(value)}
      aria-label="chart data selector"
    >
      <ToggleButton value="orders">Number of orders</ToggleButton>
      <ToggleButton value="revenue">Gross revenue</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ChartSwitcher;
