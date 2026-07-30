"use client";

import { Users, UserCheck, Truck, ShieldAlert, TrendingUp } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      label: "Total Users",
      value: "1,248",
      icon: Users,
      iconBg: "bg-[#eff6ff]",
      iconColor: "text-[#004ac6]",
      trend: {
        value: "12%",
        isPositive: true,
      },
    },
    {
      label: "Fleet Managers",
      value: "42",
      icon: UserCheck,
      iconBg: "bg-[#fff7ed]",
      iconColor: "text-[#ea580c]",
      trend: null,
    },
    {
      label: "Active Drivers",
      value: "1,184",
      icon: Truck,
      iconBg: "bg-[#fef8e6]",
      iconColor: "text-[#d97706]",
      trend: null,
    },
    {
      label: "Admins",
      value: "22",
      icon: ShieldAlert,
      iconBg: "bg-[#f1f5f9]",
      iconColor: "text-[#475569]",
      trend: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200 flex flex-col justify-between min-h-[148px]"
          >
            {/* Top Row: Icon & optional Trend Badge */}
            <div className="flex items-center justify-between">
              <div className={`w-11 h-11 rounded-xl ${stat.iconBg} ${stat.iconColor} flex items-center justify-center`}>
                <Icon className="w-5.5 h-5.5" />
              </div>
              
              {stat.trend && (
                <div className="flex items-center gap-1 bg-[#ecfdf5] text-[#10b981] px-2.5 py-1 rounded-full text-xs font-bold leading-none">
                  <TrendingUp className="w-3 h-3 stroke-[2.5]" />
                  <span>{stat.trend.value}</span>
                </div>
              )}
            </div>

            {/* Bottom Row: Label & Value */}
            <div className="mt-4">
              <span className="text-xs font-bold text-[#64748b] tracking-wider uppercase">
                {stat.label}
              </span>
              <p className="text-2xl lg:text-3xl font-extrabold text-[#0b1c30] mt-1 tracking-tight">
                {stat.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
