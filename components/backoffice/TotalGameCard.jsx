import { Gamepad2 } from "lucide-react";
import React from "react";

export default function TotalGameCard({ data }) {
  return (
    <>
      <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500">
        <Gamepad2 />
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
