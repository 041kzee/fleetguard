"use client";

import { Download, Wrench } from "lucide-react";

export default function ServiceHeader() {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <p className="text-sm text-gray-500">
          Dashboard &gt; Service Records
        </p>

        <h1 className="text-4xl font-bold mt-2">
          Service Records
        </h1>

        <p className="text-gray-500 mt-2">
          Track vehicle maintenance history, service schedules and costs.
        </p>
      </div>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-5 py-3 hover:bg-gray-50">
          <Download size={18} />
          Export Records
        </button>

        <button className="flex items-center gap-2 bg-blue-600 text-white rounded-xl px-5 py-3 hover:bg-blue-700">
          <Wrench size={18} />
          Log Service
        </button>
      </div>
    </div>
  );
}