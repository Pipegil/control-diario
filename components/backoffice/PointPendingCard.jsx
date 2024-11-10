import { ListTodo } from "lucide-react";
import React from "react";

export default function PointPendingCard({ data }) {
  return (
    <>
      <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500">
        <ListTodo />
      </div>
      <div>
        <h6 className="text-sm mb-1 font-medium text-gray-600 dark:text-gray-400">
          <span>{data.title}</span>{" "}
          <span className="text-red-500 text-sm font-semibold">(${data.totalPending})</span>
        </h6>
        <p className="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">
          {data.number}
        </p>
      </div>
    </>
  );
}
