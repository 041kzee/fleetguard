"use client";

export default function GeneralSettingsSection() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-blue-600">
          tune
        </span>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            General Settings
          </h2>

          <p className="text-sm text-gray-500">
            Configure application preferences.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Fleet Name
          </label>

          <input
            type="text"
            defaultValue="FleetGuard"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Time Zone
          </label>

          <select className="w-full border rounded-xl px-4 py-3">
            <option>Asia/Kolkata</option>
            <option>UTC</option>
            <option>America/New_York</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Language
          </label>

          <select className="w-full border rounded-xl px-4 py-3">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Distance Unit
          </label>

          <select className="w-full border rounded-xl px-4 py-3">
            <option>Kilometers</option>
            <option>Miles</option>
          </select>
        </div>
      </div>
    </div>
  );
}