"use client";

const alerts = [
  {
    id: 1,
    title: "Vehicle Registration Renewal",
    due: "Due in 3 days",
    priority: "High",
  },
  {
    id: 2,
    title: "Driver License Verification",
    due: "Due in 5 days",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Brake Inspection",
    due: "Due in 7 days",
    priority: "Low",
  },
];

export default function NotificationAlertsPanel() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-5">
        Upcoming Alerts
      </h2>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="border border-gray-200 rounded-xl p-4"
          >
            <h3 className="font-semibold text-gray-800">
              {alert.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {alert.due}
            </p>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${
                alert.priority === "High"
                  ? "bg-red-100 text-red-700"
                  : alert.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {alert.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}