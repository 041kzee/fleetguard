"use client";

import {
  AlertTriangle,
  ShieldAlert,
  Wrench,
} from "lucide-react";

const alerts = [
  {
    title: "Insurance Expiring",
    description: "8 vehicles have insurance expiring within 7 days.",
    icon: ShieldAlert,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Service Overdue",
    description: "5 vehicles have crossed their scheduled maintenance.",
    icon: Wrench,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "High Risk Vehicles",
    description: "3 vehicles require immediate inspection.",
    icon: AlertTriangle,
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function CriticalAlerts() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-lg font-semibold">
          Critical Alerts
        </h2>

        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {alerts.map((alert, index) => {

          const Icon = alert.icon;

          return (

            <div
              key={index}
              className="flex gap-4 p-4 rounded-xl border hover:bg-gray-50 transition"
            >

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${alert.color}`}
              >
                <Icon size={22} />
              </div>

              <div className="flex-1">

                <h3 className="font-semibold">
                  {alert.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {alert.description}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}