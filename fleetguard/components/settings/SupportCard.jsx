"use client";

export default function SupportCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-5">
        <span className="material-symbols-outlined text-blue-600">
          support_agent
        </span>

        <h2 className="text-lg font-semibold">
          Support
        </h2>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Need help configuring FleetGuard?
        Our support team is available 24/7.
      </p>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition">
        Contact Support
      </button>
    </div>
  );
}