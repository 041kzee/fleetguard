"use client";

const activities = [
  {
    id: 1,
    icon: "check_circle",
    color: "text-green-600 bg-green-100",
    title: "Annual Inspection Completed",
    time: "2 hours ago",
    description:
      "Vehicle #4502 successfully passed all annual safety inspections.",
  },
  {
    id: 2,
    icon: "location_on",
    color: "text-orange-600 bg-orange-100",
    title: "Route Deviation Alert",
    time: "5 hours ago",
    description:
      "Vehicle #101 deviated from its assigned route by 3.2 km.",
  },
  {
    id: 3,
    icon: "person_add",
    color: "text-blue-600 bg-blue-100",
    title: "New Driver Added",
    time: "Yesterday",
    description:
      "Driver Rahul Kumar has been successfully added to FleetGuard.",
  },
];

export default function FleetActivityPanel() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">

      <h2 className="text-lg font-bold text-[#0b1c30] mb-6">
        Latest Fleet Activities
      </h2>

      <div className="space-y-5">

        {activities.map((item) => (

          <div
            key={item.id}
            className="flex gap-4 items-start"
          >

            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color}`}
            >
              <span className="material-symbols-outlined">
                {item.icon}
              </span>
            </div>

            <div className="flex-1">

              <div className="flex justify-between">

                <h3 className="font-semibold text-[#0b1c30]">
                  {item.title}
                </h3>

                <span className="text-xs text-gray-500">
                  {item.time}
                </span>

              </div>

              <p className="text-sm text-gray-600 mt-2">
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}