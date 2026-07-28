"use client";

import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";
import StatusBadge from "@/components/ui/StatusBadge";
import DataTable from "@/components/ui/DataTable";

export default function UsersPage() {
  const [users, setUsers] = useState([
    { id: "1", name: "Rajesh Kumar", email: "rajesh@fleetguard.com", role: "DRIVER", status: "APPROVED", phone: "+91 98765 43210" },
    { id: "2", name: "Anita Sharma", email: "anita@fleetguard.com", role: "FLEET_MANAGER", status: "APPROVED", phone: "+91 98123 45678" },
    { id: "3", name: "Vikram Singh", email: "vikram@fleetguard.com", role: "DRIVER", status: "APPROVED", phone: "+91 97890 12345" },
    { id: "4", name: "Sanjay Gupta", email: "sanjay@fleetguard.com", role: "FLEET_MANAGER", status: "PENDING", phone: "+91 96543 21098" },
    { id: "5", name: "Mohammed Ali", email: "ali@fleetguard.com", role: "DRIVER", status: "APPROVED", phone: "+91 95432 10987" },
  ]);

  const [loadingEmail, setLoadingEmail] = useState("");

  const handleApprove = async (email) => {
    setLoadingEmail(email);
    try {
      const res = await fetch("/api/auth/fleet-manager/approve", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) => (u.email === email ? { ...u, status: "APPROVED" } : u))
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingEmail("");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title="User & Driver Management"
          subtitle="Authorize drivers, fleet managers, and approve pending access requests"
        />

        <main className="p-8 space-y-6 flex-1 animate-fade-up">
          <DataTable headers={["Full Name", "Email Address", "Phone Number", "Role", "Approval Status", "Actions"]}>
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-[#f8f9ff] transition-colors">
                <td className="px-6 py-4 font-bold text-[#0b1c30]">{u.name}</td>
                <td className="px-6 py-4 text-[#434655] font-mono">{u.email}</td>
                <td className="px-6 py-4 text-[#565e74]">{u.phone}</td>
                <td className="px-6 py-4 font-semibold text-[#004ac6] text-xs">
                  {u.role.replace("_", " ")}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={u.status} />
                </td>
                <td className="px-6 py-4">
                  {u.status === "PENDING" ? (
                    <button
                      onClick={() => handleApprove(u.email)}
                      disabled={loadingEmail === u.email}
                      className="px-3 py-1.5 bg-[#10b981] text-white font-semibold rounded-lg text-xs shadow-xs hover:bg-[#006d35] transition-colors"
                    >
                      {loadingEmail === u.email ? "Approving..." : "Approve Access"}
                    </button>
                  ) : (
                    <span className="text-[#565e74] text-xs">Authorized</span>
                  )}
                </td>
              </tr>
            ))}
          </DataTable>
        </main>
      </div>
    </div>
  );
}
