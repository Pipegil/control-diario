import React from "react";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Total Orders",
      number: 500,
      iconBackgroundColor: "bg-green-600",
      icon: ShoppingCart,
    },
    {
      title: "Orders Pending",
      number: 100,
      iconBackgroundColor: "bg-blue-600",
      icon: Loader2,
    },
    {
      title: "Orders Processing",
      number: 200,
      iconBackgroundColor: "bg-orange-600",
      icon: RefreshCcw,
    },
    {
      title: "Orders Completed",
      number: 300,
      iconBackgroundColor: "bg-purple-600",
      icon: CheckCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((data, index) => (
         <SmallCard data={data} />
      ))}
    </div>
  );
}
