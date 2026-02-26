import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { Series } from "../../types";
import { chartColors, highchartsTheme } from "../../theme/highchartsTheme";

type OrdersByCategoryChartProps = {
  series: Series[];
  xAxisCategories: string[];
};

const OrdersByCategoryChart = ({
  series,
  xAxisCategories,
}: OrdersByCategoryChartProps) => {
  const themeStyles = [
    {
      main: chartColors.purple,
      transparent: chartColors.purpleTransparent,
      marker: chartColors.purpleLight,
    },
    {
      main: chartColors.green,
      transparent: chartColors.greenTransparent,
      marker: chartColors.greenLight,
    },
    {
      main: chartColors.orange,
      transparent: chartColors.orangeTransparent,
      marker: chartColors.orangeLight,
    },
  ];

  const options: Highcharts.Options = {
    ...highchartsTheme,
    chart: {
      ...highchartsTheme.chart,
      type: "areaspline",
    },
    title: {
      ...highchartsTheme.title,
      text: "Orders by Category Within Selected Date Range",
    },
    xAxis: {
      ...highchartsTheme.xAxis,
      categories: xAxisCategories,
    },
    yAxis: {
      ...highchartsTheme.yAxis,
      title: { ...highchartsTheme.yAxis.title, text: "Number of orders" },
    },
    plotOptions: {
      areaspline: {
        stacking: "normal",
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
          [0, themeStyles[idx].transparent],
          [1, "transparent"],
        ],
      },
    })),
  };

  return (
    <div className="card">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default OrdersByCategoryChart;
