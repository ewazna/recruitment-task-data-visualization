import { useEffect, useMemo, useState } from "react";
import { Dayjs } from "dayjs";
import DateRangePicker from "./components/DateRangePicker/DateRangePicker";
import OrdersByCategoryChart from "./components/OrdersByCategoryChart/OrdersByCategoryChart";
import {
  findEarliestDate,
  findLatestDate,
  getCategoriesForXAxis,
  getFilteredOrdersByDateRange,
  getSeriesForOrdersByCategoryChart,
} from "./utils";
import { fetchOrders } from "./api";
import type { Order } from "./types";
import { isDayjs } from "./typeGuards";

import "./App.css";

function App() {
  const [fetchedOrders, setFetchedOrders] = useState<Order[] | null>(null);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    const loadOrders = async () => {
      const orders = await fetchOrders();
      setFetchedOrders(orders);

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

  const ordersByCategoryChartSeries = useMemo(() => {
    if (xAxisCategories && filteredOrders) {
      return getSeriesForOrdersByCategoryChart(xAxisCategories, filteredOrders);
    }
    return [];
  }, [xAxisCategories, filteredOrders]);

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
      <div className="container">
        <OrdersByCategoryChart
          xAxisCategories={xAxisCategories}
          series={ordersByCategoryChartSeries}
        />
      </div>
    </div>
  );
}

export default App;
