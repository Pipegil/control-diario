import React from "react";
import TodayGameCard from "./TodayGameCard";
import ThisMonthSaleCard from "./ThisMonthSaleCard";
export default function ThisMonthSalesCards() {
  const thisMonthSaleData = [
    {
      title: "This Month Sales",
      totalSales: 3000000,
    },
  ];
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
      <div className="p-4 border border-gray-200 dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-emerald-100 bg-blue-500">
        <div className="text-center xl:mb-0 mb-3">
          {thisMonthSaleData.map((item, index) => (
            <ThisMonthSaleCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
