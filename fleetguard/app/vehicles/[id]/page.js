"use client";

import { useState, use } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import StatusBadge from "@/components/ui/StatusBadge";
import DataTable from "@/components/ui/DataTable";
import AssignVehicleModal from "@/components/modals/AssignVehicleModal";
import LogServiceModal from "@/components/modals/LogServiceModal";
import UploadDocumentModal from "@/components/modals/UploadDocumentModal";

export default function VehicleDetailsPage({ params }) {
  const resolvedParams = use(params);
  const vehicleId = resolvedParams.id;

  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const vehicle = {
    id: vehicleId,
    make: "Toyota",
    model: "Innova Hycross 2.0 VX",
    plate: "KA 01 EQ 4589",
    vin: "MBH11BS8901234567",
    status: "ACTIVE",
    driver: "Rajesh Kumar (ID: DRV-802)",
    type: "Passenger SUV",
    year: "2024",
    fuel: "Strong Hybrid (Petrol + Electric)",
    odometer: "48,200 km",
    engine: "M20A-FXS 1987cc",
    insuranceExp: "2027-03-15",
    pucExp: "2026-11-10",
    permitExp: "2027-01-20",
  };

  const serviceHistory = [
    { date: "2026-06-12", type: "Synthetic Oil & Filter Change", cost: "₹4,500", odometer: "45,100 km", center: "Bosch Car Service" },
    { date: "2026-02-04", type: "Brake Pad & Rotor Inspection", cost: "₹6,200", odometer: "38,400 km", center: "Toyota Official Service" },
    { date: "2025-10-19", type: "Tire Rotation & Wheel Alignment", cost: "₹2,100", odometer: "30,000 km", center: "Bridgestone Select" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title={`${vehicle.make} ${vehicle.model}`}
          subtitle={`Vehicle Details & Operational Timeline (${vehicle.plate})`}
        />

        <main className="p-8 space-y-8 flex-1 animate-fade-up">
          {/* Top Banner Card */}
          <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#004ac6] text-white flex items-center justify-center shadow-lg shadow-[#004ac6]/20">
                <span className="material-symbols-outlined text-[32px]">directions_car</span>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-[#0b1c30]">{vehicle.make} {vehicle.model}</h2>
                  <StatusBadge status={vehicle.status} />
                </div>
                <p className="text-xs text-[#565e74] mt-0.5 font-mono">
                  License Plate: <span className="font-bold text-[#0b1c30]">{vehicle.plate}</span> | VIN: {vehicle.vin}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsAssignOpen(true)}
                className="px-4 py-2 bg-[#e5eeff] text-[#004ac6] hover:bg-[#004ac6] hover:text-white rounded-lg text-xs font-semibold transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">badge</span>
                <span>Assign Driver</span>
              </button>
              <button
                onClick={() => setIsServiceOpen(true)}
                className="px-4 py-2 bg-[#e5eeff] text-[#004ac6] hover:bg-[#004ac6] hover:text-white rounded-lg text-xs font-semibold transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">build</span>
                <span>Log Maintenance</span>
              </button>
              <button
                onClick={() => setIsUploadOpen(true)}
                className="px-4 py-2 bg-[#2563eb] text-white rounded-lg text-xs font-semibold shadow-md shadow-[#2563eb]/20 hover:bg-[#004ac6] transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">upload_file</span>
                <span>Upload Document</span>
              </button>
            </div>
          </div>

          {/* Vehicle Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-xs space-y-4">
              <h3 className="font-bold text-sm text-[#0b1c30] border-b border-[#e2e8f0] pb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#004ac6] text-[20px]">info</span>
                General Specs
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#565e74]">Vehicle Type</span>
                  <span className="font-semibold text-[#0b1c30]">{vehicle.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#565e74]">Model Year</span>
                  <span className="font-semibold text-[#0b1c30]">{vehicle.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#565e74]">Powertrain</span>
                  <span className="font-semibold text-[#0b1c30]">{vehicle.fuel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#565e74]">Engine Code</span>
                  <span className="font-semibold text-[#0b1c30]">{vehicle.engine}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-xs space-y-4">
              <h3 className="font-bold text-sm text-[#0b1c30] border-b border-[#e2e8f0] pb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#004ac6] text-[20px]">person</span>
                Assigned Operator
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#dae2fd] text-[#004ac6] flex items-center justify-center font-bold">
                    RK
                  </div>
                  <div>
                    <p className="font-bold text-[#0b1c30]">{vehicle.driver}</p>
                    <p className="text-[11px] text-[#10b981] font-semibold">Active Shift</p>
                  </div>
                </div>
                <div className="pt-2 flex justify-between text-[#565e74]">
                  <span>Odometer Reading</span>
                  <span className="font-bold text-[#0b1c30]">{vehicle.odometer}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-xs space-y-4">
              <h3 className="font-bold text-sm text-[#0b1c30] border-b border-[#e2e8f0] pb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#004ac6] text-[20px]">verified</span>
                Compliance Overview
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#565e74]">Insurance Expiry</span>
                  <span className="font-semibold text-[#10b981]">{vehicle.insuranceExp}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#565e74]">PUC Certificate</span>
                  <span className="font-semibold text-[#f59e0b]">{vehicle.pucExp}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#565e74]">National Permit</span>
                  <span className="font-semibold text-[#10b981]">{vehicle.permitExp}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance History Table */}
          <div>
            <h3 className="font-bold text-base text-[#0b1c30] mb-4">Service & Repair History</h3>
            <DataTable headers={["Service Date", "Work Description", "Cost", "Odometer", "Service Center"]}>
              {serviceHistory.map((s, idx) => (
                <tr key={idx} className="hover:bg-[#f8f9ff] transition-colors">
                  <td className="px-6 py-4 font-semibold text-[#0b1c30]">{s.date}</td>
                  <td className="px-6 py-4 text-[#434655] font-medium">{s.type}</td>
                  <td className="px-6 py-4 font-bold text-[#004ac6]">{s.cost}</td>
                  <td className="px-6 py-4 text-[#565e74]">{s.odometer}</td>
                  <td className="px-6 py-4 text-[#434655]">{s.center}</td>
                </tr>
              ))}
            </DataTable>
          </div>
        </main>
      </div>

      <AssignVehicleModal isOpen={isAssignOpen} onClose={() => setIsAssignOpen(false)} vehicleName={`${vehicle.make} ${vehicle.model}`} />
      <LogServiceModal isOpen={isServiceOpen} onClose={() => setIsServiceOpen(false)} />
      <UploadDocumentModal isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />
    </div>
  );
}
