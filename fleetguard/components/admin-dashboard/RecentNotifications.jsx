"use client";

import { Bell } from "lucide-react";

const notifications = [
  {
    title: "Vehicle KA-20-AB-1234 serviced successfully",
    time: "10 mins ago",
    color: "bg-green-500",
  },
  {
    title: "Insurance expires in 3 days",
    time: "1 hour ago",
    color: "bg-orange-500",
  },
  {
    title: "New fleet manager added",
    time: "Yesterday",
    color: "bg-blue-500",
  },
  {
    title: "Compliance document uploaded",
    time: "2 days ago",
    color: "bg-purple-500",
  },
];

export default function RecentNotifications() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-full">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-[#004ac6]" />
        <h2 className="text-lg font-bold text-slate-900">
          Recent Notifications
        </h2>
      </div>

      <div className="space-y-5">
        {notifications.map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className={`w-3 h-3 rounded-full mt-2 ${item.color}`} />

            <div>
              <p className="text-sm font-medium text-slate-800">
                {item.title}
              </p>

              <span className="text-xs text-slate-500">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}