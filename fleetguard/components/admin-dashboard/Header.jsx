"use client";

import { Download, FileText, ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
      {/* Left */}
      <div>
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
          <span>FleetGuard</span>

          <ChevronRight className="w-3 h-3" />

          <span className="text-[#004ac6]">
            Dashboard
          </span>
        </nav>

        <h1 className="text-3xl font-extrabold text-slate-900">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500 max-w-2xl">
          Monitor your fleet operations, compliance, maintenance,
          drivers and overall business performance from one place.
        </p>
      </div>

      {/* Right Buttons */}
      <div className="flex gap-3">
        <button
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          <Download className="w-4 h-4" />
          Export Report
        </button>

        <button
          className="flex items-center gap-2 rounded-xl bg-[#004ac6] px-5 py-3 font-semibold text-white shadow-md transition hover:bg-[#003aa1]"
        >
          <FileText className="w-4 h-4" />
          Generate Report
        </button>
      </div>
    </div>
  );
}