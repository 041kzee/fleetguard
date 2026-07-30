"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Truck,
  ShieldCheck,
  Wrench,
  Bell,
  Settings,
  Plus,
  Search,
  HelpCircle,
  Menu,
  X
} from "lucide-react";

export default function UserManagementLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "User Management", href: "/user-management", icon: Users },
    { name: "Vehicles", href: "/vehicles", icon: Truck },
    { name: "Compliance", href: "/compliance", icon: ShieldCheck },
    { name: "Service Records", href: "/service-records", icon: Wrench },
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-[#0f172a] font-sans antialiased overflow-hidden">
      
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-[#e2e8f0] h-full shrink-0">
        {/* Brand/Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-[#f1f5f9]">
          <div className="w-10 h-10 rounded-xl bg-[#004ac6] flex items-center justify-center text-white shadow-md shadow-[#004ac6]/10 shrink-0">
            <ShieldCheck className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <h2 className="font-bold text-[#0b1c30] text-base leading-tight tracking-tight">FleetGuard</h2>
            <p className="text-xs text-[#64748b] font-medium mt-0.5">Enterprise Fleet</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href === "/user-management"; // Force active on user-management for this design
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium ${
                  isActive
                    ? "bg-[#eff6ff] text-[#004ac6]"
                    : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#0f172a]"
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? "text-[#004ac6]" : "text-[#94a3b8] group-hover:text-[#475569]"
                  }`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Button */}
        <div className="p-4 border-t border-[#f1f5f9]">
          <button className="w-full flex items-center justify-center gap-2 bg-[#004ac6] hover:bg-[#003cb0] active:scale-[0.98] transition-all text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-lg shadow-[#004ac6]/10">
            <Plus className="w-4 h-4" />
            <span>New Vehicle</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-slate-900/40 backdrop-blur-sm">
          <div className="flex flex-col w-72 bg-white h-full shadow-2xl animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between px-6 py-6 border-b border-[#f1f5f9]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#004ac6] flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-bold text-[#0b1c30] text-base leading-tight">FleetGuard</h2>
                  <p className="text-xs text-[#64748b] font-medium">Enterprise Fleet</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.href === "/user-management";
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                      isActive
                        ? "bg-[#eff6ff] text-[#004ac6]"
                        : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#0f172a]"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-[#004ac6]" : "text-[#94a3b8]"}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-[#f1f5f9]">
              <button className="w-full flex items-center justify-center gap-2 bg-[#004ac6] text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-md">
                <Plus className="w-4 h-4" />
                <span>New Vehicle</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 lg:h-20 bg-white border-b border-[#e2e8f0] px-4 lg:px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#f1f5f9] text-[#64748b]"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            {/* Global Search Bar */}
            <div className="relative max-w-md w-full hidden md:block">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8] w-[18px] h-[18px]" />
              <input
                type="text"
                placeholder="Global search..."
                className="w-full bg-[#f8fafc] hover:bg-[#f1f5f9] focus:bg-white pl-10 pr-4 py-2.5 rounded-xl text-sm border border-[#e2e8f0] outline-none focus:ring-2 focus:ring-[#004ac6]/10 focus:border-[#004ac6] transition-all"
              />
            </div>
          </div>

          {/* User controls & notifications */}
          <div className="flex items-center gap-2 lg:gap-4 shrink-0">
            <button className="w-10 h-10 rounded-xl text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a] flex items-center justify-center transition-colors">
              <HelpCircle className="w-5 h-5 stroke-[1.75]" />
            </button>
            <button className="w-10 h-10 rounded-xl text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a] flex items-center justify-center transition-colors relative">
              <Bell className="w-5 h-5 stroke-[1.75]" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#ef4444] border-2 border-white"></span>
            </button>
            
            <div className="h-8 w-px bg-[#e2e8f0] mx-1"></div>

            {/* Profile Section */}
            <div className="flex items-center gap-3 pl-1">
              <div className="text-right hidden sm:block">
                <h3 className="text-sm font-bold text-[#0f172a] leading-tight">Sarah Jenkins</h3>
                <p className="text-[11px] text-[#64748b] font-semibold mt-0.5">System Admin</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
                alt="Sarah Jenkins Avatar"
                className="w-10 h-10 lg:w-11 lg:h-11 rounded-full object-cover border-2 border-[#e2e8f0] hover:border-[#004ac6] transition-colors cursor-pointer"
              />
            </div>
          </div>
        </header>

        {/* Page Content Workspace */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-[#f8fafc]">
          <div className="max-w-[1400px] mx-auto space-y-6 lg:space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
