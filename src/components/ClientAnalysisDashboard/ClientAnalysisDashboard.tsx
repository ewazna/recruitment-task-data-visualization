import ClientAnalysisDonutChart from "./ClientAnalysisDonutChart/ClientAnalysisDonutChart";
import { getSeriesForClientType } from "./utils";
import type { ClientAnalysisDashboardProps } from "./types";

const ClientAnalysisDashboard = ({ orders }: ClientAnalysisDashboardProps) => {
  const clientTypeSeries = getSeriesForClientType(orders);
  return (
    <div>
      <ClientAnalysisDonutChart clientTypeSeries={clientTypeSeries} />
    </div>
  );
};

export default ClientAnalysisDashboard;
