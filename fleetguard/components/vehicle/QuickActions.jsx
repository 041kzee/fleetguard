import { Fuel, MapPin, Route, FileText } from "lucide-react";

const actions = [
  { icon: Fuel, title: "Add Fuel" },
  { icon: MapPin, title: "Live Track" },
  { icon: Route, title: "Trips" },
  { icon: FileText, title: "Export Report" },
];

export default function QuickActions() {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <h2 className="font-semibold text-lg mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="border rounded-xl p-6 flex flex-col items-center gap-3 hover:bg-gray-50 transition"
            >
              <Icon className="text-blue-600" size={22} />

              <span className="text-sm font-medium text-center">
                {action.title}
              </span>

            </button>
          );

        })}

      </div>

    </div>
  );
}