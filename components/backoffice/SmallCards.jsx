import React from "react";
import SmallCard from "./SmallCard";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Total Orders",
      sales: 110000,
      color: "bg-green-600",
    },
    {
      title: "Orders Pending",
      sales: 100,
      color: "bg-blue-600",
    },
    {
      title: "Orders Processing",
      sales: 200,
      color: "bg-orange-600",
    },
    {
      title: "Orders Completed",
      sales: 300,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((item, index) => (
        <SmallCard />
      ))}
    </div>
  );
}
