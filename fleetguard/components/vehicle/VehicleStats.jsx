import {
  Car,
  ShieldCheck,
  AlertTriangle,
  Clock3,
} from "lucide-react";

const stats = [
  {
    title: "Total Vehicles",
    value: "58",
    badge: "+4%",
    icon: Car,
    badgeColor: "bg-green-100 text-green-600",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Compliant",
    value: "52",
    badge: "Active",
    icon: ShieldCheck,
    badgeColor: "bg-green-100 text-green-600",
    iconBg: "bg-green-100 text-green-600",
  },
  {
    title: "Non-Compliant",
    value: "4",
    badge: "Requires Action",
    icon: AlertTriangle,
    badgeColor: "bg-red-100 text-red-600",
    iconBg: "bg-red-100 text-red-600",
  },
  {
    title: "Due for Service",
    value: "2",
    badge: "Next 30d",
    icon: Clock3,
    badgeColor: "bg-yellow-100 text-yellow-600",
    iconBg: "bg-yellow-100 text-yellow-600",
  },
];

export default function VehicleStats() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-200 p-6"
          >
            <div className="flex justify-between items-start">
              <div
                className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.iconBg}`}
              >
                <Icon size={22} />
              </div>

              <span
                className={`text-sm px-3 py-1 rounded-full ${item.badgeColor}`}
              >
                {item.badge}
              </span>
            </div>

            <h3 className="text-gray-500 mt-6">
              {item.title}
            </h3>

            <p className="text-3xl font-bold mt-2">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}