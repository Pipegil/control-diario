import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      <div className="">
        {/* Navbar */}
        <Navbar />
        {/* Main */}
        <main className="h-full overflow-y-auto">
          {children}
        </main>
      </div>
      {/* Main Body */}
    </div>
  );
}
