import React from 'react'
import PointAssignedCard from './PointAssignedCard';

export default function PointsAssignedCards() {
  const pointAssignedData = [
    {
      title: "Assigned Points",
      number: 195,
    },
  ];
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
      <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
        {pointAssignedData.map((item, index) => (
          <PointAssignedCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
