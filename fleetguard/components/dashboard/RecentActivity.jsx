"use client";

import {
  Truck,
  FileText,
  UserCheck,
  Wrench,
} from "lucide-react";

const activities = [
  {
    icon: Truck,
    color: "bg-blue-600",
    title: "New Vehicle Registered",
    description: "Truck #602 added by Mike S.",
    time: "2 hours ago",
  },
  {
    icon: FileText,
    color: "bg-green-600",
    title: "Documents Uploaded",
    description: "Insurance for Van #310 updated.",
    time: "5 hours ago",
  },
  {
    icon: UserCheck,
    color: "bg-gray-700",
    title: "Driver Assigned",
    description: "John Doe assigned to Truck #102.",
    time: "Yesterday, 4:45 PM",
  },
  {
    icon: Wrench,
    color: "bg-orange-500",
    title: "Service Logged",
    description: "Oil change completed for Van #201.",
    time: "Yesterday, 11:20 AM",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-6">

      <h2 className="text-lg font-semibold mb-6">
        Recent Activity
      </h2>

      <div className="relative">

        <div className="absolute left-5 top-3 bottom-3 w-px bg-gray-200"></div>

        <div className="space-y-8">

          {activities.map((activity, index) => {

            const Icon = activity.icon;

            return (

              <div
                key={index}
                className="relative flex gap-4"
              >

                <div
                  className={`relative z-10 h-10 w-10 rounded-full flex items-center justify-center text-white ${activity.color}`}
                >
                  <Icon size={18} />
                </div>

                <div>

                  <h3 className="font-semibold">
                    {activity.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {activity.description}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    {activity.time}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </div>
  );
}