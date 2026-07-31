"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Operational", value: 78 },
  { name: "Maintenance", value: 15 },
  { name: "Inactive", value: 7 },
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

export default function FleetStatus() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-[380px]">
      <h2 className="text-xl font-bold text-slate-900">
        Fleet Status
      </h2>

      <p className="text-sm text-slate-500 mb-4">
        Current vehicle distribution
      </p>

      <ResponsiveContainer width="100%" height="70%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={65}
            outerRadius={90}
            dataKey="value"
          >
            {data.map((item, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex justify-between"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: COLORS[i] }}
              />

              <span className="text-sm">
                {item.name}
              </span>
            </div>

            <span className="font-semibold">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}