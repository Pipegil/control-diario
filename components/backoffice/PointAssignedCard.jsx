import { ListChecks } from "lucide-react";
import React from "react";

export default function PointAssignedCard({ data }) {
  return (
    <>
      <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-emerald-600 dark:text-emerald-100 bg-emerald-100 dark:bg-emerald-500">
        <ListChecks />
      </div>
      <div>
        <h6 className="text-sm mb-1 font-medium text-gray-600 dark:text-gray-400">
          <span>{data.title}</span>{" "}
        </h6>
        <p className="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">
          {data.number}
        </p>
      </div>
    </>
  );
}
