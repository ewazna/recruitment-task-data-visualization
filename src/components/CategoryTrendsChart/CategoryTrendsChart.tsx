import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useMemo, useState } from "react";
import ChartSwitcher from "../ChartSwitcher/ChartSwitcher";
import { highchartsTheme, themeStyles } from "../../theme/highchartsTheme";
import { getSeriesForByCategoryChart } from "./utils";
import type { MouseEvent } from "react";
import type { YAxisData } from "../ChartSwitcher/types";
import type { CategoryTrendsChartProps } from "./types";

import "./CategoryTrendsChart.css";

const CategoryTrendsChart = ({
  xAxisCategories,
  currency,
  filteredOrders,
}: CategoryTrendsChartProps) => {
  const [selectedData, setSelectedData] = useState<YAxisData>("orders");

  const series = useMemo(() => {
    return getSeriesForByCategoryChart(
      selectedData,
      xAxisCategories,
      filteredOrders,
    );
  }, [xAxisCategories, filteredOrders, selectedData]);

  const title = selectedData[0].toUpperCase().concat(selectedData.slice(1));
  const visibleCurrency = selectedData === "revenue" ? currency : "";
  const YAxisLabel = {
    orders: "Number of orders",
    revenue: `Gross revenue in ${currency}`,
  };

  const handleChartDataChange = (
    e: MouseEvent<HTMLElement>,
    newValue: YAxisData,
  ) => {
    setSelectedData(newValue);
  };

  const options = {
    ...highchartsTheme,
    chart: {
      ...highchartsTheme.chart,
      type: "area",
      custom: {
        title,
        visibleCurrency,
      },
    },
    title: {
      ...highchartsTheme.title,
      text: undefined,
    },
    xAxis: {
      ...highchartsTheme.xAxis,
      categories: xAxisCategories,
      tickmarkPlacement: "on",
    },
    yAxis: {
      ...highchartsTheme.yAxis,
      title: { ...highchartsTheme.yAxis.title, text: YAxisLabel[selectedData] },
    },
    plotOptions: {
      area: {
        stacking: "normal",
        pointPlacement: "on",
      },
    },
    series: series.map((category, idx) => ({
      name: category.name,
      data: category.data,
      color: themeStyles[idx].main,
      marker: { fillColor: themeStyles[idx].marker },
      shadow: {
        color: themeStyles[idx].main,
        width: 8,
        opacity: 0.3,
        offsetX: 0,
        offsetY: 0,
      },
      fillColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, themeStyles[idx].gradientStart],
          [1, themeStyles[idx].gradientEnd],
        ],
      },
    })),
  };

  return (
    <div className="card card-chart">
      <div className="card-chart-header">
        <h2 className="chart-title">{title} by Category</h2>
        <div className="chart-switcher-container">
          <ChartSwitcher
            selectedData={selectedData}
            handleChartDataChange={handleChartDataChange}
          />
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CategoryTrendsChart;
