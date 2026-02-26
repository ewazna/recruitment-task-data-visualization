import { tooltipFormatter } from "./formatter";

export const chartColors = {
  green: "#24d68e",
  purple: "#a855f7",
  orange: "#f59e0b",
  greenLight: "#65e2b0",
  purpleLight: "#c288f9",
  orangeLight: "#f8bb54",
  greenTransparent: "#23B17B",
  purpleTransparent: "#8D4CB7",
  orangeTransparent: "#CB8511",
  greenFaint: "#1F2829",
  purpleFaint: "#25222E",
  orangeFaint: "#292523",
  offWhite: "#ececec",
  grey: "rgba(255, 255, 255, 0.05)",
  greyLight: "rgba(39, 42, 51, 0.85)",
};

export const themeStyles = [
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

export const highchartsTheme = {
  chart: {
    backgroundColor: "transparent",
    marginRight: 30,
    style: {
      fontFamily: "Inter, system-ui, sans-serif",
    },
  },
  title: {
    style: {
      color: chartColors.offWhite,
      fontWeight: "500",
      fontSize: "20px",
    },
  },
  xAxis: {
    gridLineWidth: 1,
    gridLineColor: chartColors.grey,
    lineColor: chartColors.grey,
    labels: {
      style: {
        color: chartColors.offWhite,
        fontSize: "12px",
        textOutline: "none",
      },
    },
  },
  yAxis: {
    gridLineColor: chartColors.grey,
    title: {
      style: {
        color: chartColors.offWhite,
        fontSize: "14px",
        fontWeight: "400",
        paddingBottom: "12px",
      },
    },
    labels: {
      style: {
        color: chartColors.offWhite,
        fontSize: "12px",
        textOutline: "none",
      },
    },
  },
  tooltip: {
    shared: true,
    useHTML: true,
    backgroundColor: chartColors.greyLight,
    borderColor: chartColors.grey,
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    shadow: true,
    style: {
      color: chartColors.offWhite,
      fontSize: "14px",
    },
    formatter: tooltipFormatter,
  },
  legend: {
    itemStyle: {
      color: chartColors.offWhite,
      fontWeight: "400",
    },
    itemHoverStyle: {
      color: chartColors.offWhite,
      fontWeight: "700",
    },
  },
};
