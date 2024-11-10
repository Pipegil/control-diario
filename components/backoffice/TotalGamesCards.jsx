import React from "react";
import TotalGameCard from "./TotalGameCard";

export default function TotalGamesCards() {
  const totalGameData = [
    {
      title: "Total Games",
      number: 380,
    },
  ];
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
      <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
        {totalGameData.map((item, index) => (
          <TotalGameCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
