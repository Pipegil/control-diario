import React from 'react'
import PointPendingCard from './PointPendingCard';

export default function PointsPendingCards() {
  const pointPendingData = [
    {
      title: "Pending Points",
      number: 380,
      totalPending: 3800,
    },
  ];
  return (
    <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex h-full">
      <div className="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
        {pointPendingData.map((item, index) => (
          <PointPendingCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
