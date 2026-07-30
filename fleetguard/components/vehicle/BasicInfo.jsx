"use client";

import { Car } from "lucide-react";

export default function BasicInfo() {
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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Manufacturer */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Manufacturer *
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3">

            <option>Select Manufacturer</option>
            <option>Tata</option>
            <option>Mahindra</option>
            <option>Ashok Leyland</option>

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
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />

        </div>

        {/* Vehicle Type */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Type *
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3">

            <option>Select Type</option>
            <option>Truck</option>
            <option>Bus</option>
            <option>Van</option>

          </select>

        </div>

        {/* Year */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Manufacturing Year *
          </label>

          <input
            type="number"
            placeholder="2024"
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />

        </div>

        {/* Fuel */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fuel Type *
          </label>

          <select className="w-full rounded-xl border border-gray-300 px-4 py-3">

            <option>Select Fuel</option>
            <option>Diesel</option>
            <option>Petrol</option>
            <option>Electric</option>

          </select>

        </div>

        {/* Color */}

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

        {/* VIN */}

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            VIN Number
          </label>

          <input
            type="text"
            placeholder="Vehicle Identification Number"
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />

        </div>

      </div>

    </section>
  );
}