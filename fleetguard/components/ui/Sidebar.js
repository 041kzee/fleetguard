"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
    { name: "Vehicles", href: "/vehicles", icon: "directions_car" },
    { name: "Assignments", href: "/assignments", icon: "badge" },
    { name: "Service Records", href: "/service", icon: "build" },
    { name: "Compliance", href: "/compliance", icon: "verified" },
    { name: "User Management", href: "/users", icon: "group" },
    { name: "Notifications", href: "/notifications", icon: "notifications" },
    { name: "Settings", href: "/settings", icon: "settings" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-[#e2e8f0] flex flex-col justify-between h-screen sticky top-0 z-30 select-none">
      <div>
        {/* Brand Header */}
        <div className="h-16 flex items-center gap-3 px-6 border-b border-[#e2e8f0]">
          <div className="w-9 h-9 rounded-lg bg-[#004ac6] text-white flex items-center justify-center shadow-md shadow-[#004ac6]/20 font-bold text-lg">
            <span className="material-symbols-outlined text-[22px]">local_shipping</span>
          </div>
          <div>
            <h1 className="font-semibold text-base text-[#0b1c30] tracking-tight leading-none">
              FleetGuard
            </h1>
            <span className="text-[11px] font-medium text-[#565e74] uppercase tracking-wider">
              Enterprise Hub
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-[#e5eeff] text-[#004ac6] font-semibold border-l-4 border-[#004ac6] pl-2.5"
                    : "text-[#434655] hover:bg-[#eff4ff] hover:text-[#0b1c30]"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[20px] ${
                    isActive ? "text-[#004ac6]" : "text-[#565e74]"
                  }`}
                >
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile / Quick Info */}
      <div className="p-4 border-t border-[#e2e8f0] bg-[#f8fafc]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#dae2fd] text-[#004ac6] flex items-center justify-center font-semibold text-sm">
            FG
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#0b1c30] truncate">Fleet Administrator</p>
            <p className="text-[11px] text-[#565e74] truncate">admin@fleetguard.com</p>
          </div>
          <Link href="/" className="text-[#565e74] hover:text-[#ef4444] transition-colors p-1" title="Sign Out">
            <span className="material-symbols-outlined text-[18px]">logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
