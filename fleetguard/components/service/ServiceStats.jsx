"use client";

import {
  Wrench,
  CalendarDays,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

const stats = [
  {
    title: "TOTAL SERVICES",
    value: "1,284",
    icon: Wrench,
    badge: "+12%",
    badgeColor: "text-green-600 bg-green-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "DUE FOR SERVICE",
    value: "24",
    icon: CalendarDays,
    badge: "Next 7 days",
    badgeColor: "text-yellow-600 bg-yellow-100",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "TOTAL SERVICE COST",
    value: "$42,850.50",
    icon: DollarSign,
    badge: "-8%",
    badgeColor: "text-red-600 bg-red-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "OVERDUE SERVICES",
    value: "6",
    icon: AlertTriangle,
    badge: "CRITICAL",
    badgeColor: "text-red-600 bg-red-100",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
];

export default function ServiceStats() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white rounded-3xl border border-gray-200 p-6"
          >
            <div className="flex justify-between items-start">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg}`}
              >
                <Icon className={item.iconColor} size={24} />
              </div>

              <span
                className={`text-sm px-3 py-1 rounded-full ${item.badgeColor}`}
              >
                {item.badge}
              </span>
            </div>

            <p className="text-gray-500 text-sm uppercase mt-6">
              {item.title}
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {item.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}