import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { Series } from "../../types";

type OrdersByCategoryChartProps = {
  series: Series[];
  xAxisCategories: string[];
};

const OrdersByCategoryChart = ({
  series,
  xAxisCategories,
}: OrdersByCategoryChartProps) => {
  const options = {
    plotOptions: {
      area: {
        stacking: "normal",
      },
    },
    chart: { type: "area" },
    title: { text: "Orders by Category Within Selected Date Range" },
    yAxis: { title: { text: "Number of orders" } },
    xAxis: { categories: xAxisCategories },
    series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default OrdersByCategoryChart;
