import React from "react";
import PointProcessingCard from "./PointProcessingCard";

export default function PointsProcessingCards() {
  const pointProcessingData = [
    {
      title: "Points Processing",
      number: 46,
    },
  ];
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
      <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
        {pointProcessingData.map((item, index) => (
          <PointProcessingCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
