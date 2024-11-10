import React from "react";
import TodayGameCard from "./TodayGameCard";

export default function TodayGamesCards() {
  const TodayGameData = [
    {
      title: "Today Games",
      totalSales: 110000,
      totalCash: 100000,
      totalTicket: 10000,
    },
  ];
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center h-full">
      <div className="p-4 border border-gray-200 justify-between dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-emerald-100 bg-teal-600">
        <div className="text-center xl:mb-0 mb-3">
          {TodayGameData.map((item, index) => (
            <TodayGameCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
