"use client";

const statusItems = [
  {
    title: "Server Status",
    value: "Online",
    color: "text-green-600",
    icon: "dns",
  },
  {
    title: "Database",
    value: "Connected",
    color: "text-green-600",
    icon: "storage",
  },
  {
    title: "Last Backup",
    value: "Today, 09:30 AM",
    color: "text-blue-600",
    icon: "backup",
  },
];

export default function SystemStatus() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-5">
        System Status
      </h2>

      <div className="space-y-5">
        {statusItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600">
                  {item.icon}
                </span>
              </div>

              <div>
                <p className="font-medium">{item.title}</p>
                <p className={`text-sm ${item.color}`}>
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}