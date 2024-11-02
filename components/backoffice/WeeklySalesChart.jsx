"use client";
import React, { useState } from "react";

export default function WeeklySalesChart() {
  const tabs = [
    {
      title: "Sales",
      type: "sales",
    },
    {
      title: "Orders",
      type: "orders",
    },
  ];
  const [chartToBeDisplayed, setChartToBeDisplayed] = useState("sales");
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Weekly Sales</h2>
      <div className="p-4">
        {/* Tabs */}
        <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-100 dark:hover:text-gray-100">
                Sales
              </button>
            </li>
            <li className="me-2">
              <button
                className="inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                aria-current="page">
                Orders
              </button>
            </li>
          </ul>
        </div>
        {/* Content to be displayed */}
      </div>
    </div>
  );
}
