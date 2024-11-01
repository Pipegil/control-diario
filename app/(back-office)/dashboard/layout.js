import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="">Sidebar</div>
      <div className="">
        {/* Header */}
        <h2>Nav Bar</h2>
        <main>{children}</main>
        {/* Main */}
      </div>
      {/* Main Body */}
    </div>
  );
}
