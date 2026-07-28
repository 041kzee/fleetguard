"use client";

import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    { id: "1", title: "PUC Expiry Alert", desc: "Mahindra Bolero (DL 04 C 9876) PUC expires in 8 days.", type: "WARNING", date: "10 mins ago", read: false },
    { id: "2", title: "Service Completed", desc: "Toyota Innova (KA 01 EQ 4589) synthetic oil change logged successfully.", type: "SUCCESS", date: "1 hour ago", read: false },
    { id: "3", title: "Document Expired Alert", desc: "Force Traveler (KA 02 J 1122) National Route Permit has expired.", type: "ERROR", date: "3 hours ago", read: true },
    { id: "4", title: "New Driver Registration", desc: "Rajesh Kumar driver profile approved & assigned to Innova.", type: "INFO", date: "1 day ago", read: true },
  ]);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title="Notifications & Fleet Alerts"
          subtitle="Real-time alerts for document renewals, maintenance, and driver updates"
        />

        <main className="p-8 space-y-6 flex-1 max-w-4xl animate-fade-up">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-[#0b1c30]">Recent Activity Feed</h3>
            <button
              onClick={markAllRead}
              className="text-xs font-semibold text-[#004ac6] hover:underline"
            >
              Mark all as read
            </button>
          </div>

          <div className="space-y-4">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`p-5 rounded-xl border transition-all flex items-start gap-4 ${
                  n.read
                    ? "bg-white border-[#e2e8f0]"
                    : "bg-[#e5eeff]/40 border-[#004ac6]/30 shadow-xs"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    n.type === "WARNING"
                      ? "bg-[#f59e0b]/10 text-[#f59e0b]"
                      : n.type === "ERROR"
                      ? "bg-[#ef4444]/10 text-[#ef4444]"
                      : n.type === "SUCCESS"
                      ? "bg-[#10b981]/10 text-[#10b981]"
                      : "bg-[#e5eeff] text-[#004ac6]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {n.type === "WARNING"
                      ? "warning"
                      : n.type === "ERROR"
                      ? "error"
                      : n.type === "SUCCESS"
                      ? "check_circle"
                      : "notifications"}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-[#0b1c30]">{n.title}</h4>
                    <span className="text-[11px] text-[#565e74]">{n.date}</span>
                  </div>
                  <p className="text-xs text-[#434655] mt-1">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
