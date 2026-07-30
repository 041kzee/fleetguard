"use client";

const risks = [
  {
    vehicle: "Truck #104",
    level: "HIGH",
    mileage: "142,500 mi",
    issue: "Brake pad wear detected",
    badge: "bg-red-100 text-red-600",
    text: "text-red-500",
  },
  {
    vehicle: "Van #212",
    level: "MEDIUM",
    mileage: "88,120 mi",
    issue: "Engine oil due in 500 mi",
    badge: "bg-orange-100 text-orange-600",
    text: "text-orange-500",
  },
  {
    vehicle: "Truck #305",
    level: "LOW",
    mileage: "12,400 mi",
    issue: "All systems optimal",
    badge: "bg-green-100 text-green-600",
    text: "text-green-600",
  },
];

export default function MaintenanceRisk() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Maintenance Risk Levels
        </h2>

        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            High
          </span>

          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            Medium
          </span>

          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Low
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {risks.map((risk) => (
          <div
            key={risk.vehicle}
            className="border rounded-xl p-4 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{risk.vehicle}</h3>

              <span
                className={`text-xs px-2 py-1 rounded-full ${risk.badge}`}
              >
                {risk.level}
              </span>
            </div>

            <p className="mt-5 text-gray-500 text-sm">
              Mileage
            </p>

            <h4 className="font-semibold text-lg">
              {risk.mileage}
            </h4>

            <div className="border-t my-4"></div>

            <p className={`text-sm ${risk.text}`}>
              {risk.issue}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}