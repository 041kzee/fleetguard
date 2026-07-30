"use client";

import { PieChart } from "lucide-react";

export default function RoleDistribution() {
  const rolesBreakdown = [
    {
      role: "Drivers",
      percentage: 95,
      color: "bg-[#f59e0b]", // orange
      bgColor: "bg-[#fef3c7]",
      indicatorColor: "bg-[#f59e0b]",
    },
    {
      role: "Managers",
      percentage: 3,
      color: "bg-[#ef4444]", // red/orange
      bgColor: "bg-[#fee2e2]",
      indicatorColor: "bg-[#ef4444]",
    },
    {
      role: "Admins",
      percentage: 2,
      color: "bg-[#2563eb]", // blue
      bgColor: "bg-[#dbeafe]",
      indicatorColor: "bg-[#2563eb]",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between h-full min-h-[340px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-4 mb-4">
        <div>
          <h3 className="font-bold text-[#0b1c30] text-lg">Users by Role</h3>
        </div>
        <PieChart className="w-5 h-5 text-[#94a3b8]" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center space-y-6">
        {rolesBreakdown.map((item) => (
          <div key={item.role} className="space-y-2">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span className="text-[#475569]">{item.role}</span>
              <span className="text-[#0f172a]">{item.percentage}%</span>
            </div>
            
            {/* Progress Bar Track */}
            <div className={`w-full h-2.5 rounded-full ${item.bgColor} overflow-hidden`}>
              <div
                className={`h-full rounded-full ${item.color} transition-all duration-500`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            
            {/* Visual tiny color indicator */}
            <div className="flex items-center gap-1.5 pt-0.5">
              <span className={`w-2 h-2 rounded-full ${item.indicatorColor}`}></span>
              <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider">
                {item.role.slice(0, -1)} Color
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
