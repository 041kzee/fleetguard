"use client";

import { Search, Filter, Download } from "lucide-react";

export default function VehicleFilters() {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6">

      <div className="flex items-center justify-between gap-6">

        {/* Search */}

        <div className="relative flex-1">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by vehicle number, model, or driver..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Filters */}

        <div className="flex gap-3">

          <select className="px-4 py-3 border border-gray-300 rounded-xl">
            <option>All Status</option>
            <option>Compliant</option>
            <option>Non-Compliant</option>
          </select>

          <select className="px-4 py-3 border border-gray-300 rounded-xl">
            <option>All Types</option>
            <option>Truck</option>
            <option>Van</option>
            <option>Car</option>
          </select>

          <button className="px-5 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 flex items-center gap-2">
            <Filter size={18} />
            Filter
          </button>

          <button className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center gap-2">
            <Download size={18} />
            Export
          </button>

        </div>

      </div>

    </div>
  );
}