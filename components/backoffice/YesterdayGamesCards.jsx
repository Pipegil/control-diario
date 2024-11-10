import React from "react";
import YesterdayGameCard from "./YesterdayGameCard";

export default function YesterdayGamesCards() {
  const YesterdayGameData = [
    {
      title: "Yesterday Games",
      totalSales: 130000,
      totalCash: 70000,
      totalTicket: 60000,
    },
  ];
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex justify-center h-full">
      <div className="p-4 border border-gray-200 justify-between dark:border-gray-800 w-full p-6 rounded-lg text-white dark:text-orange-100 bg-orange-400">
        <div className="text-center xl:mb-0 mb-3">
          {YesterdayGameData.map((item, index) => (
            <YesterdayGameCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
