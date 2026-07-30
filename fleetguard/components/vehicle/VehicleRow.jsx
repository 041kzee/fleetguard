"use client";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

export default function VehicleRow({ vehicle }) {
  return (
    <tr className="border-t hover:bg-gray-50">

      <td className="px-6 py-5 font-medium">
        {vehicle.number}
      </td>

      <td className="px-6 py-5">
        {vehicle.type}
      </td>

      <td className="px-6 py-5">
        {vehicle.driver}
      </td>

      <td className="px-6 py-5">

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            vehicle.compliance === "Compliant"
              ? "bg-green-100 text-green-700"
              : vehicle.compliance === "Expiring Soon"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {vehicle.compliance}
        </span>

      </td>

      <td className="px-6 py-5">
        {vehicle.service}
      </td>

      <td className="px-6 py-5">

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            vehicle.status === "Active"
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {vehicle.status}
        </span>

      </td>

      <td className="px-6 py-5">

        <div className="flex gap-3">

          <button className="text-blue-600 hover:text-blue-800">
            <Eye size={18} />
          </button>

          <button className="text-green-600 hover:text-green-800">
            <Pencil size={18} />
          </button>

          <button className="text-red-600 hover:text-red-800">
            <Trash2 size={18} />
          </button>

        </div>

      </td>

    </tr>
  );
}