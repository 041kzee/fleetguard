"use client";

const stats = [
  {
    id: 1,
    title: "Unread Notifications",
    value: 12,
    icon: "notifications",
    badge: "Active",
    color: "blue",
  },
  {
    id: 2,
    title: "Compliance Alerts",
    value: 4,
    icon: "shield",
    badge: "Critical",
    color: "red",
  },
  {
    id: 3,
    title: "Maintenance Alerts",
    value: 8,
    icon: "build",
    badge: "Pending",
    color: "orange",
  },
  {
    id: 4,
    title: "Assignment Alerts",
    value: 3,
    icon: "group",
    badge: "Normal",
    color: "green",
  },
];

const colors = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    badge: "bg-blue-100 text-blue-700",
  },
  red: {
    icon: "bg-red-50 text-red-600",
    badge: "bg-red-100 text-red-600",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600",
    badge: "bg-orange-100 text-orange-600",
  },
  green: {
    icon: "bg-green-50 text-green-600",
    badge: "bg-green-100 text-green-600",
  },
};

export default function NotificationSummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
        >
          <div className="flex items-start justify-between">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors[item.color].icon}`}
            >
              <span className="material-symbols-outlined">
                {item.icon}
              </span>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[item.color].badge}`}
            >
              {item.badge}
            </span>
          </div>

          <h2 className="text-4xl font-bold text-[#0b1c30] mt-8">
            {item.value}
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}