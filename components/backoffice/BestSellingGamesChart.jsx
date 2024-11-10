"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingGames() {
  const data = {
    labels: ["X-Z-Full", "Binguito-Letter", "Letter Accumulated", "3x1000"],
    datasets: [
      {
        label: "Number of votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgb(22, 163, 74)",
          "rgb(37, 99, 235)",
          "rgb(234, 88, 12)",
          "rgb(147, 51, 234)",
        ],
        borderColor: [
          "rgb(22, 101, 52)",
          "rgb(30, 64, 175)",
          "rgb(154, 52, 18)",
          "rgb(107, 33, 168)",
        ],
        borderWidth: 4,
      },
    ],
  };
  return (
    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
        Best Selling Games
      </p>
      {/* Chart */}
      <Pie data={data} />
    </div>
  );
}
