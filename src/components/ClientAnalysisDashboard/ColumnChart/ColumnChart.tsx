import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";
import { chartColors, highchartsTheme } from "../../../theme/highchartsTheme";
import type { ColumnChartProps } from "./types";

const ColumnChart = ({ series, customerType }: ColumnChartProps) => {
  const title = `Device types by ${customerType} customers`;
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
      type: "column",
    },
    title: {
      ...highchartsTheme.title,
      text: title,
      verticalAlign: "bottom",
      align: "center",
      style: {
        ...highchartsTheme.title.style,
        fontSize: "14px",
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
        data: series.map((client, idx) => ({
          name: client.name,
          y: client.y,
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
