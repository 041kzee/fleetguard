"use client";

import {
  Truck,
  ShieldCheck,
  AlertTriangle,
  Wrench,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Vehicles",
    value: "248",
    change: "+12 this month",
    icon: Truck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Compliant",
    value: "221",
    change: "89% compliance",
    icon: ShieldCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Non-Compliant",
    value: "27",
    change: "Needs attention",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Service Due",
    value: "18",
    change: "Next 30 days",
    icon: Wrench,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>

                <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>

                <p className="text-sm text-gray-400 mt-3 flex items-center gap-1">
                  <TrendingUp size={14} />
                  {stat.change}
                </p>
              </div>

              <div
                className={`h-14 w-14 rounded-xl flex items-center justify-center ${stat.color}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}