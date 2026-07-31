"use client";

import { TrendingUp } from "lucide-react";

const monthlyCosts = [
  { month: "Jan", cost: 35 },
  { month: "Feb", cost: 48 },
  { month: "Mar", cost: 42 },
  { month: "Apr", cost: 60 },
  { month: "May", cost: 55 },
  { month: "Jun", cost: 72 },
];

export default function ServiceCostTrend() {
  const max = Math.max(...monthlyCosts.map((m) => m.cost));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Service Cost Trend
          </h2>
          <p className="text-sm text-slate-500">
            Monthly maintenance expenses
          </p>
        </div>

        <TrendingUp className="w-6 h-6 text-[#004ac6]" />
      </div>

      <div className="flex items-end justify-between h-56 gap-3">
        {monthlyCosts.map((item) => (
          <div
            key={item.month}
            className="flex flex-col items-center flex-1"
          >
            <div className="relative w-full flex justify-center h-44 items-end">
              <div
                className="w-8 rounded-t-xl bg-gradient-to-t from-[#004ac6] to-[#60a5fa] hover:scale-105 transition-all duration-300"
                style={{
                  height: `${(item.cost / max) * 100}%`,
                }}
              />
            </div>

            <p className="mt-3 text-xs font-semibold text-slate-500">
              {item.month}
            </p>

            <p className="text-sm font-bold text-slate-700">
              ₹{item.cost}k
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4 flex justify-between text-sm">
        <span className="text-slate-500">Total This Year</span>

        <span className="font-bold text-[#004ac6]">
          ₹3.12L
        </span>
      </div>
    </div>
  );
}