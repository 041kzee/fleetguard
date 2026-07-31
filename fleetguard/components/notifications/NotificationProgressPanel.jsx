"use client";

const distribution = [
  {
    title: "Compliance",
    value: 35,
    color: "bg-red-500",
  },
  {
    title: "Maintenance",
    value: 45,
    color: "bg-orange-500",
  },
  {
    title: "Assignments",
    value: 20,
    color: "bg-blue-500",
  },
];

export default function NotificationProgressPanel() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">

      <h2 className="font-bold text-[#0b1c30] text-lg mb-6">
        Alert Distribution
      </h2>

      <div className="space-y-6">

        {distribution.map((item) => (

          <div key={item.title}>

            <div className="flex justify-between mb-2">

              <span className="text-sm font-medium text-[#0b1c30]">
                {item.title}
              </span>

              <span className="text-sm text-gray-500">
                {item.value}%
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">

              <div
                className={`${item.color} h-2 rounded-full`}
                style={{ width: `${item.value}%` }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}