import { Gamepad2 } from "lucide-react";
import React from "react";

export default function YesterdayGameCard({ data }) {
  return (
    <>
      <div className="text-center inline-block text-3xl text-white ">
        <Gamepad2 />
      </div>
      <div>
        <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
          {data.title}
        </p>
        <p className="text-2xl font-bold leading-none text-gray-50 dark:text-gray-50">
          ${data.totalSales}
        </p>
      </div>
      <div className="flex text-center text-sm font-normal text-gray-50 dark:text-gray-100">
        <div className="px-1 mt-3">Cash : ${data.totalCash}</div>
        <div className="px-1 mt-3">Ticket : ${data.totalTicket}</div>
      </div>
    </>
  );
}
