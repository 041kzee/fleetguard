"use client";

const health = [
  { label: "Engine Health", value: 91, color: "bg-green-500" },
  { label: "Tyre Condition", value: 82, color: "bg-blue-500" },
  { label: "Battery Health", value: 74, color: "bg-orange-500" },
  { label: "Insurance Coverage", value: 97, color: "bg-purple-500" },
];

export default function FleetHealth() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-lg font-bold text-slate-900 mb-6">
        Fleet Health
      </h2>

      <div className="space-y-6">
        {health.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{item.label}</span>
              <span>{item.value}%</span>
            </div>

            <div className="w-full h-2 rounded-full bg-slate-200">
              <div
                className={`h-2 rounded-full ${item.color}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}