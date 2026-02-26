import { useEffect, useMemo, useState } from "react";
import { Dayjs } from "dayjs";
import DateRangePicker from "./components/DateRangePicker/DateRangePicker";
import CategoryTrendsChart from "./components/CategoryTrendsChart/CategoryTrendsChart";
import SummaryCard from "./components/SummaryCard/SummaryCard";
import CustomerAnalysisDashboard from "./components/CustomerAnalysisDashboard/CustomerAnalysisDashboard";
import {
  calculateGrossRevenue,
  findEarliestDate,
  findLatestDate,
  getCategoriesForXAxis,
  getFilteredOrdersByDateRange,
} from "./utils";
import { fetchOrdersWithMetadata } from "./api";
import type { Currency, Order } from "./types";
import { isDayjs } from "./typeGuards";

import "./App.css";

function App() {
  const [fetchedOrders, setFetchedOrders] = useState<Order[] | null>(null);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [currency, setCurrency] = useState<Currency | null>(null);

  useEffect(() => {
    const loadOrders = async () => {
      const fetchedData = await fetchOrdersWithMetadata();

      if (!fetchedData) return;

      const { orders, meta } = fetchedData;
      setFetchedOrders(orders);
      setCurrency(meta.currency);

      if (orders && orders.length > 0) {
        setStartDate(findEarliestDate(orders));
        setEndDate(findLatestDate(orders));
      }
    };

    loadOrders();
  }, []);

  const handleChangeStartDate = (newDate: Dayjs | null) =>
    setStartDate(newDate);
  const handleChangeEndDate = (newDate: Dayjs | null) => setEndDate(newDate);

  const filteredOrders = useMemo(() => {
    if (isDayjs(startDate) && isDayjs(endDate) && fetchedOrders) {
      return getFilteredOrdersByDateRange(startDate, endDate, fetchedOrders);
    }
    return [];
  }, [startDate, endDate, fetchedOrders]);

  const xAxisCategories = useMemo(() => {
    if (isDayjs(startDate) && isDayjs(endDate)) {
      return getCategoriesForXAxis(startDate, endDate);
    }
    return [];
  }, [startDate, endDate]);

  const minDateRange = useMemo(() => {
    if (fetchedOrders && fetchedOrders.length > 0) {
      return findEarliestDate(fetchedOrders);
    }
    return null;
  }, [fetchedOrders]);

  const maxDateRange = useMemo(() => {
    if (fetchedOrders && fetchedOrders.length > 0) {
      return findLatestDate(fetchedOrders);
    }
    return null;
  }, [fetchedOrders]);

  const grossRevenue = `${calculateGrossRevenue(filteredOrders)} ${currency}`;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <DateRangePicker
          minDate={minDateRange}
          maxDate={maxDateRange}
          startDate={startDate}
          endDate={endDate}
          handleChangeStartDate={handleChangeStartDate}
          handleChangeEndDate={handleChangeEndDate}
        />
      </div>
      <div className="row-container">
        <CategoryTrendsChart
          xAxisCategories={xAxisCategories}
          currency={currency || "EUR"}
          filteredOrders={filteredOrders}
        />
        <div className="column-container">
          <SummaryCard
            title="Number of orders:"
            visibleData={filteredOrders.length}
            startDate={startDate}
            endDate={endDate}
          />
          <SummaryCard
            title="Gross revenue:"
            visibleData={grossRevenue}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>
      <div className="row-container">
        <CustomerAnalysisDashboard orders={filteredOrders} />
      </div>
    </div>
  );
}

export default App;
