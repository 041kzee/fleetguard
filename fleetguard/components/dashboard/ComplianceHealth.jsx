"use client";

const items = [
  {
    title: "Insurance",
    value: 94,
    color: "bg-blue-600",
  },
  {
    title: "Safety Inspection",
    value: 88,
    color: "bg-green-500",
  },
  {
    title: "Emissions",
    value: 72,
    color: "bg-orange-400",
  },
];

export default function ComplianceHealth() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">

      <h2 className="font-semibold text-lg mb-6">
        Compliance Health
      </h2>

      <div className="space-y-6">

        {items.map((item) => (

          <div key={item.title}>

            <div className="flex justify-between mb-2">

              <span className="font-medium">
                {item.title}
              </span>

              <span className="font-semibold text-blue-700">
                {item.value}%
              </span>

            </div>

            <div className="h-2 rounded-full bg-gray-100">

              <div
                className={`${item.color} h-2 rounded-full`}
                style={{
                  width: `${item.value}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 rounded-xl bg-gray-50 p-5 border">

        <h3 className="text-gray-500 text-sm">
          Recommended Action
        </h3>

        <p className="mt-2 text-sm font-medium">
          Schedule 12 emissions tests
          this week to reach the 95%
          compliance target.
        </p>

      </div>

    </div>
  );
}