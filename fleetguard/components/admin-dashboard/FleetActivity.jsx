"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", vehicles: 120 },
  { month: "Feb", vehicles: 138 },
  { month: "Mar", vehicles: 150 },
  { month: "Apr", vehicles: 171 },
  { month: "May", vehicles: 168 },
  { month: "Jun", vehicles: 190 },
  { month: "Jul", vehicles: 210 },
];

export default function FleetActivity() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-[380px]">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Fleet Activity
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Vehicle usage over the last 7 months
        </p>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="vehicles"
            stroke="#004ac6"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}