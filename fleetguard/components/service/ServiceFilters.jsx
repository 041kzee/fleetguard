"use client";

import { Search } from "lucide-react";

export default function ServiceFilters() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 mb-8">
      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by vehicle, registration number or service type..."
            className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Vehicle Filter */}

        <select className="border border-gray-300 rounded-xl px-5 py-3">
          <option>All Vehicles</option>
        </select>

        {/* Status Filter */}

        <select className="border border-gray-300 rounded-xl px-5 py-3">
          <option>Status: All</option>
        </select>

        {/* Sort */}

        <select className="border border-gray-300 rounded-xl px-5 py-3">
          <option>Sort By: Date</option>
        </select>

      </div>
    </div>
  );
}