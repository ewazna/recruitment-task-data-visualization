import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";
import {
  chartColors,
  highchartsTheme,
  themeStyles,
} from "../../../theme/highchartsTheme";
import type { ColumnChartProps } from "./types";

const ColumnChart = ({ series, customerType }: ColumnChartProps) => {
  const title = `${customerType[0].toUpperCase().concat(customerType.slice(1))} customers`;
  const options: Highcharts.Options = {
    ...highchartsTheme,
    chart: {
      ...highchartsTheme.chart,
      type: "column",
    },
    title: {
      ...highchartsTheme.title,
      text: title,
      align: "center",
      verticalAlign: "bottom",

      style: {
        ...highchartsTheme.title.style,
        fontSize: "16px",
      },
    },
    subtitle: {
      text: "Device distribution by customers",
      align: "center",
      verticalAlign: "bottom",
      y: -12,
      style: {
        color: chartColors.greyText,
        fontSize: "12px",
        fontWeight: "400",
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    xAxis: {
      type: "category",
      labels: {
        style: {
          color: chartColors.offWhite,
          fontSize: "12px",
          textOutline: "none",
        },
      },
    },
    yAxis: {
      visible: false,
      min: 0,
      max: 105,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          inside: false,
          format: "{y}%",
          style: {
            color: chartColors.offWhite,
            textOutline: "none",
            fontSize: "16px",
            fontWeight: "800",
          },
        },
      },
    },
    series: [
      {
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
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, themeStyles[idx].gradientStart],
              [1, themeStyles[idx].gradientEnd],
            ],
          },
        })),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ColumnChart;
