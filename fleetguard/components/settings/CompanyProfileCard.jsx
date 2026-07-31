"use client";

export default function CompanyProfileCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-blue-600">
          apartment
        </span>

        <div>
          <h2 className="text-xl font-semibold">
            Company Profile
          </h2>

          <p className="text-sm text-gray-500">
            Update company information.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">
            Company Name
          </label>

          <input
            type="text"
            defaultValue="FleetGuard Logistics"
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            defaultValue="support@fleetguard.com"
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Phone
          </label>

          <input
            type="text"
            defaultValue="+91 9876543210"
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Address
          </label>

          <textarea
            rows={4}
            defaultValue="Mangalore, Karnataka"
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>
      </div>
    </div>
  );
}