"use client";

import { ShieldCheck } from "lucide-react";

export default function ComplianceSection() {
  return (
    <section className="p-8 border-b border-gray-200">

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <div className="bg-orange-100 p-2 rounded-lg">
          <ShieldCheck className="text-orange-600" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Compliance Information
          </h2>

          <p className="text-gray-500 text-sm">
            Track important compliance and certification expiry dates.
          </p>
        </div>

      </div>

      {/* Form */}

      <div className="grid grid-cols-2 gap-6">

        {/* Insurance Expiry */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Insurance Expiry *
          </label>

          <input
            type="date"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Inspection Expiry */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Inspection Expiry *
          </label>

          <input
            type="date"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Emission Expiry */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Emission Certificate Expiry *
          </label>

          <input
            type="date"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Compliance Status */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Compliance Status
          </label>

          <div className="flex items-center h-[50px] px-4 rounded-xl bg-green-50 border border-green-200">

            <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>

            <span className="font-medium text-green-700">
              Compliant
            </span>

          </div>

        </div>

      </div>

      {/* Info Box */}

      <div className="mt-8 rounded-xl bg-blue-50 border border-blue-200 p-5">

        <h3 className="font-semibold text-blue-800">
          Automatic Monitoring
        </h3>

        <p className="text-sm text-blue-700 mt-2">
          FleetGuard automatically monitors compliance expiry dates
          and sends reminders before documents expire.
        </p>

      </div>

    </section>
  );
}