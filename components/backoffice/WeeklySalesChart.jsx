"use client";
import React, { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

export default function WeeklySalesChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Line Chart",
      },
    },
  };
  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      },
    },
    {
      title: "Games",
      type: "games",
      data: {
        labels,
        datasets: [
          {
            label: "Games",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      },
    },
  ];
  const [chartToBeDisplayed, setChartToBeDisplayed] = useState(tabs[0].type);
  return (
    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
        Weekly Chart
      </p>
      <div className="p-4">
        {/* Tabs */}
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-4">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tabs, index) => {
              return (
                <li className="mr-2" key={index}>
                  <button
                    onClick={() => setChartToBeDisplayed(tabs.type)}
                    className={
                      chartToBeDisplayed == tabs.type
                        ? "inline-block p-2 rounded-t-lg border-b-2 border-transparent text-amber-600 border-amber-600 dark:text-amber-500 dark:border-amber-500  focus:outline-none"
                        : "inline-block p-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300  focus:outline-none"
                    }>
                    {tabs.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Content to be displayed */}
        {tabs.map((tab, index) => {
          if (chartToBeDisplayed === tab.type) {
            return <Line options={options} data={tab.data} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
