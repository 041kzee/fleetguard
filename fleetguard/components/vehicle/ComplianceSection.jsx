"use client";

import { ShieldCheck } from "lucide-react";

export default function ComplianceSection({
  formData,
  setFormData,
}) 

{
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
             value={formData.insurance_expiry}
  onChange={(e) =>
    setFormData({
      ...formData,
      insurance_expiry: e.target.value,
    })
  }
          />
        </div>

        {/* Inspection Expiry */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Registration Date *
          </label>

          <input
            type="date"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
             value={formData.registration_date}
  onChange={(e) =>
    setFormData({
      ...formData,
      registration_date: e.target.value,
    })
  }
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
            
  value={formData.emission_expiry}
  onChange={(e) =>
    setFormData({
      ...formData,
      emission_expiry: e.target.value,
    })
  }
/>
          
        </div>

        {/* Compliance Status */}

<div>

  <label className="block text-sm font-medium text-gray-700 mb-2">
    Current Compliance Status
  </label>

  {(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dates = [
      formData.insurance_expiry,
      formData.emission_expiry,
    ].filter(Boolean);

    const isExpired = dates.some((date) => {
      const expiry = new Date(date);
      expiry.setHours(0, 0, 0, 0);
      return expiry < today;
    });

    return (
      <div
        className={`flex items-center h-12.5 px-4 rounded-xl border ${
          isExpired
            ? "bg-red-50 border-red-200"
            : "bg-green-50 border-green-200"
        }`}
      >
        <div
          className={`w-3 h-3 rounded-full mr-3 ${
            isExpired ? "bg-red-500" : "bg-green-500"
          }`}
        ></div>

        <span
          className={`font-medium ${
            isExpired ? "text-red-700" : "text-green-700"
          }`}
        >
          {isExpired ? "Inactive" : "Compliant"}
        </span>
      </div>
    );
  })()}

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