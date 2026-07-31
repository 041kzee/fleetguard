"use client";

import {
  Truck,
  Users,
  ShieldCheck,
  Wrench,
  IndianRupee,
  TriangleAlert,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Vehicles",
    value: "248",
    icon: Truck,
    color: "bg-blue-100 text-blue-600",
    trend: "+12%",
  },
  {
    title: "Active Drivers",
    value: "186",
    icon: Users,
    color: "bg-green-100 text-green-600",
    trend: "+8%",
  },
  {
    title: "Compliance Rate",
    value: "96%",
    icon: ShieldCheck,
    color: "bg-emerald-100 text-emerald-600",
    trend: "+2%",
  },
  {
    title: "Due for Service",
    value: "18",
    icon: Wrench,
    color: "bg-orange-100 text-orange-600",
    trend: "-3%",
  },
  {
    title: "Monthly Cost",
    value: "₹2.45L",
    icon: IndianRupee,
    color: "bg-purple-100 text-purple-600",
    trend: "+15%",
  },
  {
    title: "Active Alerts",
    value: "9",
    icon: TriangleAlert,
    color: "bg-red-100 text-red-600",
    trend: "-5%",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-5">
      {stats.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mt-2">
                  {card.value}
                </h2>
              </div>

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.color}`}
              >
                <Icon size={22} />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <TrendingUp size={15} className="text-green-500" />

              <span className="text-sm font-semibold text-green-600">
                {card.trend}
              </span>

              <span className="text-xs text-slate-400">
                vs last month
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}