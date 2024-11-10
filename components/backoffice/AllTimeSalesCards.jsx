import React from "react";
import AllTimeSaleCard from "./AllTimeSaleCard";

export default function AllTimeSalesCards() {
  const allTimeSaleData = [
    {
      title: "All Time Sales",
      totalSales: 5000000,
    },
  ];
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center text-center h-full">
      <div className="p-4 border border-gray-200 dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-emerald-100 bg-emerald-600">
        <div className="text-center xl:mb-0 mb-3">
          {allTimeSaleData.map((item, index) => (
            <AllTimeSaleCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
