"use client";

import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import StatusBadge from "@/components/ui/StatusBadge";
import DataTable from "@/components/ui/DataTable";
import AssignVehicleModal from "@/components/modals/AssignVehicleModal";

export default function AssignmentsPage() {
  const [isAssignOpen, setIsAssignOpen] = useState(false);

  const assignments = [
    { id: "ASN-109", vehicle: "Toyota Innova (KA 01 EQ 4589)", driver: "Rajesh Kumar", startDate: "2026-07-01", returnDate: "Active", status: "ACTIVE" },
    { id: "ASN-108", vehicle: "Tata Ace Gold (MH 12 AB 1234)", driver: "Anita Sharma", startDate: "2026-06-15", returnDate: "Active", status: "ACTIVE" },
    { id: "ASN-107", vehicle: "Mahindra Bolero (DL 04 C 9876)", driver: "Vikram Singh", startDate: "2026-05-10", returnDate: "2026-07-20", status: "VALID" },
    { id: "ASN-106", vehicle: "Eicher Pro 2049 (KA 05 M 6543)", driver: "Mohammed Ali", startDate: "2026-04-01", returnDate: "2026-06-30", status: "VALID" },
    { id: "ASN-105", vehicle: "Force Traveler (KA 02 J 1122)", driver: "Suresh Raina", startDate: "2026-01-15", returnDate: "2026-04-15", status: "INACTIVE" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title="Vehicle Assignment History"
          subtitle="Track driver assignments, deployment dates, and active routes"
          onActionClick={() => setIsAssignOpen(true)}
          actionLabel="+ New Assignment"
        />

        <main className="p-8 space-y-6 flex-1 animate-fade-up">
          <DataTable headers={["Assignment ID", "Vehicle Assigned", "Driver", "Start Date", "End / Return Date", "Status", "Actions"]}>
            {assignments.map((asn) => (
              <tr key={asn.id} className="hover:bg-[#f8f9ff] transition-colors">
                <td className="px-6 py-4 font-mono font-bold text-[#004ac6]">{asn.id}</td>
                <td className="px-6 py-4 font-bold text-[#0b1c30]">{asn.vehicle}</td>
                <td className="px-6 py-4 text-[#434655] font-medium">{asn.driver}</td>
                <td className="px-6 py-4 text-[#565e74]">{asn.startDate}</td>
                <td className="px-6 py-4 text-[#565e74]">{asn.returnDate}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={asn.status} />
                </td>
                <td className="px-6 py-4">
                  <button className="text-[#004ac6] font-semibold hover:underline text-xs">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </DataTable>
        </main>
      </div>

      <AssignVehicleModal isOpen={isAssignOpen} onClose={() => setIsAssignOpen(false)} />
    </div>
  );
}
