"use client";

import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import DataTable from "@/components/ui/DataTable";
import MetricBlock from "@/components/ui/MetricBlock";
import LogServiceModal from "@/components/modals/LogServiceModal";

export default function ServicePage() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const serviceRecords = [
    { id: "SRV-901", vehicle: "Toyota Innova (KA 01 EQ 4589)", type: "Routine Oil Change & Filter", date: "2026-06-12", cost: "₹4,500", odometer: "45,100 km", center: "Bosch Authorized Workshop" },
    { id: "SRV-900", vehicle: "Mahindra Bolero (DL 04 C 9876)", type: "Brake Pad & Rotor Replacement", date: "2026-05-28", cost: "₹7,800", odometer: "78,900 km", center: "Mahindra First Choice" },
    { id: "SRV-899", vehicle: "Tata Ace Gold (MH 12 AB 1234)", type: "Tire Rotation & Balancing", date: "2026-04-14", cost: "₹2,200", odometer: "110,000 km", center: "MRF Tyres Outlet" },
    { id: "SRV-898", vehicle: "Eicher Pro 2049 (KA 05 M 6543)", type: "Engine Clutch Adjustment", date: "2026-03-02", cost: "₹12,400", odometer: "62,000 km", center: "Eicher Heavy Motors" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title="Vehicle Service & Maintenance"
          subtitle="Expense logs, routine inspections, and repair history"
          onActionClick={() => setIsServiceOpen(true)}
          actionLabel="+ Log Service"
        />

        <main className="p-8 space-y-8 flex-1 animate-fade-up">
          {/* Expense & Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricBlock
              title="Total Service Spend (YTD)"
              value="₹1,48,500"
              change="-8%"
              isPositive={true}
              icon="payments"
              iconBg="bg-[#10b981]/10"
              iconColor="text-[#10b981]"
            />
            <MetricBlock
              title="Services Completed"
              value="34 Work Orders"
              change="+12%"
              isPositive={true}
              icon="build_circle"
              iconBg="bg-[#e5eeff]"
              iconColor="text-[#004ac6]"
            />
            <MetricBlock
              title="Avg Service Cost / Vehicle"
              value="₹4,367"
              change="-4%"
              isPositive={true}
              icon="calculator"
              iconBg="bg-[#2563eb]/10"
              iconColor="text-[#2563eb]"
            />
          </div>

          <DataTable headers={["Work Order ID", "Vehicle", "Service Description", "Date", "Cost", "Odometer", "Service Workshop"]}>
            {serviceRecords.map((sr) => (
              <tr key={sr.id} className="hover:bg-[#f8f9ff] transition-colors">
                <td className="px-6 py-4 font-mono font-bold text-[#004ac6]">{sr.id}</td>
                <td className="px-6 py-4 font-bold text-[#0b1c30]">{sr.vehicle}</td>
                <td className="px-6 py-4 text-[#434655] font-medium">{sr.type}</td>
                <td className="px-6 py-4 text-[#565e74]">{sr.date}</td>
                <td className="px-6 py-4 font-bold text-[#0b1c30]">{sr.cost}</td>
                <td className="px-6 py-4 text-[#565e74]">{sr.odometer}</td>
                <td className="px-6 py-4 text-[#434655]">{sr.center}</td>
              </tr>
            ))}
          </DataTable>
        </main>
      </div>

      <LogServiceModal isOpen={isServiceOpen} onClose={() => setIsServiceOpen(false)} />
    </div>
  );
}
