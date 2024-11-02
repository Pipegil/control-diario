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
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Best Selling Games</h2>
      {/* Chart */}
      <div className="p-4">
        <Pie data={data} />
      </div>
    </div>
  );
}
