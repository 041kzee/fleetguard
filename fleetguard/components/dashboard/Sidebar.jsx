"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Truck,
  ShieldCheck,
  UserCheck,
  Wrench,
  Bell,
  Settings,
  PlusCircle,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Vehicles",
    href: "/vehicles",
    icon: Truck,
  },
  {
    name: "Compliance",
    href: "/compliance",
    icon: ShieldCheck,
  },
  {
    name: "Driver Assignments",
    href: "/assignments",
    icon: UserCheck,
  },
  {
    name: "Service Records",
    href: "/service-records",
    icon: Wrench,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="px-6 py-7 border-b">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            FG
          </div>

          <div>
            <h2 className="font-bold text-lg text-gray-900">
              FleetGuard
            </h2>

            <p className="text-sm text-gray-500">
              Enterprise Fleet
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6">

        <div className="space-y-2">

          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                  index === 0
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>
              </Link>
            );
          })}

        </div>

      </nav>

      {/* Bottom Button */}
      <div className="p-5 border-t">

        <button className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 text-white font-semibold flex items-center justify-center gap-2">

          <PlusCircle size={18} />

          New Vehicle

        </button>

      </div>

    </aside>
  );
}