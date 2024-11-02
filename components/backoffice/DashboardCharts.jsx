import React from "react";
import WeeklySalesChart from "./WeeklySalesChart";
import BestSellingGamesChart from "./BestSellingGamesChart";

export default function DashboardCharts() {
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <WeeklySalesChart />
    <BestSellingGamesChart />
  </div>;
}
