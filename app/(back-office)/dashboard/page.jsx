import AllTimeSalesCards from "@/components/backoffice/AllTimeSalesCards";
import RecentGamesTable from "@/components/backoffice/RecentGamesTable";
import Heading from "@/components/backoffice/Heading";
import React from "react";
import YesterdayGamesCards from "@/components/backoffice/YesterdayGamesCards";
import TodayGamesCards from "@/components/backoffice/TodayGamesCards";
import ThisMonthSaleCard from "@/components/backoffice/ThisMonthSaleCard";
import ThisMonthSalesCards from "@/components/backoffice/ThisMonthSalesCards";
import LastMonthSalesCards from "@/components/backoffice/LastMonthSalesCards";
import TotalGamesCards from "@/components/backoffice/TotalGamesCards";
import PointsPendingCards from "@/components/backoffice/PointsPendingCards";
import PointsProcessingCards from "@/components/backoffice/PointsProcessingCards";
import PointsAssignedCards from "@/components/backoffice/PointsAssignedCards";
import WeeklySalesChart from "@/components/backoffice/WeeklySalesChart";
import BestSellingGames from "@/components/backoffice/BestSellingGamesChart";

export default function page() {
  return (
    <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
      <Heading title="Dashboard Overview" />
      {/* Cards & Charts */}
      <div className="tab tab-enter">
        {/* Large Cards */}
        <div className="grid gap-2 mb-8 xl:grid-cols-5 md:grid-cols-2">
          <YesterdayGamesCards />
          <TodayGamesCards />
          <ThisMonthSalesCards />
          <LastMonthSalesCards />
          <AllTimeSalesCards />
        </div>
        {/* Small Cards */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <TotalGamesCards />
          <PointsPendingCards />
          <PointsProcessingCards />
          <PointsAssignedCards />
        </div>
        {/* Left & Right Chart */}
        <div className="grid gap-4 md:grid-cols-2 my-8">
          <WeeklySalesChart />
          <BestSellingGames />
        </div>
      </div>
      {/* Table */}
      <RecentGamesTable />
    </div>
  );
}
