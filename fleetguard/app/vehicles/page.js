"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import StatusBadge from "@/components/ui/StatusBadge";
import DataTable from "@/components/ui/DataTable";
import RegisterVehicleModal from "@/components/modals/RegisterVehicleModal";

export default function VehiclesPage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");

  const vehicles = [
    { id: "1", make: "Toyota", model: "Innova Hycross", plate: "KA 01 EQ 4589", vin: "MBH11BS8901234567", status: "ACTIVE", driver: "Rajesh Kumar", odo: "48,200 km", type: "Passenger SUV" },
    { id: "2", make: "Tata", model: "Ace Gold", plate: "MH 12 AB 1234", vin: "MAT56789012345678", status: "ACTIVE", driver: "Anita Sharma", odo: "112,400 km", type: "Delivery Truck" },
    { id: "3", make: "Mahindra", model: "Bolero Pickup", plate: "DL 04 C 9876", vin: "MA123456789012345", status: "MAINTENANCE", driver: "Vikram Singh", odo: "78,900 km", type: "Light Cargo" },
    { id: "4", make: "Eicher", model: "Pro 2049", plate: "KA 05 M 6543", vin: "MC890123456789012", status: "IN_SERVICE", driver: "Mohammed Ali", odo: "65,100 km", type: "Heavy Freight" },
    { id: "5", make: "Force", model: "Traveler 3350", plate: "KA 02 J 1122", vin: "MF345678901234567", status: "INACTIVE", driver: "Unassigned", odo: "145,000 km", type: "Passenger Van" },
  ];

  const filteredVehicles = vehicles.filter((v) => {
    const matchesSearch = v.make.toLowerCase().includes(search.toLowerCase()) || v.model.toLowerCase().includes(search.toLowerCase()) || v.plate.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "ALL" || v.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title="Fleet Vehicle Registry"
          subtitle="Manage active fleet units, specifications, and driver assignments"
          onActionClick={() => setIsRegisterOpen(true)}
          actionLabel="+ Register Vehicle"
        />

        <main className="p-8 space-y-6 flex-1 animate-fade-up">
          {/* Filter & Search Bar */}
          <div className="bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-semibold text-[#565e74]">Filter Status:</span>
              {["ALL", "ACTIVE", "MAINTENANCE", "INACTIVE"].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filterStatus === st
                      ? "bg-[#004ac6] text-white"
                      : "bg-[#eff4ff] text-[#434655] hover:bg-[#e5eeff]"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737686] text-[18px]">
                search
              </span>
              <input
                type="text"
                placeholder="Search by make, plate..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-[#f8f9ff] border border-[#e2e8f0] rounded-lg text-xs text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
              />
            </div>
          </div>

          {/* Vehicle List Table */}
          <DataTable headers={["Vehicle Unit", "License Plate", "Type", "Assigned Driver", "Odometer", "Status", "Actions"]}>
            {filteredVehicles.map((v) => (
              <tr key={v.id} className="hover:bg-[#f8f9ff] transition-colors">
                <td className="px-6 py-4">
                  <Link href={`/vehicles/${v.id}`} className="font-bold text-[#0b1c30] hover:text-[#004ac6] hover:underline flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#004ac6]">directions_car</span>
                    {v.make} {v.model}
                  </Link>
                  <span className="block text-[11px] text-[#565e74]">VIN: {v.vin}</span>
                </td>
                <td className="px-6 py-4 font-mono font-semibold text-[#0b1c30]">{v.plate}</td>
                <td className="px-6 py-4 text-[#434655]">{v.type}</td>
                <td className="px-6 py-4 text-[#434655] font-medium">{v.driver}</td>
                <td className="px-6 py-4 text-[#565e74]">{v.odo}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={v.status} />
                </td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <Link
                    href={`/vehicles/${v.id}`}
                    className="text-[#004ac6] font-semibold hover:underline text-xs"
                  >
                    View Specs
                  </Link>
                </td>
              </tr>
            ))}
          </DataTable>
        </main>
      </div>

      <RegisterVehicleModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
}
