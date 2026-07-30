"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({
  title,
  subtitle,
  activeTab = "Assignments",
  onActionClick,
  actionLabel = "New Assignment",
}) {
  const pathname = usePathname();

  const topNavs = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Fleet", href: "/vehicles" },
    { name: "Drivers", href: "/users" },
    { name: "Assignments", href: "/history" },
    { name: "Reports", href: "/compliance" },
  ];

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-[#e2e8f0] shadow-sm">
      <div className="h-16 px-6 flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-8">

          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#004ac6] text-white flex items-center justify-center">
              <span className="material-symbols-outlined">
                local_shipping
              </span>
            </div>

            <span className="font-bold text-lg text-[#0b1c30]">
              FleetGuard
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {topNavs.map((nav) => {
              const active =
                pathname.startsWith(nav.href) ||
                activeTab === nav.name;

              return (
                <Link
                  key={nav.name}
                  href={nav.href}
                  className={`px-4 py-2 rounded-lg text-sm transition ${
                    active
                      ? "text-[#004ac6] border-b-2 border-[#004ac6] font-semibold"
                      : "text-[#565e74] hover:text-[#0b1c30]"
                  }`}
                >
                  {nav.name}
                </Link>
              );
            })}
          </nav>
        </div>
                {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Notifications */}
          <Link
            href="/notifications"
            className="relative p-2 rounded-full hover:bg-[#eff4ff] transition"
          >
            <span className="material-symbols-outlined text-[#565e74]">
              notifications
            </span>

            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>
          </Link>

          {/* Settings */}
          <Link
            href="/settings"
            className="p-2 rounded-full hover:bg-[#eff4ff] transition"
          >
            <span className="material-symbols-outlined text-[#565e74]">
              settings
            </span>
          </Link>

          {/* Profile */}
          <div className="flex items-center gap-3 border-l border-[#e2e8f0] pl-4">
            <div className="w-9 h-9 rounded-full bg-[#004ac6] flex items-center justify-center text-white">
              <span className="material-symbols-outlined">
                account_circle
              </span>
            </div>

            <div className="hidden md:block">
              <p className="text-sm font-semibold text-[#0b1c30]">
                Fleet Manager
              </p>
              <p className="text-xs text-[#565e74]">
                Online
              </p>
            </div>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onActionClick}
            className="px-5 py-2.5 bg-[#004ac6] hover:bg-[#003ea8] text-white rounded-xl font-semibold text-sm shadow-md transition flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">
              add
            </span>

            {actionLabel}
          </button>

        </div>
      </div>
            {/* Page Header */}
      {(title || subtitle) && (
        <div className="border-t border-[#eef2f7] bg-[#f8f9ff] px-6 py-5">
          <div className="max-w-7xl">
            {title && (
              <h1 className="text-2xl font-bold tracking-tight text-[#0b1c30]">
                {title}
              </h1>
            )}

            {subtitle && (
              <p className="mt-1 text-sm text-[#565e74]">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </header>
  );
}