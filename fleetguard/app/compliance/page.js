"use client";

import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import StatusBadge from "@/components/ui/StatusBadge";
import DataTable from "@/components/ui/DataTable";
import MetricBlock from "@/components/ui/MetricBlock";
import UploadDocumentModal from "@/components/modals/UploadDocumentModal";

export default function CompliancePage() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const complianceDocs = [
    { id: "DOC-301", vehicle: "Toyota Innova (KA 01 EQ 4589)", type: "Comprehensive Insurance", expiry: "2027-03-15", status: "VALID", issuer: "ICICI Lombard" },
    { id: "DOC-302", vehicle: "Toyota Innova (KA 01 EQ 4589)", type: "Pollution Under Control (PUC)", expiry: "2026-11-10", status: "VALID", issuer: "RTO Authorized Center" },
    { id: "DOC-303", vehicle: "Mahindra Bolero (DL 04 C 9876)", type: "PUC Renewal", expiry: "2026-08-05", status: "EXPIRING_SOON", issuer: "Delhi RTO" },
    { id: "DOC-304", vehicle: "Force Traveler (KA 02 J 1122)", type: "National Route Permit", expiry: "2026-07-01", status: "EXPIRED", issuer: "State Transport Dept" },
    { id: "DOC-305", vehicle: "Tata Ace Gold (MH 12 AB 1234)", type: "Fitness Certificate", expiry: "2027-05-20", status: "VALID", issuer: "Maharashtra RTO" },
  ];

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

          <DataTable headers={["Document ID", "Vehicle Name", "Document Type", "Issuer", "Expiry Date", "Compliance Status", "Actions"]}>
            {complianceDocs.map((doc) => (
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
                  <button className="text-[#004ac6] font-semibold hover:underline text-xs">
                    Download File
                  </button>
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
