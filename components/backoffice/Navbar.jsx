import { AlignJustify, Bell, Sun, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="z-30 py-4 bg-white shadow-sm dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-emerald-500 dark:text-emerald-500">
        <button
          type="button"
          className="hidden lg:block outline-0 focus:outline-none"></button>
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none"
          aria-label="Menu">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <span></span>
        <ul className="flex justify-end items-center flex-shrink-0 space-x-6">
          <li className="flex">
            <button
              className="rounded-md focus:outline-none"
              aria-label="Toggle color mode">
              <Sun />
            </button>
          </li>
          <li className="relative inline-block text-left">
            <button className="relative align-middle rounded-md focus:outline-none">
              <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                4
              </span>
              <Bell />
            </button>
          </li>
          <li className="flex">
            <button
              className="rounded-md focus:outline-none"
              aria-label="Toggle color mode">
              <User />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
