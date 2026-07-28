"use client";

import Link from "next/link";

export default function Header({ title, subtitle, onActionClick, actionLabel = "+ Add Vehicle" }) {
  return (
    <header className="h-16 bg-white border-b border-[#e2e8f0] px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">
      <div>
        <h1 className="text-xl font-bold text-[#0b1c30] tracking-tight">{title}</h1>
        {subtitle && <p className="text-xs text-[#565e74]">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        {/* Global Search Input */}
        <div className="relative w-64 hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737686] text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search vehicles, drivers..."
            className="w-full pl-9 pr-4 py-1.5 bg-[#f8f9ff] border border-[#e2e8f0] rounded-lg text-xs text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] transition-all"
          />
        </div>

        {/* Notification Bell */}
        <Link
          href="/notifications"
          className="relative p-2 text-[#565e74] hover:text-[#0b1c30] hover:bg-[#eff4ff] rounded-lg transition-colors"
          title="Notifications"
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ef4444] rounded-full ring-2 ring-white"></span>
        </Link>

        {/* Action Button */}
        {onActionClick && (
          <button
            onClick={onActionClick}
            className="primary-btn-interaction flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white text-xs font-semibold rounded-lg shadow-md shadow-[#2563eb]/20 hover:bg-[#004ac6] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>{actionLabel}</span>
          </button>
        )}
      </div>
    </header>
  );
}
