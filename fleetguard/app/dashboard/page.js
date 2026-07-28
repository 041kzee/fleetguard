"use client";

import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import MetricBlock from "@/components/ui/MetricBlock";
import StatusBadge from "@/components/ui/StatusBadge";
import DataTable from "@/components/ui/DataTable";
import RegisterVehicleModal from "@/components/modals/RegisterVehicleModal";
import AssignVehicleModal from "@/components/modals/AssignVehicleModal";

export default function Dashboard() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isAssignOpen, setIsAssignOpen] = useState(false);

  const activities = [
    { vehicle: "Toyota Innova (KA 01 EQ 4589)", driver: "Rajesh Kumar", event: "Routine Service Completed", status: "VALID", time: "10 mins ago" },
    { vehicle: "Tata Ace Gold (MH 12 AB 1234)", driver: "Anita Sharma", event: "Assigned Route #402", status: "ACTIVE", time: "1 hour ago" },
    { vehicle: "Mahindra Bolero (DL 04 C 9876)", driver: "Vikram Singh", event: "PUC Renewal Pending", status: "EXPIRING_SOON", time: "3 hours ago" },
    { vehicle: "Eicher Pro 2049 (KA 05 M 6543)", driver: "Mohammed Ali", event: "Brake Inspection Logged", status: "MAINTENANCE", time: "5 hours ago" },
    { vehicle: "Force Traveler (KA 02 J 1122)", driver: "Suresh Raina", event: "Insurance Expired", status: "EXPIRED", time: "1 day ago" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title="FleetGuard Dashboard"
          subtitle="Real-time operational metrics & vehicle management"
          onActionClick={() => setIsRegisterOpen(true)}
          actionLabel="+ Add Vehicle"
        />

        <main className="p-8 space-y-8 flex-1 animate-fade-up">
          {/* Executive Metrics Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricBlock
              title="Total Vehicles"
              value="142"
              change="+5%"
              isPositive={true}
              icon="directions_car"
              iconBg="bg-[#e5eeff]"
              iconColor="text-[#004ac6]"
            />
            <MetricBlock
              title="Active Drivers"
              value="118"
              change="+3%"
              isPositive={true}
              icon="group"
              iconBg="bg-[#10b981]/10"
              iconColor="text-[#10b981]"
            />
            <MetricBlock
              title="Pending Service"
              value="8"
              change="-2"
              isPositive={true}
              icon="build"
              iconBg="bg-[#f59e0b]/10"
              iconColor="text-[#f59e0b]"
            />
            <MetricBlock
              title="Compliance Rate"
              value="98.4%"
              change="+1.2%"
              isPositive={true}
              icon="verified"
              iconBg="bg-[#2563eb]/10"
              iconColor="text-[#2563eb]"
            />
          </div>

          {/* Quick Action Bento Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-xs flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-[#0b1c30]">Register New Vehicle</h4>
                <p className="text-xs text-[#565e74] mt-0.5">Add VIN, specs, and status</p>
              </div>
              <button
                onClick={() => setIsRegisterOpen(true)}
                className="p-3 bg-[#e5eeff] text-[#004ac6] hover:bg-[#004ac6] hover:text-white rounded-xl transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-xs flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-[#0b1c30]">Assign Vehicle to Driver</h4>
                <p className="text-xs text-[#565e74] mt-0.5">Set driver assignment timeline</p>
              </div>
              <button
                onClick={() => setIsAssignOpen(true)}
                className="p-3 bg-[#e5eeff] text-[#004ac6] hover:bg-[#004ac6] hover:text-white rounded-xl transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">badge</span>
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-xs flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-[#0b1c30]">Compliance Alert Feed</h4>
                <p className="text-xs text-[#565e74] mt-0.5">3 documents expiring this week</p>
              </div>
              <a
                href="/compliance"
                className="p-3 bg-[#f59e0b]/10 text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white rounded-xl transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">warning</span>
              </a>
            </div>
          </div>

          {/* Recent Fleet Activity Table */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-base text-[#0b1c30]">Recent Operational Activity</h3>
                <p className="text-xs text-[#565e74]">Live log of assignments, compliance, and service updates</p>
              </div>
              <a href="/vehicles" className="text-xs font-semibold text-[#004ac6] hover:underline">
                View All Vehicles &rarr;
              </a>
            </div>

            <DataTable headers={["Vehicle Details", "Assigned Driver", "Operational Event", "Status", "Timestamp", "Actions"]}>
              {activities.map((act, idx) => (
                <tr key={idx} className="hover:bg-[#f8f9ff] transition-colors">
                  <td className="px-6 py-4 font-semibold text-[#0b1c30]">{act.vehicle}</td>
                  <td className="px-6 py-4 text-[#434655]">{act.driver}</td>
                  <td className="px-6 py-4 text-[#434655]">{act.event}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={act.status} />
                  </td>
                  <td className="px-6 py-4 text-[#565e74] text-[11px]">{act.time}</td>
                  <td className="px-6 py-4">
                    <button className="text-[#004ac6] font-semibold hover:underline text-xs">Details</button>
                  </td>
                </tr>
              ))}
            </DataTable>
          </div>
        </main>
      </div>

      {/* Modals */}
      <RegisterVehicleModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
      <AssignVehicleModal isOpen={isAssignOpen} onClose={() => setIsAssignOpen(false)} />
    </div>
  );
}
