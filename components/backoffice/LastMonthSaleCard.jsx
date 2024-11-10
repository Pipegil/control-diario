import { BadgeDollarSign } from "lucide-react";
import React from "react";

export default function LastMonthSaleCard({ data }) {
  return (
    <>
      <div className="text-center inline-block text-3xl text-white dark:text-teal-100 bg-cyan-600">
        <BadgeDollarSign />
      </div>
      <div>
        <p className="mb-3 text-base font-medium text-gray-50 dark:text-gray-100">
          {data.title}
        </p>
        <p className="text-2xl font-bold leading-none text-gray-50 dark:text-gray-50">
          ${data.totalSales}
        </p>
      </div>
    </>
  );
}
