"use client";

import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "FleetGuard Logistics Ltd",
    contactEmail: "admin@fleetguard.com",
    alertDays: "30",
    autoApproveDrivers: false,
    theme: "Light",
  });

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title="FleetGuard Organization Settings"
          subtitle="System preferences, notification thresholds, and security controls"
        />

        <main className="p-8 space-y-8 flex-1 max-w-4xl animate-fade-up">
          {saved && (
            <div className="p-4 rounded-xl bg-[#10b981]/10 text-[#006d35] font-semibold text-xs border border-[#10b981]/20 flex items-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              <span>Settings saved successfully!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-xs space-y-4">
              <h3 className="font-bold text-base text-[#0b1c30] border-b border-[#e2e8f0] pb-3">
                Organization Profile
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-[#434655] font-medium mb-1">Company / Fleet Name</label>
                  <input
                    type="text"
                    value={formData.orgName}
                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
                  />
                </div>
                <div>
                  <label className="block text-[#434655] font-medium mb-1">Admin Email Address</label>
                  <input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6]"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e2e8f0] shadow-xs space-y-4">
              <h3 className="font-bold text-base text-[#0b1c30] border-b border-[#e2e8f0] pb-3">
                Compliance Alert Thresholds
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-[#434655] font-medium mb-1">Document Expiry Alert Lead Time</label>
                  <select
                    value={formData.alertDays}
                    onChange={(e) => setFormData({ ...formData, alertDays: e.target.value })}
                    className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] bg-white"
                  >
                    <option value="15">15 Days Before Expiry</option>
                    <option value="30">30 Days Before Expiry</option>
                    <option value="60">60 Days Before Expiry</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <input
                    type="checkbox"
                    id="autoApprove"
                    checked={formData.autoApproveDrivers}
                    onChange={(e) => setFormData({ ...formData, autoApproveDrivers: e.target.checked })}
                    className="w-4 h-4 text-[#004ac6] rounded border-[#e2e8f0]"
                  />
                  <label htmlFor="autoApprove" className="text-xs text-[#0b1c30] font-medium cursor-pointer">
                    Auto-approve driver registrations
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#2563eb] text-white font-semibold text-xs rounded-xl shadow-md shadow-[#2563eb]/20 hover:bg-[#004ac6] transition-all"
              >
                Save Preferences
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
