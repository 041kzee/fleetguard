"use client";

import { Settings } from "lucide-react";

export default function OperationalInfo({
  formData,
  setFormData,
}) {
  return (
    <section className="p-8 border-b border-gray-200">

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <div className="bg-green-100 p-2 rounded-lg">
          <Settings className="text-green-600" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Operational Information
          </h2>

          <p className="text-gray-500 text-sm">
            Configure operational settings and fleet details.
          </p>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        {/* Capacity */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Capacity *
          </label>

          <input
            type="number"
            placeholder="40"
            value={formData.capacity}
            onChange={(e) =>
              setFormData({
                ...formData,
                capacity: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Engine Number */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Engine Number *
          </label>

          <input
            type="text"
            placeholder="ENG123456789"
            value={formData.engine_number}
            onChange={(e) =>
              setFormData({
                ...formData,
                engine_number: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Status
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3">
            <option>Active</option>
            <option>Maintenance</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Primary Location */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Location
          </label>

          <input
            type="text"
            placeholder="Mangalore Depot"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Purchase Date */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Purchase Date
          </label>

          <input
            type="date"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Fleet Category */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fleet Category
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3">
            <option>Heavy Vehicle</option>
            <option>Light Vehicle</option>
            <option>Passenger Vehicle</option>
          </select>
        </div>

      </div>

    </section>
  );
}