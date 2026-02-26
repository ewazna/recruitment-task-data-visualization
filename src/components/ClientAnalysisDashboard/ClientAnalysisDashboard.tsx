import ClientAnalysisDonutChart from "./ClientAnalysisDonutChart/ClientAnalysisDonutChart";
import { getCustomerTypeSeries, getDeviceTypeSeries } from "./utils";
import type { ClientAnalysisDashboardProps } from "./types";
import ColumnChart from "./ColumnChart/ColumnChart";
import { CUSTOMER_TYPE } from "../../const";

import "./ClientAnalysisDashboard.css";

const ClientAnalysisDashboard = ({ orders }: ClientAnalysisDashboardProps) => {
  const customerTypeSeries = getCustomerTypeSeries(orders);
  const newCustomerDeviceSeries = getDeviceTypeSeries(orders, CUSTOMER_TYPE[0]);
  const returningCustomerDeviceSeries = getDeviceTypeSeries(
    orders,
    CUSTOMER_TYPE[1],
  );

  return (
    <div className="card card-chart">
      <div className="card-chart-header">
        <h2 className="chart-title">Client Analysis</h2>
      </div>
      <div className="row-container">
        <div className="column-chart-container">
          <ColumnChart series={newCustomerDeviceSeries} customerType="new" />
        </div>
        <div className="donut-chart-container">
          <ClientAnalysisDonutChart series={customerTypeSeries} />
        </div>
        <div className="column-chart-container">
          <ColumnChart
            series={returningCustomerDeviceSeries}
            customerType="returning"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientAnalysisDashboard;
