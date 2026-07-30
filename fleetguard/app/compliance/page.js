"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Navbar";
import StatusBadge from "@/components/ui/StatusBadge";
import DataTable from "@/components/ui/DataTable";
import MetricBlock from "@/components/ui/MetricBlock";
import UploadDocumentModal from "@/components/modals/UploadDocumentModal";

export default function CompliancePage() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [filter, setFilter] = useState("ALL");

  const complianceDocs = [
    { id: "DOC-301", vehicle: "Toyota Innova (KA 01 EQ 4589)", type: "Comprehensive Insurance", expiry: "2027-03-15", status: "VALID", issuer: "ICICI Lombard" },
    { id: "DOC-302", vehicle: "Toyota Innova (KA 01 EQ 4589)", type: "Pollution Under Control (PUC)", expiry: "2026-11-10", status: "VALID", issuer: "RTO Authorized Center" },
    { id: "DOC-303", vehicle: "Mahindra Bolero (DL 04 C 9876)", type: "PUC Renewal", expiry: "2026-08-05", status: "EXPIRING_SOON", issuer: "Delhi RTO" },
    { id: "DOC-304", vehicle: "Force Traveler (KA 02 J 1122)", type: "National Route Permit", expiry: "2026-07-01", status: "EXPIRED", issuer: "State Transport Dept" },
    { id: "DOC-305", vehicle: "Tata Ace Gold (MH 12 AB 1234)", type: "Fitness Certificate", expiry: "2027-05-20", status: "VALID", issuer: "Maharashtra RTO" },
  ];
  const filteredDocs = complianceDocs.filter((doc) => {
  if (filter === "VALID") return doc.status === "VALID";
  if (filter === "EXPIRING") return doc.status === "EXPIRING_SOON";
  if (filter === "EXPIRED") return doc.status === "EXPIRED";
  return true;
});

  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title="Compliance & Regulatory Management"
          subtitle="Monitor permit renewals, PUC certificates, and insurance coverage"
          onActionClick={() => setIsUploadOpen(true)}
          actionLabel="+ Upload Document"
        />

        <main className="p-8 space-y-8 flex-1 animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricBlock
              title="Compliant Vehicles"
              value="138 / 142"
              change="97.2%"
              isPositive={true}
              icon="verified"
              iconBg="bg-[#10b981]/10"
              iconColor="text-[#10b981]"
            />
            <MetricBlock
              title="Expiring Within 30 Days"
              value="3 Documents"
              change="Action Needed"
              isPositive={false}
              icon="warning"
              iconBg="bg-[#f59e0b]/10"
              iconColor="text-[#f59e0b]"
            />
            <MetricBlock
              title="Expired Documents"
              value="1 Document"
              change="Immediate Alert"
              isPositive={false}
              icon="report"
              iconBg="bg-[#ef4444]/10"
              iconColor="text-[#ef4444]"
            />
          </div>
          {/* Upcoming Compliance */}
<div className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 flex items-center gap-3">
  <span className="material-symbols-outlined text-orange-600">
    warning
  </span>

  <div>
    <h3 className="font-semibold text-orange-700">
      Upcoming Compliance Expiries
    </h3>

    <p className="text-sm text-orange-600">
      Compliance documents approaching expiry will be displayed here.
    </p>
  </div>
</div>

{/* Filter Buttons */}
<div className="flex gap-3">
  {["ALL", "VALID", "EXPIRING", "EXPIRED"].map((item) => (
    <button
      key={item}
      onClick={() => setFilter(item)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
        filter === item
          ? "bg-[#004ac6] text-white"
          : "bg-white border border-[#d7dce7] text-[#565e74]"
      }`}
    >
      {item}
    </button>
  ))}
</div>

          <DataTable headers={["Document ID", "Vehicle Name", "Document Type", "Issuer", "Expiry Date", "Compliance Status", "Actions"]}>
            {filteredDocs.map((doc) => (
              <tr key={doc.id} className="hover:bg-[#f8f9ff] transition-colors">
                <td className="px-6 py-4 font-mono font-bold text-[#004ac6]">{doc.id}</td>
                <td className="px-6 py-4 font-bold text-[#0b1c30]">{doc.vehicle}</td>
                <td className="px-6 py-4 text-[#434655] font-medium">{doc.type}</td>
                <td className="px-6 py-4 text-[#565e74]">{doc.issuer}</td>
                <td className="px-6 py-4 font-semibold text-[#0b1c30]">{doc.expiry}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={doc.status} />
                </td>
                <td className="px-6 py-4">
  <p className="font-semibold text-[#0b1c30]">
    {doc.expiry}
  </p>

  {doc.status === "EXPIRING_SOON" && (
    <p className="text-xs text-orange-500">
      Expires Soon
    </p>
  )}

  {doc.status === "EXPIRED" && (
    <p className="text-xs text-red-500">
      Expired
    </p>
  )}
</td>
              </tr>
            ))}
          </DataTable>
        </main>
      </div>

      <UploadDocumentModal isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />
    </div>
  );
}
