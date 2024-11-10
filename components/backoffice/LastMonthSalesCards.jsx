import React from "react";
import LastMonthSaleCard from "./LastMonthSaleCard";

export default function LastMonthSalesCards() {
  const lastMonthSaleData = [
    {
      title: "Last Month Sales",
      totalSales: 2500000,
    },
  ];
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
      <div className="p-4 border border-gray-200 dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-teal-100 bg-cyan-600">
        <div className="text-center xl:mb-0 mb-3">
          {lastMonthSaleData.map((item, index) => (
            <LastMonthSaleCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
