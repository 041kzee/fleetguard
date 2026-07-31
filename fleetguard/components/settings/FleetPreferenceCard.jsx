"use client";

export default function FleetPreferenceCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-blue-600">
          local_shipping
        </span>

        <div>
          <h2 className="text-xl font-semibold">
            Fleet Preferences
          </h2>

          <p className="text-sm text-gray-500">
            Configure operational defaults.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">
              Enable GPS Tracking
            </h4>

            <p className="text-sm text-gray-500">
              Track vehicle locations in real time.
            </p>
          </div>

          <input type="checkbox" defaultChecked className="h-5 w-5" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">
              Maintenance Alerts
            </h4>

            <p className="text-sm text-gray-500">
              Notify managers before service due dates.
            </p>
          </div>

          <input type="checkbox" defaultChecked className="h-5 w-5" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">
              Driver Notifications
            </h4>

            <p className="text-sm text-gray-500">
              Send alerts directly to drivers.
            </p>
          </div>

          <input type="checkbox" defaultChecked className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}