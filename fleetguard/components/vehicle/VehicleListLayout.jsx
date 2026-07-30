"use client";

import { Plus } from "lucide-react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import VehicleStats from "./VehicleStats";
import VehicleFilters from "./VehicleFilters";
import VehicleTable from "./VehicleTable";
import VehiclePagination from "./VehiclePagination";

export default function VehicleListLayout() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-gray-900">
              Fleet Vehicles
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all registered vehicles and monitor their compliance status.
            </p>

          </div>

          <div className="flex gap-3">

            <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100">
              Import CSV
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">

              <Plus size={18} />

              Register Vehicle

            </button>

          </div>

        </div>

        <VehicleStats />

        <VehicleFilters />

        <VehicleTable />

        <VehiclePagination />

      </div>
    </DashboardLayout>
  );
}