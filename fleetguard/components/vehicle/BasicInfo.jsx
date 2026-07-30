"use client";

import { Car } from "lucide-react";

export default function BasicInfo({
  formData,
  setFormData,
}) {
  return (
    <section className="p-8 border-b border-gray-200">

      {/* Heading */}

      <div className="flex items-center gap-3 mb-8">

        <div className="bg-blue-100 p-2 rounded-lg">
          <Car className="text-blue-600" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Basic Information
          </h2>

          <p className="text-gray-500 text-sm">
            Enter the primary details about the vehicle.
          </p>
        </div>

      </div>

      {/* Form */}

      <div className="grid grid-cols-2 gap-6">

        {/* Registration Number */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Registration Number *
          </label>

          <input
            type="text"
            placeholder="KA-01-AB-1234"
            value={formData.vehicle_number}
            onChange={(e) =>
              setFormData({
                ...formData,
                vehicle_number: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Manufacturer */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Manufacturer *
          </label>

          <select
            value={formData.brand}
            onChange={(e) =>
              setFormData({
                ...formData,
                brand: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          >
            <option value="">Select Manufacturer</option>
            <option value="Tata">Tata</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Ashok Leyland">Ashok Leyland</option>
          </select>

        </div>

        {/* Model */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Model *
          </label>

          <input
            type="text"
            placeholder="Model"
            value={formData.model}
            onChange={(e) =>
              setFormData({
                ...formData,
                model: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />

        </div>

        {/* Vehicle Type */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Type *
          </label>

          <select
            value={formData.vehicle_type}
            onChange={(e) =>
              setFormData({
                ...formData,
                vehicle_type: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          >
            <option value="">Select Type</option>
            <option value="Truck">Truck</option>
            <option value="Bus">Bus</option>
            <option value="Van">Van</option>
          </select>

        </div>

        {/* Manufacturing Year */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Manufacturing Year *
          </label>

          <input
            type="number"
            placeholder="2024"
            value={formData.manufacturing_year}
            onChange={(e) =>
              setFormData({
                ...formData,
                manufacturing_year: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />

        </div>

        {/* Fuel Type */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fuel Type *
          </label>

          <select
            value={formData.fuel_type}
            onChange={(e) =>
              setFormData({
                ...formData,
                fuel_type: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          >
            <option value="">Select Fuel</option>
            <option value="Diesel">Diesel</option>
            <option value="Petrol">Petrol</option>
            <option value="Electric">Electric</option>
          </select>

        </div>

        {/* Color (UI only) */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Color
          </label>

          <input
            type="text"
            placeholder="White"
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />

        </div>

        {/* VIN (Maps to Chassis Number) */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            VIN / Chassis Number
          </label>

          <input
            type="text"
            placeholder="Vehicle Identification Number"
            value={formData.chassis_number}
            onChange={(e) =>
              setFormData({
                ...formData,
                chassis_number: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />

        </div>

      </div>

    </section>
  );
}