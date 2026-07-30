"use client";

import {
  Lightbulb,
  ShieldCheck,
  Bell,
  Wrench,
  CheckCircle,
} from "lucide-react";

export default function RegistrationTips() {
  return (
    <aside className="w-80 space-y-6">

      {/* Registration Tips */}

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-4">

          <div className="bg-yellow-100 p-2 rounded-lg">
            <Lightbulb className="text-yellow-600" size={20} />
          </div>

          <h2 className="font-semibold text-lg">
            Registration Tips
          </h2>

        </div>

        <ul className="space-y-4 text-sm text-gray-600">

          <li className="flex gap-3">
            <CheckCircle
              size={18}
              className="text-green-500 mt-0.5"
            />
            Ensure all vehicle information matches official documents.
          </li>

          <li className="flex gap-3">
            <CheckCircle
              size={18}
              className="text-green-500 mt-0.5"
            />
            Upload clear and readable compliance certificates.
          </li>

          <li className="flex gap-3">
            <CheckCircle
              size={18}
              className="text-green-500 mt-0.5"
            />
            Verify expiry dates before saving the vehicle.
          </li>

        </ul>

      </div>

      {/* Automatic Alerts */}

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-3">

          <Bell className="text-blue-600" />

          <h3 className="font-semibold text-blue-800">
            Automatic Alerts
          </h3>

        </div>

        <p className="text-sm text-blue-700">
          FleetGuard automatically reminds managers before
          insurance, inspection and emission certificates expire.
        </p>

      </div>

      {/* Compliance Monitoring */}

      <div className="bg-green-50 border border-green-200 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-3">

          <ShieldCheck className="text-green-600" />

          <h3 className="font-semibold text-green-800">
            Compliance Monitoring
          </h3>

        </div>

        <p className="text-sm text-green-700">
          Vehicle compliance status is continuously monitored to
          reduce legal and operational risks.
        </p>

      </div>

      {/* Maintenance */}

      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-3">

          <Wrench className="text-orange-600" />

          <h3 className="font-semibold text-orange-800">
            Maintenance Tracking
          </h3>

        </div>

        <p className="text-sm text-orange-700">
          Service reminders are generated automatically based on
          mileage and service intervals.
        </p>

      </div>

    </aside>
  );
}