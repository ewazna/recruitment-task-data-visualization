import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";
import { chartColors, highchartsTheme } from "../../../theme/highchartsTheme";
import type { DonutChartProps } from "./types";
import { labelFormatter, tooltipFormatter } from "./formatter";

const DonutChart = ({ series }: DonutChartProps) => {
  const themeStyles = [
    {
      main: chartColors.purple,
      gradientStart: chartColors.purpleTransparent,
      gradientEnd: chartColors.purpleFaint,
      marker: chartColors.purpleLight,
    },
    {
      main: chartColors.green,
      gradientStart: chartColors.greenTransparent,
      gradientEnd: chartColors.greenFaint,
      marker: chartColors.greenLight,
    },
    {
      main: chartColors.orange,
      gradientStart: chartColors.orangeTransparent,
      gradientEnd: chartColors.orangeFaint,
      marker: chartColors.orangeLight,
    },
  ];

  const options: Highcharts.Options = {
    ...highchartsTheme,
    chart: {
      ...highchartsTheme.chart,
      type: "pie",
    },
    title: {
      ...highchartsTheme.title,
      text: "Types of customers",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    tooltip: {
      ...highchartsTheme.tooltip,
      shared: false,
      formatter: tooltipFormatter,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          useHTML: true,
          connectorColor: chartColors.grey,
          style: {
            color: chartColors.offWhite,
            textOutline: "none",
            fontWeight: "400",
          },
          formatter: labelFormatter,
        },
      },
    },
    series: [
      {
        name: "Customer type",
        innerSize: "75%",
        data: series.map((customer, idx) => ({
          name: customer.name,
          y: customer.y,
          borderColor: themeStyles[idx].marker,
          borderWidth: 2,
          shadow: {
            color: "rgba(0,0,0,0.2)",
            width: 10,
            offsetX: 0,
            offsetY: 4,
          },
          color: {
            radialGradient: {
              cx: 0.5,
              cy: 0.5,
              r: 0.5,
            },
            stops: [
              [0.6, themeStyles[idx].gradientStart],
              [1, themeStyles[idx].gradientEnd],
            ],
          },
        })),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DonutChart;
