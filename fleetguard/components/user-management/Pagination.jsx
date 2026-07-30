"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ totalCount }) {
  // Mocking standard total count showing from screenshot: 1-10 of 1,248 users
  const startRange = 1;
  const endRange = 10;
  const grandTotal = 1248;

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left text */}
      <span className="text-xs font-semibold text-[#64748b]">
        Showing {startRange}-{endRange} of {grandTotal} users
      </span>

      {/* Right controls */}
      <div className="flex items-center gap-1.5">
        {/* Prev Arrow */}
        <button className="w-8 h-8 rounded-lg border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:bg-[#f8fafc] active:scale-95 transition-all">
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Page 1 (Active) */}
        <button className="w-8 h-8 rounded-lg bg-[#004ac6] text-white flex items-center justify-center text-xs font-bold shadow-xs">
          1
        </button>

        {/* Page 2 */}
        <button className="w-8 h-8 rounded-lg hover:bg-[#f1f5f9] flex items-center justify-center text-xs font-bold text-[#475569] transition-all">
          2
        </button>

        {/* Page 3 */}
        <button className="w-8 h-8 rounded-lg hover:bg-[#f1f5f9] flex items-center justify-center text-xs font-bold text-[#475569] transition-all">
          3
        </button>

        {/* Ellipsis */}
        <span className="w-8 h-8 flex items-center justify-center text-xs font-semibold text-[#94a3b8]">
          ...
        </span>

        {/* Page 125 */}
        <button className="w-8 h-8 rounded-lg hover:bg-[#f1f5f9] flex items-center justify-center text-xs font-bold text-[#475569] transition-all">
          125
        </button>

        {/* Next Arrow */}
        <button className="w-8 h-8 rounded-lg border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:bg-[#f8fafc] active:scale-95 transition-all">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
