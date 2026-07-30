"use client";

import { Download, UserPlus, ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Left: Breadcrumbs, Title, Subtitle */}
      <div>
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#64748b] mb-2 tracking-wide uppercase">
          <span>Dashboard</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#94a3b8]" />
          <span className="text-[#004ac6]">User Management</span>
        </nav>
        
        <h1 className="text-2xl lg:text-3xl font-extrabold text-[#0b1c30] tracking-tight">
          User Management
        </h1>
        
        <p className="text-sm text-[#475569] mt-1.5 font-medium">
          Manage Fleet Managers, Drivers and Administrators across the enterprise.
        </p>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 shrink-0">
        <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#f8fafc] active:scale-[0.98] transition-all text-[#334155] border border-[#cbd5e1] font-semibold py-2.5 px-4 rounded-xl text-sm shadow-xs">
          <Download className="w-4 h-4 text-[#64748b]" />
          <span>Export Users</span>
        </button>
        
        <button className="flex items-center justify-center gap-2 bg-[#004ac6] hover:bg-[#003cb0] active:scale-[0.98] transition-all text-white font-semibold py-2.5 px-4 rounded-xl text-sm shadow-md shadow-[#004ac6]/10">
          <UserPlus className="w-4 h-4" />
          <span>Add User</span>
        </button>
      </div>
    </div>
  );
}
