"use client";

import { Search, ChevronDown } from "lucide-react";

export default function Filters({
  search,
  setSearch,
  role,
  setRole,
  status,
  setStatus,
  sortBy,
  setSortBy,
  onClearAll,
}) {
  const roles = [
    { label: "All Roles", value: "all" },
    { label: "Driver", value: "Driver" },
    { label: "Fleet Manager", value: "Fleet Manager" },
    { label: "Administrator", value: "Administrator" },
  ];

  const statuses = [
    { label: "Status: All", value: "all" },
    { label: "Active", value: "Active" },
    { label: "Suspended", value: "Suspended" },
    { label: "Inactive", value: "Inactive" },
  ];

  const sortOptions = [
    { label: "Sort: Recent", value: "recent" },
    { label: "Sort: Name (A-Z)", value: "name-asc" },
    { label: "Sort: Name (Z-A)", value: "name-desc" },
    { label: "Sort: Employee ID", value: "emp-id" },
  ];

  const hasActiveFilters = search || role !== "all" || status !== "all" || sortBy !== "recent";

  return (
    <div className="bg-white p-4 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col xl:flex-row gap-4 items-center justify-between">
      {/* Left: Search Bar */}
      <div className="relative w-full xl:max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8] w-[18px] h-[18px]" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email or ID..."
          className="w-full bg-[#f8fafc] hover:bg-[#f1f5f9] focus:bg-white pl-10 pr-4 py-2.5 rounded-xl text-sm border border-[#e2e8f0] outline-none focus:ring-2 focus:ring-[#004ac6]/10 focus:border-[#004ac6] transition-all"
        />
      </div>

      {/* Right: Dropdowns & Clear Button */}
      <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
        {/* Role Select */}
        <div className="relative flex-1 sm:flex-initial min-w-[130px]">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-[#f8fafc] hover:bg-[#f1f5f9] appearance-none pl-4 pr-10 py-2.5 rounded-xl text-sm font-semibold border border-[#e2e8f0] text-[#334155] outline-none focus:ring-2 focus:ring-[#004ac6]/10 focus:border-[#004ac6] transition-all cursor-pointer"
          >
            {roles.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748b] w-4 h-4 pointer-events-none" />
        </div>

        {/* Status Select */}
        <div className="relative flex-1 sm:flex-initial min-w-[130px]">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full bg-[#f8fafc] hover:bg-[#f1f5f9] appearance-none pl-4 pr-10 py-2.5 rounded-xl text-sm font-semibold border border-[#e2e8f0] text-[#334155] outline-none focus:ring-2 focus:ring-[#004ac6]/10 focus:border-[#004ac6] transition-all cursor-pointer"
          >
            {statuses.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748b] w-4 h-4 pointer-events-none" />
        </div>

        {/* Sort Select */}
        <div className="relative flex-1 sm:flex-initial min-w-[140px]">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-[#f8fafc] hover:bg-[#f1f5f9] appearance-none pl-4 pr-10 py-2.5 rounded-xl text-sm font-semibold border border-[#e2e8f0] text-[#334155] outline-none focus:ring-2 focus:ring-[#004ac6]/10 focus:border-[#004ac6] transition-all cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748b] w-4 h-4 pointer-events-none" />
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            onClick={onClearAll}
            className="text-sm font-bold text-[#004ac6] hover:text-[#003cb0] transition-colors py-2 px-3 rounded-lg hover:bg-[#eff6ff] shrink-0"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
}
