"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VehiclePagination() {
  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-3xl p-6">

      <p className="text-gray-500 text-sm">
        Showing <span className="font-semibold">1–4</span> of{" "}
        <span className="font-semibold">58</span> vehicles
      </p>

      <div className="flex items-center gap-2">

        <button className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-100">
          <ChevronLeft size={18} />
        </button>

        <button className="w-10 h-10 rounded-xl bg-blue-600 text-white">
          1
        </button>

        <button className="w-10 h-10 rounded-xl border border-gray-300 hover:bg-gray-100">
          2
        </button>

        <button className="w-10 h-10 rounded-xl border border-gray-300 hover:bg-gray-100">
          3
        </button>

        <button className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-100">
          <ChevronRight size={18} />
        </button>

      </div>

    </div>
  );
}